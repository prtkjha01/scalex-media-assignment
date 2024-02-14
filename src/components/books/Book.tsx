import { useState } from "react";

const Book: React.FC<{ book: any; variant: string }> = ({
  book,
  variant = "LANDING",
}) => {
  const { work } = book;
  const [bookData] = useState({
    title: variant === "SEARCH" ? book.title : work.title,
    image: variant === "SEARCH" ? book.cover_i : work?.cover_id,
    authors:
      variant === "SEARCH" ? book?.author_name || ["NA"] : work.author_names,
    publish_year:
      variant === "SEARCH" ? book.first_publish_year : work.first_publish_year,
  });
  const [read, setRead] = useState(false);

  return (
    <div className="border p-5 shadow sm:hover:scale-105 transition duration-300 relative">
      <button
        className={`absolute top-2 left-2 py-1 px-2 border-2 text-sm w-[70px] rounded-lg transition duration-600 ${
          read
            ? "bg-green-200 border-green-500 text-green-500"
            : "bg-white text-gray-400"
        }`}
        onClick={() => setRead(!read)}
      >
        {read ? "Read" : "Unread"}
      </button>
      <img
        src={
          bookData.image
            ? `https://covers.openlibrary.org/b/id/${bookData.image}-M.jpg`
            : "https://i.pinimg.com/originals/c1/97/ba/c197ba63b1ff4c94c19243ede3038795.jpg"
        }
        // : "https://i.pinimg.com/originals/c1/97/ba/c197ba63b1ff4c94c19243ede3038795.jpg"
        className="w-full mt-6 h-40 mini:h-36 object-contain aspect-[9/16]"
        alt=""
      />
      <div className="separator w-full h-[1px] my-2 bg-gray-200" />
      <ul>
        <li className=" text-sm text-center font-semibold min-h-[50px]">
          {bookData.title}
        </li>
        <li className="flex gap-1 justify-between text-sm">
          <span className="label font-semibold min-w-max">
            {bookData.authors.length > 1 ? "Authors :" : "Author :"}
          </span>
          <span className="value text-end">
            {bookData.authors.map((author: any) => author).join(", ")}
          </span>
        </li>
        <li className="flex gap-1 justify-between text-sm mt-1">
          <span className="label font-semibold">Published Year :</span>
          <span className="value">{bookData.publish_year}</span>
        </li>
      </ul>
    </div>
  );
};

export default Book;

/* 
    cover,
    title,
    author,
    published_year,
    status
 */
