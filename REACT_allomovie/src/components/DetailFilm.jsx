import { useState, useEffect } from "react";
import axios from 'axios';
import api from '../api/api';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

function DetailFilm(props) {
    const { item } = props;

    function favorite(e, name, id) {
        e.preventDefault();
        const idFilm = id;
        const eventName = name;
        return id;
    }


    return (
        <>
            <div className="flex justify-center mt-5">
                <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
                    <img className="rounded-t-lg" src={"https://image.tmdb.org/t/p/w300/" + item.poster_path} alt="" />

                    <div className="p-6 flex flex-col justify-start">

                        <h5 className="mb-5 text-gray-900 font-medium">
                            <div className="text-xl">{item.original_title} </div>
                            <div className="text-xs">(titre original)</div>
                        </h5>

                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Genre(s) : </span>
                            {item.genres.map(item => {
                                return (
                                    <div className=" text-xs" key={item.name}>{item.name}</div>
                                )
                            }
                            )}
                        </div>

                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Résumé : </span>
                            <span className=" text-xs" >{item.tagline}</span>
                        </div>

                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Langue d'origine :</span>
                            <span className=" text-xs" > {item.original_language}</span>
                        </div>

                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Langues disponible :</span>
                            {item.spoken_languages.map(item => {
                                return (
                                    <div className=" text-xs" key={item.name}>{item.name}</div>
                                )
                            }
                            )}
                        </div>



                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Producteur(s) : </span>
                            {item.production_companies.map(item => {
                                return (
                                    <div className=" text-xs" key={item.name}>{item.name}</div>
                                )
                            }
                            )}
                        </div>

                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Pays de production : </span>
                            {item.production_countries.map(item => {
                                return (
                                    <div className=" text-xs" key={item.name}>{item.name}</div>
                                )
                            }
                            )}
                        </div>

                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Release :</span>
                            <span className="text-gray-600 text-xs"> {new Date(item.release_date).toLocaleDateString()}</span>
                        </div>

                        <div className="mb-2 text-left">
                            <span className="text-sm underline text-gray-700 font-medium">Note :</span>
                            <span className=" text-xs" > {Math.round(item.vote_average * 10) / 10}/10</span>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className="mt-5 inline-block px-3 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                <a href={"/home"}>
                   Retour à l'accueil
                </a>
            </button>
        </>
    );
}

export default DetailFilm;