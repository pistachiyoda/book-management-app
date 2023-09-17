export type Book = {
  id: number;
  title: string;
  image: string;
  author: string;
  category: string;
  overview: string;
  publishDate: string;
  publisher: string;
};

export const bookInfoCategories = [
  "id",
  "タイトル",
  "サムネイル",
  "著者",
  "カテゴリー",
  "概要",
  "発売日",
  "出版社",
  "",
];

export type BookEditableData = Omit<Book, "id">;

export const books: Book[] = [
  {
    id: 0,
    title: "ゼロから作るDeepLearning",
    image: "0.jpg",
    author: "斎藤康毅",
    category: "機械学習",
    overview:
      "Pythonで書かれたゼロから作るDeepLearningのサンプルコードです。書籍内で紹介されているコードをJupyter Notebook形式で実行できます。",
    publishDate: "2016/09/24",
    publisher: "O'REILLY",
  },
  {
    id: 1,
    title: "リーダブルコード",
    image: "1.jpg",
    author: "Dustin Boswell, Trevor Foucher",
    category: "プログラミング",
    overview: "プログラミングにおけるコードの書き方について解説した書籍です。",
    publishDate: "2012/03/01",
    publisher: "O'REILLY",
  },
  {
    id: 2,
    title: "ハヤブサ消防団",
    image: "2.jpg",
    author: "山田章博",
    category: "小説",
    overview: "消防団の活動を描いた小説です。",
    publishDate: "2019/08/01",
    publisher: "集英社",
  },
  {
    id: 3,
    title: "星の王子さま",
    image: "3.jpg",
    author: "アントワーヌ・ド・サン＝テグジュペリ",
    category: "小説",
    overview: "星の王子さまの物語です。",
    publishDate: "1943/04/06",
    publisher: "講談社",
  },
  {
    id: 4,
    title: "エルマーの冒険",
    image: "4.jpg",
    author: "デビッド・マッキー",
    category: "絵本",
    overview: "エルマーの冒険の物語です。",
    publishDate: "1989/09/01",
    publisher: "講談社",
  },
];

export async function getALLBookIds(books: Book[]) {
  return books.map((book) => {
    return {
      params: {
        id: book.id.toString(),
      },
    };
  });
}

export async function getBookData(id: number) {
  const book = books.find((book) => book.id === id);
  if (!book) {
    throw new Error("Book not found");
  }
  return book;
}
