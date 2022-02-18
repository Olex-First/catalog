// import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./component/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from "./component/carousel/carousel";


function App() {
  return (
      <>
          <div className="d-flex justify-content-center">
              <Navigation/>

          </div>
          <Responsive className="d-flex justify-content-center"/>
      </>

  );
}

export default App;
