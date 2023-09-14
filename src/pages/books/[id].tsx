import { getBookData, getALLBookIds } from "../../lib/book";
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

export default function BookDetail({ bookData }: any) {
  const breadcrumbsParams: BreadcrumbParams[] = [
    {
      href: "/books",
      text: "書籍管理",
    },
    {
      text: "アイテム詳細",
    },
  ];
  return (
    <>
      <Layout breadcrumbsParams={breadcrumbsParams}>
        <div>fuga</div>
      </Layout>
    </>
  );
}
