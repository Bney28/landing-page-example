import NavBar from "./Components/header";
import Card from "./Components/cards"
import CardDesktop from "./Components/cardsDesktop";
import "./Styles/style-header.css"
import Hero from "./Components/hero";


function App() {
  return (
    <>
    <NavBar />
    <Hero />
      {/* <NavBar /> */}
    <Card />
    <CardDesktop />
      <Interactive />
      <Footer />
    </>
  );
}

export default App;
