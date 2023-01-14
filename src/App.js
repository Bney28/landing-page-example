import NavBar from "./Components/header";
import Card from "./Components/cards"
import CardDesktop from "./Components/cardsDesktop";
import Hero from "./Components/hero";
import Footer from "./Components/footer"
import Interactive from "./Components/interactive"
import "./Styles/style-header.scss"
import "./Styles/our-creations.scss"
import "./Styles/style-interactive-footer.scss"


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Interactive />
      <Card />
      <CardDesktop />
      <Footer />
    </>
  );
}

export default App;
