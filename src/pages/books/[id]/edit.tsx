import { GetStaticProps } from "next";
import {
  getBookData,
  getALLBookIds,
  Book,
  bookInfoCategories,
  booksArrayData,
  getBookDataFromLocalStorage,
} from "../../../lib/book";
import Layout, { BreadcrumbParams } from "@/component/layout";
import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type BookDetailProps = { bookData: Book };

export const getStaticProps: GetStaticProps<BookDetailProps> = async ({
  params,
}) => {
  const bookData = await getBookData(Number(params?.id), booksArrayData);
  return {
    props: {
      bookData,
    },
  };
};

export async function getStaticPaths() {
  const paths = await getALLBookIds(booksArrayData);
  return {
    paths,
    fallback: false,
  };
}

export const BookDetail: FC<BookDetailProps> = ({
  bookData,
}: {
  bookData: Book;
}) => {
  const breadcrumbsParams: BreadcrumbParams[] = [
    {
      href: "/books",
      text: "書籍一覧",
    },
    {
      href: "/books/" + bookData.id,
      text: "アイテム詳細",
    },
    {
      text: "アイテム編集",
    },
  ];

  const [currentBookData, setCurrentBookData] = useState<Book>({
    id: 0,
    title: "",
    image: "",
    author: "",
    category: "",
    overview: "",
    publishDate: "",
    publisher: "",
  });

  const [title, setTitle] = useState(currentBookData.title);
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState(currentBookData.author);
  const [category, setCategory] = useState(currentBookData.category);
  const [overview, setOverview] = useState(currentBookData.overview);
  const [publishDate, setPublishDate] = useState(currentBookData.publishDate);
  const [publisher, setPublisher] = useState(currentBookData.publisher);

  useEffect(() => {
    const currentBookData: Book = getBookDataFromLocalStorage()
      ? getBookDataFromLocalStorage()[bookData.id]
      : null;
    if (!currentBookData) {
      setCurrentBookData(bookData);
    } else {
      setCurrentBookData(currentBookData);
      setTitle(currentBookData.title);
      setImage(currentBookData.image);
      setAuthor(currentBookData.author);
      setCategory(currentBookData.category);
      setOverview(currentBookData.overview);
      setPublishDate(currentBookData.publishDate);
      setPublisher(currentBookData.publisher);
    }
  }, [bookData]);

  const onChangeText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setStateFunc: Dispatch<SetStateAction<string>>
  ) => {
    setStateFunc(event.target.value);
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      throw new Error("file not found.");
    }
    setImage(event.target.files[0].name);
  };

  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currentBookData = getBookDataFromLocalStorage();
    currentBookData[bookData.id].title = title;
    currentBookData[bookData.id].image = image;
    currentBookData[bookData.id].author = author;
    currentBookData[bookData.id].category = category;
    currentBookData[bookData.id].overview = overview;
    currentBookData[bookData.id].publishDate = publishDate;
    currentBookData[bookData.id].publisher = publisher;
    localStorage.setItem("books", JSON.stringify(currentBookData));
    console.log(currentBookData);
    router.push("/books");
  };

  return (
    <>
      <Layout breadcrumbsParams={breadcrumbsParams}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TableContainer>
            <Table sx={{ minWidth: 600 }} aria-label="book detail table">
              <TableHead>
                <TableRow>
                  {["key", "value"].map((column, id) => (
                    <TableCell
                      key={id}
                      align="center"
                      style={{ minWidth: 200 }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[0]}</TableCell>
                  <TableCell align="center">{currentBookData?.id}</TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[1]}</TableCell>
                  <TableCell align="center">
                    <TextField
                      name="title"
                      variant="outlined"
                      margin="normal"
                      onChange={(e) => onChangeText(e, setTitle)}
                      value={title}
                    ></TextField>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[2]}</TableCell>
                  <TableCell align="center">
                    <Box
                      sx={{
                        position: "relative",
                        width: 100,
                        height: 100,
                        margin: "auto",
                      }}
                    >
                      <Image
                        src={`/${image}`}
                        alt={title || ""}
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Input type="file" onChange={onChangeImage}></Input>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[3]}</TableCell>
                  <TableCell align="center">
                    <TextField
                      name="title"
                      variant="outlined"
                      margin="normal"
                      onChange={(e) => onChangeText(e, setAuthor)}
                      value={author}
                    ></TextField>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[4]}</TableCell>
                  <TableCell align="center">
                    <TextField
                      name="title"
                      variant="outlined"
                      margin="normal"
                      onChange={(e) => onChangeText(e, setCategory)}
                      value={category}
                    ></TextField>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[5]}</TableCell>
                  <TableCell align="center">
                    <TextField
                      name="title"
                      variant="outlined"
                      margin="normal"
                      onChange={(e) => onChangeText(e, setOverview)}
                      value={overview}
                    ></TextField>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[6]}</TableCell>
                  <TableCell align="center">
                    <TextField
                      name="title"
                      variant="outlined"
                      margin="normal"
                      onChange={(e) => onChangeText(e, setPublishDate)}
                      value={publishDate}
                    ></TextField>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[7]}</TableCell>
                  <TableCell align="center">
                    <TextField
                      name="title"
                      variant="outlined"
                      margin="normal"
                      onChange={(e) => onChangeText(e, setPublisher)}
                      value={publisher}
                    ></TextField>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            spacing={5}
            direction="row"
            alignItems="center"
            justifyContent="center"
            mt={5}
            pb={5}
          >
            <Link href={`/books`}>
              <Button
                variant="outlined"
                size="large"
                sx={{ fontWeight: "bold" }}
              >
                キャンセル
              </Button>
            </Link>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ fontWeight: "bold" }}
            >
              更新
            </Button>
          </Stack>
        </Box>
      </Layout>
    </>
  );
};

export default BookDetail;
