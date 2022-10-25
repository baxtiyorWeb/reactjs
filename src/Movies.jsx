import React from 'react'
import axios from 'axios'
import { changeLanguage } from './context';



export default function Movies(e) {

    const [Movies, setMovies] = React.useState([])
    const [change, setchange] = React.useContext(changeLanguage);



    function getLanguage(lang) {
        setchange(lang)
        localStorage.setItem("Language", lang)
    }

    React.useEffect(() => {
        async function getMovies() {
            const dats = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=35fa8784c15d0825d778234c487a5807&language=${localStorage.getItem("Language")}&page=1`)
            setMovies(dats.data.results)
        }
        getMovies()
    }, [change])
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
            <div className="lang">
                <button
                    className="languagesbtnEng" onClick={(lang) => getLanguage("en-US")}>Eng
                </button>
                <button className="languagesbtnRus" onClick={(lang) => getLanguage("ru-RU")}>
                    Rus
                </button>
            </div>


        </div>
    )
}
