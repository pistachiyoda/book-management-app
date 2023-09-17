import { GetStaticProps } from "next";
import {
  getBookData,
  getALLBookIds,
  books,
  Book,
  bookInfoCategories,
} from "../../lib/book";
import Layout, { BreadcrumbParams } from "@/component/layout";
import { FC } from "react";
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
  const bookData = await getBookData(Number(params?.id));
  return {
    props: {
      bookData,
    },
  };
};

export async function getStaticPaths() {
  const paths = await getALLBookIds(books);
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

  return (
    <>
      <Layout breadcrumbsParams={breadcrumbsParams}>
        <Paper sx={{ width: "100%", overflow: "hidden", mt: 4 }}>
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
                  <TableCell align="center">{bookData.id}</TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[1]}</TableCell>
                  <TableCell align="center">{bookData.title}</TableCell>
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
                        src={`/${bookData.image}`}
                        alt={bookData.title}
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[3]}</TableCell>
                  <TableCell align="center">{bookData.author}</TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[4]}</TableCell>
                  <TableCell align="center">{bookData.category}</TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[5]}</TableCell>
                  <TableCell align="center">{bookData.overview}</TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[6]}</TableCell>
                  <TableCell align="center">{bookData.publishDate}</TableCell>
                </TableRow>
                <TableRow tabIndex={-1}>
                  <TableCell align="center">{bookInfoCategories[7]}</TableCell>
                  <TableCell align="center">{bookData.publisher}</TableCell>
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
          <Link href={`/books/${bookData.id}/edit`}>
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
