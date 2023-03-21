import { GetServerSideProps } from "next";
import SheetsApi from "@/api/sheets";

export async function getServerSideProps(context) {
  const { id } = context.params;
  if (!id)
    return {
      notFound: true,
    };
  const res = await SheetsApi.getOneSheet(id?.toString());
  return {
    props: {
      res,
    },
  };
}

function Page({ res }) {
  console.log(res);
  return (
    <>
      <main>Hello</main>
    </>
  );
}
export default Page;
