import { supabase } from "@/lib/supabase/client";
import React, { useState, useEffect } from "react";

import { Session } from "@supabase/supabase-js";

interface Folder {
  id: number;
  name: string;
  desc?: string;
}
interface LoginInputs {
  email: string;
  password: string;
}
interface FolderInputs {
  name: string;
  desc: string;
}
interface UploadInputs {
  folder?: number;
  file?: File;
  title: string;
  desc: string;
}

export default function AdminPage() {
  const [session, setSession] = useState<Session>();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loginInputs, setLoginInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const [folderInputs, setFolderInputs] = useState<FolderInputs>({
    name: "",
    desc: "",
  });
  const [uploadInputs, setUploadInputs] = useState<UploadInputs>({
    title: "",
    desc: "",
  });

  //LOGIN HANDLERS
  const handleLoginInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInputs({
      ...loginInputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginInputs.email,
      password: loginInputs.password,
    });
    if (error) {
      console.log(error);
    } else {
      setSession(data.session);
    }
  };
  //FOLDER HANDLERS
  const handleFolderInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderInputs({
      ...folderInputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleFolderSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("folders")
      .insert({ name: folderInputs.name, desc: folderInputs.desc });
    if (error) {
      console.log("error: ", error);
    } else {
      setFolderInputs({
        name: "",
        desc: "",
      });
    }
  };
  //UPLOAD HANDLERS
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof e.target.value === "number") {
      setUploadInputs({
        ...uploadInputs,
        folder: e.target.value,
      });
    } else {
      console.log("e.target.value not a number");
    }
  };
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadInputs({
      ...uploadInputs,
      file: file as File,
    });
  };
  const handleUploadInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadInputs({
      ...uploadInputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleUploadSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const imageId: number = Date.now();
    //UPLOAD TO DATABASE
    {
      const { error } = await supabase.from("images").insert({
        id: imageId,
        folderId: uploadInputs.folder,
        title: uploadInputs.title,
        desc: uploadInputs.desc,
      });
      if (error) {
        console.log(error);
      }
    }
    //UPLOAD TO STORAGE
    {
      const { error } = await supabase.storage
        .from("images")
        .upload(`${uploadInputs.folder}/${imageId}`, uploadInputs.file as File);
      if (error) {
        console.log(error);
      }
    }
    setUploadInputs({
      folder: folders[0].id,
      file: undefined,
      title: "",
      desc: "",
    });
  };

  useEffect(() => {
    (async () => {
      {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          setSession(data.session);
        }
      }
      {
        const { data, error } = await supabase.from("folders").select();
        if (error) {
          console.log(error);
        } else {
          setFolders(data);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (folders.length > 0) {
      setUploadInputs({
        ...uploadInputs,
        folder: folders[0].id,
      });
    }
  }, [folders]);

  if (!session) {
    return (
      <div className="h-screen flex justify-center items-center">
        {/* LOGIN FORM */}
        <form className="">
          <h1 className="mb-5 text-3xl font-semibold text-center">
            Admin Login
          </h1>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            className="block mb-3 input input-bordered"
            onChange={handleLoginInputs}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="block mb-3 input input-bordered"
            onChange={handleLoginInputs}
          />
          <button className="btn btn-neutral" onClick={handleLoginSubmit}>
            로그인
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex justify-center items-center">
        <div>
          {/* FOLDER FORM */}
          <form>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                value={folderInputs.name}
                placeholder="폴더이름"
                className="input input-bordered w-full max-w-xs"
                onChange={handleFolderInputs}
              />
              <input
                type="text"
                name="desc"
                value={folderInputs.desc}
                placeholder="폴더 설명"
                className="input input-bordered w-full max-w-xs"
                onChange={handleFolderInputs}
              />
              <button
                className="btn btn-neutral mt-3"
                onClick={handleFolderSubmit}
                disabled={!folderInputs.name}>
                제출
              </button>
            </div>
          </form>
          <div className="divider divider-neutral"></div>
          {/* UPLOAD FORM */}
          <form>
            <select
              className="select select-bordered w-full max-w-xs"
              value={uploadInputs.folder}
              onChange={handleSelectChange}>
              {folders.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
            <div className="mt-3 flex flex-col gap-1">
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={handleFileSelected}
              />
              <input
                type="text"
                name="title"
                placeholder="제목"
                className="input input-bordered w-full max-w-xs"
                value={uploadInputs.title}
                onChange={handleUploadInputs}
              />
              <input
                type="text"
                name="desc"
                placeholder="설명"
                className="input input-bordered w-full max-w-xs"
                value={uploadInputs.desc}
                onChange={handleUploadInputs}
              />
            </div>
            <button
              className="btn btn-neutral mt-3"
              onClick={handleUploadSubmit}
              disabled={
                typeof uploadInputs.file === "undefined" ||
                typeof uploadInputs.folder === "undefined"
              }>
              제출
            </button>
          </form>
        </div>
      </div>
    );
  }
}
