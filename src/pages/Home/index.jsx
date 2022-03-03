import React from "react";
import Loader from "../../components/common/Loader";
import EmptyListComp from "../../components/common/Loader/EmptyListComp";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Menu from "../../components/Home/Menu";
import ResultsList from "../../components/Home/ResultsList";

const Home = () => {
  return (
    <div>
      <h1>Home page view</h1>

      {/* Header */}
      <Header />

      {/* Menu */}
      <Menu />

      {/* Loader */}
      <Loader />

      {/* Empty List View */}
      <EmptyListComp />

      {/* ImageList */}
      <ResultsList />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
