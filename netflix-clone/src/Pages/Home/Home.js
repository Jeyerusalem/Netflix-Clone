import React from "react";
import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Bannerr";
import RowList from "../../Components/Rows/RowList/RowList";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
};

export default Home;
