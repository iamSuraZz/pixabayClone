import React from "react";
import Loader from "../../components/common/Loader";
import EmptyListComp from "../../components/common/Loader/EmptyListComp";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Menu from "../../components/Home/Menu";
import ResultsList from "../../components/Home/ResultsList";
import "./styles.css";

const Home = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main>
        {/* Menu */}
        <Menu />

        {/* Loader */}
        <Loader />

        {/* Empty List View */}
        <EmptyListComp />

        {/* ImageList */}
        <ResultsList images={[]} />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
