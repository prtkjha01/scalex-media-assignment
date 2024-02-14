import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Books from "./components/books/Books";
import { API_URL } from "./utils/constants";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [variant, setVariant] = useState("LANDING");

  /**
   * An asynchronous function that fetches books from the API, sets loading state to true, sets variant to "LANDING",
   * makes a fetch request to API_URL, sets the fetched books, logs any errors, and sets loading state to false.
   *
   * @return {Promise<void>} No return value
   */
  const fetchBooks = async (): Promise<void> => {
    setLoading(true);
    setVariant("LANDING");

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const books = data?.reading_log_entries || [];

      setBooks(books);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = (books: any) => {
    setVariant("SEARCH");
    setBooks(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <Search
          _handleSearch={handleSearch}
          triggerParentLoading={setLoading}
          variant={variant}
          fetchBooks={fetchBooks}
        />
        <Books books={books} loading={loading} variant={variant} />
      </main>
    </>
  );
};

export default App;
