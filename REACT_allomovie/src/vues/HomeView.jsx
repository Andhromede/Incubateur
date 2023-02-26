// import { Link } from 'react-router-dom';
import CardFilm from '../components/CardFilm';
import { useState, useEffect } from "react";
import axios from 'axios';


function HomeView() {
    const [films, setFilms] = useState();

    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f312b5f762468b425f5e699685aa3f49')
        .then(res => {
            const films = res.data;
            setFilms(films);
    }, []);

    // document.cookie = ``;

    return (
        <>
            <div className="inline-block">
                <CardFilm tablo={films} />
            </div>

            {/* {(films) &&
                films.results.map(item => {
                    return (
                        <CardFilm item={item} key={item.id}/>
                    )}
                )} */}
        </>
    );
}


export default HomeView;
