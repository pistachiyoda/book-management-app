export async function getALLBookIds() {
  const paths = [
    { params: { id: "0" } },
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
  ];
  return paths;
}

export async function getBookData(id: number) {
  return {
    id: id,
  };
}
