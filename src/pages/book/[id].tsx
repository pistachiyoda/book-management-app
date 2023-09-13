import { getBookData, getALLBookIds } from "../../lib/book";

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
  return (
    <>
      <div>アイテム詳細ページ</div>
      <div>{bookData.id}</div>
    </>
  );
}
