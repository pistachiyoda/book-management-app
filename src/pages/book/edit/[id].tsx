import { getBookData, getALLBookIds } from "../../../lib/book";

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
  return (
    <>
      <div>アイテム編集ページ</div>
      <div>{bookData.id}</div>
    </>
  );
}
