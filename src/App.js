
import Navigation from "./component/navbar";
import Main from "./component/main/main";
import About from "./component/about/about";
import Footer from "./component/footer/footer";
import Responsive from "./component/carousel/carousel";


function App() {
  return (
      <>
          <div className=" container-fluid d-flex  justify-content-center flex-column align-items-center ">
              <Navigation/>
              <Responsive/>
              <Main/>
              <hr className="w-75"/>


          </div>
          <div className="d-flex container-fluid justify-content-start w-75">
              <About />

          </div>
          <div className=" d-flex container-fluid justify-content-start w-75 flex-column">
              <p className="about-text">Чем более совершенным становится наше общество, тем больше людей задумывается о вреде всего химического.
                  Мы начинаем понимать, что по-настоящему эффективное решение может предложить лишь природа. Лекарственные травы, вкусные травяные чаи, пряности и приправы – вот безопасная и экологически чистая альтернатива фармакологии и химической промышленности.
              </p>
              <p className="about-text">Чем более совершенным становится наше общество, тем больше людей задумывается о вреде всего химического.
                  Мы начинаем понимать, что по-настоящему эффективное решение может предложить лишь природа. Лекарственные травы, вкусные травяные чаи, пряности и приправы – вот безопасная и экологически чистая альтернатива фармакологии и химической промышленности.
              </p>
          </div>
          <Footer/>
      </>

  );
}

export default App;
