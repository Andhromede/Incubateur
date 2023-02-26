import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './assets/css/App.css';
import BaseView from "./vues/BaseView";

const HomeView = React.lazy(() => import("./vues/HomeView"));
const DetailProduitView = React.lazy(() => import("./vues/DetailProductView"));
const ErrorView = React.lazy(() => import("./vues/ErrorView"));

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BaseView />}>
                        <Route index element={<HomeView />} />
                        <Route path="/home" element={<HomeView />} />
                        <Route path="/produit/:id" element={<DetailProduitView />} />
                    </Route>

                    <Route path="*" element={<ErrorView/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
