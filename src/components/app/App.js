import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useFetching } from "../../hooks/useFetching";

import "./App.css";

import Footer from "../footer/footer";
import Menu from "../menu/menu";
import Content from "./Content";

// import data from "../../resources/data";
import bestCoffee from "../../resources/bestCoffee";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [term, setTerm] = useState("");

  const { request, loading } = useFetching();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCoffee();
  }, []);

  async function fetchCoffee() {
    const dataServer = await request("http://localhost:3001/coffee");
    setData(dataServer);
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
      // return items.filter((item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
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
    <Router>
      <div className="app">
        <Menu color="white"></Menu>
        <main>
          <Content
            data={data}
            bestCoffee={bestCoffee}
            visibleData={visibleData}
            onChangeFilter={onChangeFilter}
            onChangeTerm={onChangeTerm}
            filter={filter}
            loading={loading}
          />
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
