import React, { useEffect, useState, useMemo } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  // const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [stringValue, setStringValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // useEffect(() => {
  //   const newFilteredMonsters = monsters.filter((monster) => {
  //     return monster.name.toLocaleLowerCase().includes(searchField);
  //   });
  //   setFilteredMonsters(newFilteredMonsters);
  //   console.log(filteredMonsters);
  // }, [monsters, searchField]);

  const filteredMonsters = useMemo(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    // console.log(newFilteredMonsters);
    return newFilteredMonsters;
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onStringChange = (event) => {
    const stringValueField = event.target.value;
    setStringValue(stringValueField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      <SearchBox onChangeHandler={onStringChange} placeholder="Set String" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
