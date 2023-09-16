import { Component } from "react";

// import "./header.css";
import Menu from "../menu/menu";
import Divider from "../divider/divider";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        {/* <Menu color="white"></Menu> */}
        <h2 className="header-title">Everything You Love About Coffee</h2>
        <Divider color="white" />
        <p>
          We makes every day full of energy and taste <br></br>
          Want to try our beans?
        </p>
        <button className="btn btn-outline-light">More</button>
      </div>
    );
  }
}

export default Header;
