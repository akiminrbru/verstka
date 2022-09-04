import React from 'react';
import './App.css';
import PreHeader from "./components/Preheader/Preheader";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <PreHeader/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
