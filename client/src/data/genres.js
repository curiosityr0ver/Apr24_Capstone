const defaultGenres = ["Action", "Drama", "Romance", "Thriller", "Western", "Horror", "Fantasy", "Music", "Science Fiction"];
const genreIds = [28, 18, 10749, 53, 37, 27, 14, 10402, 878];

const getGenreId = (genre) => {
    const index = defaultGenres.indexOf(genre);
    return genreIds[index];
};

export { defaultGenres, getGenreId };