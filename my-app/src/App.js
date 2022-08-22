


import Header from "./components/Home/header/header-img/header";
import Content from "./components/Home/content/content";
import Header_General from "./components/Home/header/header- general/header- general";
import Footer from "./components/Home/footer/footer";
import FlyCamHome from "./components/shop/flyCam/JSX/flyCamHome"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Detail from "./components/shop/flyCam/JSX/Detail/Detail";
import Cart from "./components/Cart/cart";

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
            <Header />
            <Content />
          </Route>
          <Route exact path="/flycam">
            <Header_General />
            <FlyCamHome />
          </Route>
          <Route path="/flycam/:id">
            <Header_General />
            <Detail />
          </Route>
          <Route path="/cart">
            <Header_General />
            <Cart />
          </Route>
        </Switch>
        {ShowGoToTop && <> <button style={{ position: 'fixed', right: 20, bottom: 20, }} onClick={() => GoToTopClick()} >Lên</button></>}
      </Router>
      <Footer />
    </>

  );
}

export default App;
