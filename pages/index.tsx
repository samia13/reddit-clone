import Head from "next/head";
import { Header } from "../components/index";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Reddit clone app</title>
      </Head>
      <Header />
    </div>
  );
}
