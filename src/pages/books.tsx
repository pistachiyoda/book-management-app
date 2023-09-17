import Layout, { BreadcrumbParams } from "@/component/layout";
import { books, bookInfoCategories } from "@/lib/book";
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

export default function Home() {
  const breadcrumbsParams: BreadcrumbParams[] = [
    {
      href: "/",
      text: "書籍一覧",
    },
  ];

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
                {books.map((book) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={book.id}>
                    <TableCell key={book.id} align="center">
                      {book.id}
                    </TableCell>
                    <TableCell key={book.id} align="center">
                      {book.title}
                    </TableCell>
                    <TableCell key={book.id} align="center">
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
                    <TableCell key={book.id} align="center">
                      {book.author}
                    </TableCell>
                    <TableCell key={book.id} align="center">
                      {book.category}
                    </TableCell>
                    <TableCell key={book.id} align="center">
                      {book.overview}
                    </TableCell>
                    <TableCell key={book.id} align="center">
                      {book.publishDate}
                    </TableCell>
                    <TableCell key={book.id} align="center">
                      {book.publisher}
                    </TableCell>
                    <TableCell key={book.id} align="center">
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
