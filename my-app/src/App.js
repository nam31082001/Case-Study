


import Header from "./components/Home/header/header-img/header";
import Content from "./components/Home/content/content";
import Header_General from "./components/Home/header/header- general/header- general";
import Footer from "./components/Home/footer/footer";
import FlyCamHome from "./components/shop/flyCam/JSX/flyCamHome"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Detail from "./components/shop/flyCam/JSX/Detail/Detail";
import Cart from "./components/Cart/cart";
import HomeCam from "./components/shop/Cammara/camHome";
import DetailCam from "./components/shop/Cammara/DetailCam";
import Login from "./components/Login/Log in/login";
import LogOut from "./components/Login/Log out/logOut";
import BuyProduct from "./components/BuyProduct/buyProduct";

function App() {


  const [ShowGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const GoToTopClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Router>

        <Switch>

          <Route exact path="/">
            <Header_General />
            <Header />
            <Content />
            <Footer />

          </Route>
          <Route exact path="/flycam">
            <Header_General />
            <FlyCamHome />
            <Footer />

          </Route>
          <Route exact path="/cammara">
            <Header_General />
            <HomeCam />
            <Footer />

          </Route>
          <Route path="/cammara/:id">
            <Header_General />
            <DetailCam />
            <Footer />

          </Route>
          <Route path="/flycam/:id">
            <Header_General />
            <Detail />
            <Footer />

          </Route>
          <Route path="/cart">
            <Header_General />
            <Cart />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <LogOut />
          </Route>
          <Route path="/buyProduct">
            <Header_General />
            <BuyProduct />
          </Route>

        </Switch>


      </Router>
      {ShowGoToTop && <> <button style={{ position: 'fixed', right: 20, bottom: 20, }} onClick={() => GoToTopClick()} >Lên</button></>}
    </>

  );
}

export default App;
