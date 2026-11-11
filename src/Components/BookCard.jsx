
function BookCard({ book, favorites, setFavorites }) {
    const isFavorite = favorites.some(

        (fav) => fav.key === book.key
    );
    const handleFavorite = () => {
        if (isFavorite) {
            setFavorites(favorites.filter(
                (fav) => fav.key !== book.key
            ));
        } else {
            setFavorites([...favorites, book]);
        }
    };

    return (
        <div className="bg-gray-400 rounded-xl shadow-md p-4 flex flex-col gap-3">
            {book.title}
            {book.author_name?.[0] ?? "Unknown Author"}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                onClick={handleFavorite}>
                {isFavorite ? "❤️ Remove from Favorites" : " ❤️Add to Favorites"}
            </button>
            {book.cover_i && (
                <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="w-full h-64 object-contain rounded-lg bg-gray-800"
                />
            )}
        </div>
    );
}

export default BookCard;
