import Layout, { BreadcrumbParams } from "@/component/layout";
import {
  booksArrayData,
  bookInfoCategories,
  Book,
  getBookDataFromLocalStorage,
} from "@/lib/book";
import {
  Box,
  Button,
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
        <Paper sx={{ width: "100%", overflow: "hidden", mt: 4 }}>
          <TableContainer sx={{ maxHeight: 1000 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {bookInfoCategories.map((column, id) => (
                    <TableCell key={id} align="center" style={{ minWidth: 10 }}>
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book: Book) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={book.id}>
                    <TableCell key={`bookId-${book.id}`} align="center">
                      {book.id}
                    </TableCell>
                    <TableCell key={`bookTitle-${book.id}`} align="center">
                      {book.title}
                    </TableCell>
                    <TableCell key={`bookImage-${book.id}`} align="center">
                      <Box
                        sx={{
                          position: "relative",
                          width: 100,
                          height: 100,
                        }}
                      >
                        <Image
                          src={`/${book.image}`}
                          alt={book.title}
                          fill={true}
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell key={`bookAuthor-${book.id}`} align="center">
                      {book.author}
                    </TableCell>
                    <TableCell key={`bookCategory-${book.id}`} align="center">
                      {book.category}
                    </TableCell>
                    <TableCell key={`bookOverview-${book.id}`} align="center">
                      {book.overview}
                    </TableCell>
                    <TableCell
                      key={`bookPublishDate-${book.id}`}
                      align="center"
                    >
                      {book.publishDate}
                    </TableCell>
                    <TableCell key={`bookPublisher-${book.id}`} align="center">
                      {book.publisher}
                    </TableCell>
                    <TableCell key={`bookid-${book.id}`} align="center">
                      <Link href={`/books/${book.id}`}>
                        <Button variant="contained">詳細</Button>
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
