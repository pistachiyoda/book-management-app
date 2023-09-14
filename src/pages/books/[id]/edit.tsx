import { getBookData, getALLBookIds } from "../../../lib/book";
import Layout, { BreadcrumbParams } from "@/component/layout";

export async function getStaticProps({ params }: any) {
  const bookData = await getBookData(Number(params.id));
  return {
    props: {
      bookData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getALLBookIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BookEdit({ bookData }: any) {
  const breadcrumbsParams: BreadcrumbParams[] = [
    {
      href: "/books",
      text: "書籍管理",
    },
    {
      href: "/books/" + bookData.id,
      text: "アイテム詳細",
    },
    {
      text: "アイテム編集",
    },
  ];
  return (
    <>
      <Layout breadcrumbsParams={breadcrumbsParams}>
        <div>piyo</div>
      </Layout>
    </>
  );
}
