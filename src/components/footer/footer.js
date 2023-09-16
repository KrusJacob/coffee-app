import "./footer.css";

import Menu from "../menu/menu";
import Divider from "../divider/divider";

const Footer = (props) => {
  return (
    <footer className="footer text-center mx-auto">
      <div className="footer-menu d-flex justify-content-center">
        <Menu color="black"></Menu>
      </div>

      <Divider color="black"></Divider>
    </footer>
  );
};

export default Footer;
