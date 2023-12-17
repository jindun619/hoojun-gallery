import Head from "next/head";

interface MetaProps {
  title: string;
  og_title?: string;
  og_desc?: string;
  og_img?: string;
}
export function Meta({ title, og_title, og_desc, og_img }: MetaProps) {
  return (
    <Head>
      <title>{`${title} | 김호준 갤러리`}</title>
      {/* og data */}
      <meta
        property="og_title"
        content={og_title ? `${og_title} | 김호준 갤러리` : "김호준갤러리"}
      />
      <meta property="og_des" content={og_desc || "김호준 갤러리"} />
      <meta
        property="og_img"
        content={
          og_img ||
          "https://aultcbwwbvogqsnhhfgo.supabase.co/storage/v1/object/public/images/heroimg"
        }
      />
      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/asset/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/asset/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/asset/favicon-16x16.png"
      />
    </Head>
  );
}
