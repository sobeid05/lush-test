import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      router.push(`/products?searchTerm=${query}`);
      setQuery("");
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mx-2">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleChange}
        className="text-black px-2 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black "
      />
      <button
        type="submit"
        className="px-4 bg-white text-black rounded-r-md hover:bg-gray-400 focus:outline-none focus:ring-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
