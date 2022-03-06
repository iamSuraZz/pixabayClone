import React, { useState } from "react";
import Loader from "../../components/common/Loader";
import EmptyListComp from "../../components/common/Loader/EmptyListComp";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Menu from "../../components/Home/Menu";
import ResultsList from "../../components/Home/ResultsList";
import axios from "axios";
import "./styles.css";
import { pixabayAPI } from "../../config/data";

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imagesList, setImagesList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultsCount, setSearchResultsCount] = useState(30);

  const searchResults = (search) => {
    setLoading(true);
    setShowMenu(false);

    axios
      .get(
        `${pixabayAPI.url}?key=${pixabayAPI.key}&q=${search}&image_type=photo&per_page=${searchResultsCount}&safeSearch=true`
      )
      .then((res) => {
        setImagesList(res.data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchResults(searchInput);
  };

  const handleHomeClick = () => {
    setSearchInput("");
    setImagesList([]);
    setShowMenu(true);
  };

  const handleMenuItemClicked = (e) => {
    const searchFor = e.target.id;
    setSearchInput(searchFor);
    searchResults(searchFor);
  };

  return (
    <>
      {/* Header */}
      <Header
        handleHomeClick={handleHomeClick}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={(e) => setSearchInput(e.target.value)}
        searchInputValue={searchInput}
      />

      <main>
        {/* Menu */}
        {showMenu && <Menu handleMenuItemClicked={handleMenuItemClicked} />}

        {/* Loader */}
        {loading && <Loader />}

        {/* Empty List View */}
        {!showMenu && !loading && !imagesList.length ? <EmptyListComp /> : null}

        {/* ImageList */}
        {!showMenu && !loading && imagesList.length ? (
          <ResultsList images={imagesList} />
        ) : null}
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
