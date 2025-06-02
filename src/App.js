import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Finder from "./components/Finder";
import Reviews from "./components/Reviews";
import Hotel from "./components/Hotel";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Finder />
      <Reviews />
      <Hotel />
      <Support />
    </>
  );
}

export default App;
