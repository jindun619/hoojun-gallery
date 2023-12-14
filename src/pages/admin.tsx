import { supabase } from "@/lib/supabase/client";
import React, { useState } from "react";

import { Session } from "@supabase/supabase-js";

interface InputValues {
  email: string;
  password: string;
}

export default function AdminPage() {
  const [session, setSession] = useState<Session>();
  const [inputValues, setInputValues] = useState<InputValues>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: inputValues.email,
      password: inputValues.password,
    });
    if (error) {
      console.log(error);
    } else {
      setSession(data.session);
    }
  };

  if (!session) {
    return (
      <div className="h-screen flex justify-center items-center">
        <form className="">
          <input
            type="email"
            name="email"
            placeholder="이메일"
            className="block mb-3 input input-bordered"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="block mb-3 input input-bordered"
            onChange={handleChange}
          />
          <button className="btn btn-neutral" onClick={handleSubmit}>
            로그인
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex justify-center items-center">
        <form>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <div className="mt-3 flex flex-col gap-1">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="제목"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="설명"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-neutral mt-3">제출</button>
        </form>
      </div>
    );
  }
}
