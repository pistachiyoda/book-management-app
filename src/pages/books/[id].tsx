import { GetStaticProps } from "next";
import {
  getBookData,
  getALLBookIds,
  Book,
  bookInfoCategories,
  booksArrayData,
  getBookDataFromLocalStorage,
} from "../../lib/book";
import Layout, { BreadcrumbParams } from "@/component/layout";
import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
      text: "アイテム詳細",
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

  return (
    <>
      <Layout breadcrumbsParams={breadcrumbsParams}>
        <Paper sx={{ width: "100%", overflow: "hidden", mt: 4 }}>
          <TableContainer>
            <Table sx={{ minWidth: 600 }} aria-label="book detail table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ width: 300, fontWeight: "bold" }}
                  >
                    項目
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>値</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[0]}
                  </TableCell>
                  <TableCell>{currentBookData?.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[1]}
                  </TableCell>
                  <TableCell>{currentBookData?.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[2]}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        position: "relative",
                        width: 100,
                        height: 100,
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
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[3]}
                  </TableCell>
                  <TableCell>{currentBookData?.author}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[4]}
                  </TableCell>
                  <TableCell>{currentBookData?.category}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[5]}
                  </TableCell>
                  <TableCell>{currentBookData?.overview}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[6]}
                  </TableCell>
                  <TableCell>{currentBookData?.publishDate}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" component="th" variant="head">
                    {bookInfoCategories[7]}
                  </TableCell>
                  <TableCell>{currentBookData?.publisher}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Stack
          spacing={5}
          direction="row"
          alignItems="center"
          justifyContent="center"
          mt={5}
          pb={5}
        >
          <Link href={`/books`}>
            <Button variant="outlined" size="large" sx={{ fontWeight: "bold" }}>
              戻る
            </Button>
          </Link>
          <Link href={`/books/${currentBookData?.id}/edit`}>
            <Button
              variant="contained"
              size="large"
              sx={{ fontWeight: "bold" }}
            >
              編集
            </Button>
          </Link>
        </Stack>
      </Layout>
    </>
  );
};

export default BookDetail;
