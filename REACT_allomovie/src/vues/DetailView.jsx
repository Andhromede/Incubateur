// import { Link } from 'react-router-dom';

// import CardFilm from '../components/CardFilm';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import DetailFilm from '../components/DetailFilm';

// import axios from 'axios';


function DetailView() {
    const [film, setFilm] = useState();
    const { id } = useParams();

    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f312b5f762468b425f5e699685aa3f49`)
        .then(res => {
            setFilm(res.data);
            // let tableau = [];
            // tableau.push(res.data);
            // console.log(film);
    }, []);
    

    return (
        <>
            <div className="inline-block">
                {/* <CardFilm tablo={films} /> */}

                 <>
            {(film) && (
                <div className="inline-block">
                    <DetailFilm item={film} />
                </div>
            )}
        </>
                
            </div>
        </>
    );
}


export default DetailView;
