import Layout, { BreadcrumbParams } from "@/component/layout";
export default function Home() {
  const breadcrumbsParams: BreadcrumbParams[] = [
    {
      href: "/",
      text: "書籍管理",
    },
  ];

  return (
    <>
      <Layout breadcrumbsParams={breadcrumbsParams}>
        <div>hoge</div>
      </Layout>
    </>
  );
}
