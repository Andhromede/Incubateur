import { Link } from 'react-router-dom';
// import Cards  from "../components/Cards";
import { useState, useEffect } from "react";
import axios from 'axios';

const DetailProductView = (props) => {
    const [data, setData] = useState([]);


    // useEffect(() => {
    //     /********** GET BY ID **********/
    //     axios.get(`http://localhost:5001/produit/2`)
    //         .then(res => {
    //             setData(res.data);
    //         }, []);
    // }, []);


    return (
        <div className="container pt4em">
            
        </div>
    );
}


export default DetailProductView;
