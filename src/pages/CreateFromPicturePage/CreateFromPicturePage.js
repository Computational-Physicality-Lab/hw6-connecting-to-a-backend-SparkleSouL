import "./CreateFromPicturePage.css";
import { useState, useContext } from "react";
import { PictureContext } from "../../context/PictureContext";
import ProductSection from "./component/ProductSection/ProductSection";
import SearchSection from "./component/SearchSection/SearchSection";

const CreateFromPicturePage = () => {
  const [search, setSearch] = useState("");

  const {
    pictureProductState,
    setPictureProductState,
    searchResults,
    setSearchResults,
    currentChoose,
    setCurrentChoose,
    searchPage,
    setSearchPage,
    searchResultsName,
    setSearchResultsName,
  } = useContext(PictureContext);

  const propsSend = {
    searchResults,
    setSearchResults,
    currentChoose,
    setCurrentChoose,
    search,
    setSearch,
    pictureProductState,
    setPictureProductState,
    searchPage,
    setSearchPage,
    searchResultsName,
    setSearchResultsName,
  };
  return (
    <div className="CreateFromPicturePage">
      <ProductSection props={propsSend} />
      <SearchSection props={propsSend} />
    </div>
  );
};

export default CreateFromPicturePage;
