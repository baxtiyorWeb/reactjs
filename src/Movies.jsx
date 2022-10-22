import React from 'react'
import axios from 'axios'

export default function Movies() {
    const [Movies, setMovies] = React.useState([])
    React.useEffect(() => {
        async function getMovies() {
            const dats = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=35fa8784c15d0825d778234c487a5807&language=en-RU&page=1')
            setMovies(dats.data.results)
            console.log(dats.data.results);
        }
        getMovies()
    }, [])

    return (
        <div className='videos'>


            {Movies.map((item) => {
                return (
                    <div className="video" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                        <i className="fa-solid fa-play"></i>
                        <div className="movie"><p>{item.title} <br /> {item.release_date}</p></div>
                    </div>
                )

            })}

        </div>
    )
}
