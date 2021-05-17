import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {

  return (
    <div>
      {/* head is a built in next component */}
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results.results}/>
    </div>
  );
}

// This page is going to be server side rendered
// This gets rendered on the server before the client
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // We want to grab the genre value from our keys
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request
    },
  };
}
