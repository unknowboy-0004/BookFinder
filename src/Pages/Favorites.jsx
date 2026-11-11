
import { useState } from "react";
import BookCard from "../Components/BookCard";

function Favorites({ favorites, setFavorites }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFavorites = favorites.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 min-h-screen p-6">
            <h1 className="flex bg-gray-600 text-white justify-center py-4">
                My Favorite Books
            </h1>

            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                id="search"
                className="w-full max-w-md mx-auto block p-4 mt-6 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Search your favorite books..."
            />

            {favorites.length === 0 ? (
                <div className="text-center text-gray-500 mt-10 text-lg">
                    You haven't added any favorite books yet.
                </div>
            ) : filteredFavorites.length === 0 ? (
                <div className="text-center text-gray-700 mt-10 text-lg">
                    No matching books found.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {filteredFavorites.map((book) => (
                        <BookCard
                            key={book.key}
                            book={book}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
