import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import BaseView from "./vues/BaseView";

const HomeView = React.lazy(() => import("./vues/HomeView"));
const DetailView = React.lazy(() => import("./vues/DetailView"));

// const App = () => {
   function App(){
   return (

      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<BaseView />}>
                  <Route index element={<HomeView />}/>
                  <Route path="/home" element={<HomeView/>}/>
                  <Route path="/detail/:id" element={<DetailView/>}/>
               </Route>
            </Routes>
         </Router>
      </div>

   );
}

export default App;
