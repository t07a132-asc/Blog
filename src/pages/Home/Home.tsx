
import Topics from "../../components/HomeComponent/Topics";
import Hero from "./../../components/HomeComponent/Hero";
import LatestArticles from "./../../components/HomeComponent/LatestArticles";

import Articles from './../../components/HomeComponent/Articles';

export default function Home() {
  return (
    <>
      <Hero />
      <Articles/>
      <Topics />
      <LatestArticles />

    </>
  );
}
