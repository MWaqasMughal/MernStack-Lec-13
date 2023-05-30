import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
// import { useState } from "react";
// if any funciton start with word "use" this is called as hook function. and it is named export

import { data } from "../data/database";
import CategoryCard from "../components/CategoryCard";

function Home() {
    return (
        <div>
            <Header />
            <CategoryCard categories={data.categories} />
            <Main products={data.products} />
            <Footer />
        </div>
    )
}

export default Home