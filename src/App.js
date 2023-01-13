import NavBar from "./Components/header";
import Card from "./Components/cards"
import CardDesktop from "./Components/cardsDesktop";
import Hero from "./Components/hero";
import Footer from "./Components/footer"
import Interactive from "./Components/interactive"
import "./Styles/style-header.css"
import "./Styles/our-creations.css"
import "./Styles/style-interactive-footer.css"


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Card />
      <CardDesktop />
      <Interactive />
      <Footer />
    </>
  );
}

export default App;
