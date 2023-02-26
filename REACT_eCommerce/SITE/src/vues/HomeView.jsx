import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from 'axios';

const HomeView = (props) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        // fetch('http://localhost:5001/utilisateur', {
        //     method: "post",
        //     headers: { "content-type": "application/json", },
        //     body: JSON.stringify({ "where": "nom = 'Dujardin'" })

        // }).then((resp) => resp.text())
        //     .then((text) => {
        //         const data = JSON.parse(text);
        //         setData(data);
        //         // console.log(data);
        //     }).catch(console.log(data));


        // /********** GET ALL BY **********/
        // axios.post(`http://localhost:5001/utilisateur`, {
        //     method: "post",
        //     data: { where: "prenom = 'Jean'" }

        // }).then(res => {
        //     setData(res.data);
        // }, []);


        // /********** GET BY ID **********/
        // axios.get(`http://localhost:5001/utilisateur/2`)
        //     .then(res => {
        //         setData(res.data);
        //     }, []);

        /********** GET ALL **********/
        axios.get(`http://localhost:5001/produit`)
            .then(res => {
                setData(res.data);
            }, []);

        console.log(data);

    }, []);


    return (
        <div className="pt4em">
            <ProductCard tablo={data} />
        </div>
    );
}


export default HomeView;
