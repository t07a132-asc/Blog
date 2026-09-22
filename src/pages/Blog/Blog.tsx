import FilterBar from "../../components/FilterBar/FilterBar";
import { Outlet } from "react-router-dom";
import SearchResults from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import HeroBlog from "../../components/BlogComponent/Hero/HeroBlog";

export default function Blog() {
  const [search, setSearch] = useState("");

  return (
    <>
      <HeroBlog/>

      <FilterBar
        search={search}
        onSearch={setSearch}
        onReset={() => setSearch("")}
      />

      <div className="w-full bg-amber-600">
        {search.trim() ? <SearchResults search={search} /> : <Outlet />}
      </div>
    </>
  );
}
