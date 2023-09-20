import { useEffect } from "react";
import { useRouter } from "next/router";

const Root = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return null;
};

export default Root;
