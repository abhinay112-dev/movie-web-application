import MovieCard from "../components/MovieCard"
import { useState } from "react";
function Home() {
    const [searchQuery, setsearchQuery] = useState("");
    const movies = [
        { id: 1, title: "john wick", release_date: "2023" },
        { id: 2, title: "fight club", release_date: "2026" },
        { id: 3, title: "jurassic park", release_date: "2027" }
    ]
    const handleSearch = (e) => {
        e.preventDefault()
        setsearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movie" className="search-input" value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">{movies.map(movie => (< MovieCard movie={movie} key={movie.id} ></MovieCard>))}</div>
    </div >
}

export default Home