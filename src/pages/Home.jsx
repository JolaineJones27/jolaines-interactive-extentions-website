import React, { useState } from "react";
import Card from "../components/Card"; // Step 7 of pseudocoding
import data from "../data"; // Step 4 of pseudocoding
import logo from "../assets/logo.svg";
import { FaSun, FaMoon } from "react-icons/fa";

const headerData = {
  // toggle button
  themeButton: "Theme",
};

// filtering the list
const filterOptions = ["All", "Active", "Inactive"];

function Home() {
    // had to add this so I can get back the original data
    const [originalData] = useState(data);
    const [dataList, setDataList] = useState(data); // Step 8 of pseudocoding - shows the current list
  const [filter, setFilter] = useState("all"); // filter options & update
  const [theme, setTheme] = useState("light"); // just got this to work by adding css

  const removeItem = (id) => {
    setDataList((prevDataList) =>
      prevDataList.map((item) =>
        item.id === id ? { ...item, isRemoved: true } : item
      )
    );
  };
        

  //NOTE FROM CATIE 4-15-25 : in the onCLick for ACTIVE, filter out anything that is item.isActive === false, then use setDataList to be the new list that is only active = true

  // toggles isActive prop - if it matches it shows active, if not it doesn't change - then updates list
  // had to change this to newState so the card goes back to inactive and doesn't get removed
  const updateIsActive = (id, newState) => {
    setDataList((prevDataList) =>
      prevDataList.map((item) =>
        item.id === id ? { ...item, isActive: newState } : item
      )
    );
  };

  // finds out which items should be shown due to the filter - using booleans (my favorite)
  const filteredData = dataList.filter((item) => {
    if (item.isRemoved) return false;
    if (filter === "all") return true;
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true; //return all
  }); 

  // toggles between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // updates the filter thats selected
  // if all is picked, it goes back to the original list with all of the cards
  const handleFilter = (option) => {
    setFilter(option);
    if (option === "all") {
      setDataList((prevDataList) =>
        prevDataList.map((item) => ({ ...item, isRemoved: false }))
      );
    }
  };
    // if (option === "all") {
    //   setDataList(originalData); 
    // removed the above code to stop it from going back to the original data
  


  return (
    //click handler
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo-large" />
        </div>
        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaSun size={25} /> : <FaMoon size={25} />}
            {/* //{headerData.themeButton} */}
          </button>
        </div>
        
      </nav>
      <h1>Extensions List</h1>
      <div className="filter-buttons">
        {/* maps over filter buttons to make the buttons*/}
        {/* when a button is clicked is calls the handleFilter with the right button */}
  
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleFilter(option.toLowerCase())}
            
          >
            {option}
          </button>
        ))}
      </div>
      
      {/* console.log(filteredData); */}
      {/* Part 2 of Steps 7 and 9 of pseudocoding - rendering & mapping over the data*/}
      <div className="card-container">
        {filteredData.map((extension) => (
          <Card
            key={extension.id}
            id={extension.id}
            logo={extension.logo}
            name={extension.name}
            description={extension.description}
            isActive={extension.isActive}
            removeItem={removeItem}
            updateIsActive={updateIsActive}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

// https://www.freecodecamp.org/news/pass-data-between-components-in-react/
// https://www.twilio.com/en-us/blog/intro-custom-button-component-typescript-react
// https://react.dev/learn/responding-to-events

// https://stackoverflow.com/questions/61199765/i-have-a-light-dark-theme-toggle-react-component-that-im-trying-to-improve
// https://code.visualstudio.com/docs/configure/themes

// https://dev.to/laurentyson85/constructing-search-filter-functionality-in-react-dnd
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering
// https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops

// worked with Cassy 
// worked with Dot some


// Note from CatMake Button dynamic by passing the onCLick via props -  Import and render the button here 3 times - <BUtton clickHandler={() => setFilter("Active")} text="Active"/> - didn't have to do this because I removed lines 55 and 56 and it worked right 
        
