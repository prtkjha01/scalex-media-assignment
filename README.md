# Book Library Mobile App

This mobile application is a book library built using React and Tailwind CSS. The application allows users to search for books, view a list of books with details, and toggle the read/unread status of each book.

## Features

- **Home Page:**

  - Search bar to search for books.
  - List of books rendered as cards.
  - Each book card displays:
    - Book cover
    - Title
    - Author
    - Published year
    - Book status button to toggle between "Read" and "Unread."

- **Search Page:**
  - Accessible by clicking the search bar on the home page.
  - Allows users to search for books by title.
  - Displays search results in a list with a UI similar to the home page.

## API Integration

- The list of books is fetched from the Open Library API: [https://openlibrary.org/people/mekBot/books/already-read.json](https://openlibrary.org/people/mekBot/books/already-read.json)
- Book cover images are obtained using the cover_id from the Open Library Covers API: [https://covers.openlibrary.org/b/id/{cover_id}-M.jpg](https://covers.openlibrary.org/b/id/{cover_id}-M.jpg)
- Search functionality utilizes the Open Library Search API: [https://openlibrary.org/dev/docs/api/search](https://openlibrary.org/dev/docs/api/search)

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## Usage

1. Access the application on your browser at `http://localhost:5173`.
2. Use the search bar to find books by title.
3. Explore the list of books on the home page.
4. Toggle the read/unread status of each book using the book status button.

## Dependencies

- React JS
- Tailwind CSS
- Typescript
