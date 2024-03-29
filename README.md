# Book Library App

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

## Preview

### Mobile Preview

![Screenshot_2024-02-14_at_2 01 44_PM-removebg-preview](https://github.com/prtkjha01/scalex-media-assignment/assets/68733176/64383a7e-1391-419a-83a4-c8154f6221ba)

![Screenshot_2024-02-14_at_2 02 38_PM-removebg-preview](https://github.com/prtkjha01/scalex-media-assignment/assets/68733176/c9878a9e-9527-4e15-b268-6fbf252e92d7)


### Desktop Preview

<img width="1710" alt="Screenshot 2024-02-14 at 2 03 39 PM" src="https://github.com/prtkjha01/scalex-media-assignment/assets/68733176/24cc3773-6287-4aba-a573-54aa80efa807">

<img width="1710" alt="Screenshot 2024-02-14 at 2 04 16 PM" src="https://github.com/prtkjha01/scalex-media-assignment/assets/68733176/262b1878-705e-4549-bd40-5865ed9fbf9f">







