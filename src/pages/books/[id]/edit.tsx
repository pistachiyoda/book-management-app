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
import { FC, FormEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
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

  const [currentBookData, setCurrentBookData] = useState<Book>();
  useEffect(() => {
    const currentBookData = getBookDataFromLocalStorage();
    if (!currentBookData) {
      setCurrentBookData(bookData);
    } else {
      setCurrentBookData(currentBookData[bookData.id]);
    }
  }, [bookData]);

  const [title, setTitle] = useState("");

  const onChangeTitleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const currentBookData = getBookDataFromLocalStorage();
    currentBookData[bookData.id].title = "test";
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
                      onChange={onChangeTitleText}
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
                        src={`/${currentBookData?.image}`}
                        alt={currentBookData?.title || ""}
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[3]}</TableCell>
                  <TableCell align="center">
                    {currentBookData?.author}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[4]}</TableCell>
                  <TableCell align="center">
                    {currentBookData?.category}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[5]}</TableCell>
                  <TableCell align="center">
                    {currentBookData?.overview}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[6]}</TableCell>
                  <TableCell align="center">
                    {currentBookData?.publishDate}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[7]}</TableCell>
                  <TableCell align="center">
                    {currentBookData?.publisher}
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
