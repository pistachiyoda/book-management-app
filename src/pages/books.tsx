import Layout, { BreadcrumbParams } from "@/component/layout";
import { booksArrayData, Book, getBookDataFromLocalStorage } from "@/lib/book";
import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const breadcrumbsParams: BreadcrumbParams[] = [
    {
      href: "/",
      text: "書籍一覧",
    },
  ];

  const [books, setBooks] = useState<Book[]>([]);

  const getBooksData = () => {
    const storeData = getBookDataFromLocalStorage();
    if (!storeData) {
      localStorage.setItem("books", JSON.stringify(booksArrayData));
      setBooks(booksArrayData);
    } else {
      setBooks(storeData);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <>
      <Layout breadcrumbsParams={breadcrumbsParams}>
        <Paper sx={{ width: "100%", overflow: "hidden", mt: 4, mb: 4 }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">id</TableCell>
                  <TableCell
                    align="center"
                    style={{ minWidth: 100, fontWeight: "bold" }}
                  >
                    タイトル
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    サムネイル
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    著者
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ minWidth: 100, fontWeight: "bold" }}
                  >
                    カテゴリー
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ minWidth: 100, fontWeight: "bold" }}
                  >
                    概要
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ minWidth: 100, fontWeight: "bold" }}
                  >
                    発売日
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ minWidth: 100, fontWeight: "bold" }}
                  >
                    出版社
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ minWidth: 100 }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book: Book) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={book.id}>
                    <TableCell align="center">{book.id}</TableCell>
                    <TableCell align="center">{book.title}</TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          position: "relative",
                          width: 100,
                          height: 100,
                        }}
                      >
                        <Image
                          src={book.image ? `/${book.image}` : "/noimage.jpg"}
                          alt={book.title}
                          fill={true}
                          sizes="100px"
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell align="center">{book.author}</TableCell>
                    <TableCell align="center">{book.category}</TableCell>
                    <TableCell align="center">{book.overview}</TableCell>
                    <TableCell align="center">{book.publishDate}</TableCell>
                    <TableCell align="center">{book.publisher}</TableCell>
                    <TableCell align="center">
                      <Link
                        href={`/books/${book.id}`}
                        sx={{ fontWeight: "bold" }}
                      >
                        詳細
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Layout>
    </>
  );
}
