import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import Head from "next/head";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export type BreadcrumbParams = {
  href?: string;
  text: string;
};

type LayoutProps = {
  children: ReactNode;
  breadcrumbsParams: BreadcrumbParams[];
};

export default function Layout({ children, breadcrumbsParams }: LayoutProps) {
  const breadcrumbs = breadcrumbsParams.map((breadcrumb, index) => {
    return (
      <Link
        key={index}
        underline="hover"
        sx={{ display: "flex", alignItems: "center", mt: 2 }}
        color="inherit"
        href={breadcrumb.href}
      >
        {breadcrumb.text}
      </Link>
    );
  });
  return (
    <Container maxWidth="lg">
      <Head>
        <title>書籍管理アプリ</title>
        <meta
          name="description"
          content="書籍管理ができるサービスです。登録されている書籍の編集をすることができます。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Box
          sx={{
            marginTop: 5,
          }}
        >
          <Typography component="h1" variant="h4">
            書籍管理アプリ
          </Typography>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
        {children}
      </main>
    </Container>
  );
}
