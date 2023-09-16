import { useState, useEffect } from "react";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";

import { useFetching } from "../../hooks/useFetching";

import "./App.css";

import Footer from "../footer/footer";
import Menu from "../menu/menu";
import Content from "./Content";

import bestCoffee from "../../resources/bestCoffee";
import coffee from "../../resources/data";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [term, setTerm] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    setCoffee();
  }, []);

  async function setCoffee() {
    setData(coffee);
  }

  const onChangeFilter = (ActiveFilter) => {
    filter == ActiveFilter ? setFilter("all") : setFilter(ActiveFilter);
  };

  const onChangeTerm = (term) => {
    setTerm(term);
  };

  const searchOnText = (items, term) => {
    if (term.length === 0) {
      return items;
    } else {
      return items.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
    }
  };

  const filterData = data.filter((item) => {
    if (filter == "all") {
      return item;
    } else {
      return item.country == filter;
    }
  });

  const visibleData = searchOnText(filterData, term);

  return (
    <HashRouter>
      <div className="app">
        <Menu color="white"></Menu>
        <main>
          <Content
            data={coffee}
            bestCoffee={bestCoffee}
            visibleData={visibleData}
            onChangeFilter={onChangeFilter}
            onChangeTerm={onChangeTerm}
            filter={filter}
          />
        </main>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
};

export default App;
