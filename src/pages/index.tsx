import { Button } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>書籍管理アプリ</title>
        <meta
          name="description"
          content="書籍管理ができるサービスです。登録されている書籍の編集をすることができます。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>アイテム一覧ページ</div>
        <Button variant="text">TEST</Button>
      </main>
    </>
  );
}
