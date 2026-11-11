import { useState } from "react";
import BookCard from "./BookCard";

function SearchBar({ favorites, setFavorites }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=10`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
     <div className="text-center pt-16 pb-10 px-4">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
    Find Your Next <span className="text-indigo-700">Great Read.</span>
  </h1>
  <p className="text-gray-700 text-lg max-w-xl mx-auto">
    Explore thousands of books, discover new authors, and save the stories you'll love.
  </p>
</div>
      <form onSubmit={handleSearch} className="max-w-md mx-auto">
        <label htmlFor="search" className="sr-only">
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.85-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>



          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search books by title or author..."
            required
          />

          <button
            disabled={loading}
            type="submit"
            className="absolute right-2.5 bottom-2.5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>




    </div>
  );
}

export default SearchBar;
