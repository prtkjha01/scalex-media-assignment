import loadingIcon from "../../assets/loading.png";
import Book from "./Book";
const Books: React.FC<{
  books: any;
  loading: boolean;
  variant: string;
}> = ({ books, loading, variant }) => {
  return (
    <div className="mt-5 py-5 px-10">
      {loading ? (
        <div className="loader flex justify-center items-center min-h-[500px] mini:min-h-[700px]">
          <img src={loadingIcon} className=" h-15 w-15 animate-spin" alt="" />
        </div>
      ) : (
        <div className="books grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mini:grid-cols-2 gap-4">
          {books.map((book: any) => (
            <Book
              key={book?.key || book?.work?.key}
              book={book}
              variant={variant}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
