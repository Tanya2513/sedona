import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Information from "../components/Information";
import Features from "../components/Features";
import SearchContainer from "../components/SearchContainer";
import Advantages from "../components/Advantages";
import InformationNext from "../components/InformationNext";


function Home() {
    return (
        <>
            <Header/>
            <Information/>
            <Features/>
            <InformationNext/>
            <Advantages/>
            <SearchContainer/>
            <Map/>
            <Footer/>
        </>
    );
}

export default Home;
