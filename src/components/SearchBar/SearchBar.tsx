

import { blogs } from "../../data/blogs";
import ReusableComponent from "../BlogComponent/ReusableComponent/ReusableComponent";

type SearchResultsProps = {
  search: string;
};

export default function SearchResults({
  search,
}: SearchResultsProps) {
  const searchValue = search.toLowerCase().trim();

  const results = blogs.posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchValue) ||
      post.excerpt.toLowerCase().includes(searchValue) ||
      post.category.toLowerCase().includes(searchValue) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchValue)
      )
    );
  });

  return <ReusableComponent posts={results} />;
}

