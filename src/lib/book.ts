export type Book = {
  id: number;
  name: string;
  author: string;
  category: string;
  image: string;
  overview: string;
  publishDate: string;
  publisher: string;
};

export type BookEditableData = Omit<Book, "id">;

export const books: Book[] = [
  {
    id: 0,
    name: "ゼロから作るDeepLearning",
    author: "斎藤康毅",
    category: "機械学習",
    image: "/images/zero-deeplearning.jpg",
    overview:
      "Pythonで書かれたゼロから作るDeepLearningのサンプルコードです。書籍内で紹介されているコードをJupyter Notebook形式で実行できます。",
    publishDate: "2016/09/24",
    publisher: "O'REILLY",
  },
  {
    id: 1,
    name: "リーダブルコード",
    author: "Dustin Boswell, Trevor Foucher",
    category: "プログラミング",
    image: "/images/readable-code.jpg",
    overview: "プログラミングにおけるコードの書き方について解説した書籍です。",
    publishDate: "2012/03/01",
    publisher: "O'REILLY",
  },
  {
    id: 2,
    name: "ハヤブサ消防団",
    author: "山田章博",
    category: "小説",
    image: "/images/hayabusa.jpg",
    overview: "消防団の活動を描いた小説です。",
    publishDate: "2019/08/01",
    publisher: "集英社",
  },
  {
    id: 3,
    name: "星の王子さま",
    author: "アントワーヌ・ド・サン＝テグジュペリ",
    category: "小説",
    image: "/images/prince.jpg",
    overview: "星の王子さまの物語です。",
    publishDate: "1943/04/06",
    publisher: "講談社",
  },
  {
    id: 4,
    name: "エルマーの冒険",
    author: "デビッド・マッキー",
    category: "絵本",
    image: "/images/elmer.jpg",
    overview: "エルマーの冒険の物語です。",
    publishDate: "1989/09/01",
    publisher: "講談社",
  },
];

export async function getALLBookIds() {
  return books.map((book) => {
    {
      params: {
        id: book.id;
      }
    }
  });
}

export async function getBookData(id: number) {
  return {
    id: id,
  };
}
