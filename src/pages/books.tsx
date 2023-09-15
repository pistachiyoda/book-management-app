import Layout, { BreadcrumbParams } from "@/component/layout";
import { books } from "@/lib/book";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
                  {[
                    "id",
                    "著者",
                    "カテゴリー",
                    "サムネイル",
                    "概要",
                    "発売日",
                    "出版社",
                    "",
                  ].map((column, id) => (
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
                      {book.author}
                    </TableCell>
                    <TableCell key={book.id} align="center">
                      {book.category}
                    </TableCell>
                    <TableCell key={book.id} align="center">
                      <img
                        src={book.image} // 画像のパスを指定
                        alt={book.name} // 画像の代替テキストを指定
                        width="50" // 画像の幅を指定（必要に応じて調整）
                      />
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
                      <Button variant="contained">詳細</Button>
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
