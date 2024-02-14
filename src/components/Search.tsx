import React, { useState } from "react";
import searchIcon from "../assets/serach_icon.svg";
import loadingIcon from "../assets/loading.png";
import { SEARCH_URL } from "../utils/constants";
const Search: React.FC<{
  _handleSearch: Function;
  triggerParentLoading: Function;
  variant: string;
  fetchBooks: Function;
}> = ({ _handleSearch, triggerParentLoading, variant, fetchBooks }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  /**
   * Function to handle the search process.
   */
  const handleSearch = async () => {
    setLoading(true);
    triggerParentLoading(true);
    const searchQuery = query.split(" ").join("+");
    try {
      const resultsData = await fetch(SEARCH_URL(searchQuery));
      const results = await resultsData.json();
      const data = results.docs;
      _handleSearch(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      triggerParentLoading(false);
    }
  };

  return (
    <nav className="search-container sticky bg-white top-0 p-5 flex gap-2 shadow-bottom  z-[2]">
      <div className="flex relative w-full">
        <input
          type="text"
          className="w-full border-b h-8 border-black rounded-none outline-none pl-2 pr-9"
          name="search"
          id="search"
          value={query}
          onChange={(e: any) => {
            setQuery(e.target.value);
          }}
          onKeyUp={(e: any) => {
            if (e.key === "Enter") {
              handleSearch();
            } else {
              // let query = e.target.value.split(" ").join("+");
              setQuery(e.target.value);
            }
          }}
        />
        {loading ? (
          <img
            src={loadingIcon}
            className="loader h-7 w-7 absolute top-0 right-2 animate-spin"
            alt=""
          />
        ) : (
          <img
            src={searchIcon}
            className=" h-7 w-7 absolute top-0 right-2 cursor-pointer object-contain"
            alt="search-icon"
            onClick={() => handleSearch()}
          />
        )}
      </div>
      {variant === "SEARCH" && (
        <div className="flex justify-end">
          <button
            className="border border-black px-7 h-8 hover:scale-105 transition duration-300"
            onClick={() => {
              setQuery("");
              fetchBooks();
            }}
          >
            Reset
          </button>
        </div>
      )}
    </nav>
  );
};

export default Search;
