import Navbar from "../components/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import Story from "../sections/Story/Story";
import Parents from "../sections/Parents/Parents";
import Couple from "../sections/Couple/Couple";
import Events from "../sections/Events/Events";
import Venue from "../sections/Venue/Venue";
import RSVP from "../sections/RSVP/RSVP";
import Gallery from "../sections/Gallery/Gallery";
import Footer from "../sections/Footer/Footer";

function Home({ playMusic }) {
  return (
    <>
      <Navbar playMusic={playMusic} />
      <Hero />
      <Story />
      <Parents />
      <Couple />
      <Events />
      <Venue />
      <RSVP />
       <Gallery />
      <Footer /> 
    </>
  );
}

export default Home;

// import Navbar from "../components/Navbar/Navbar";

// function Home({ playMusic }) {
//   return (
//     <>
//       <Navbar playMusic={playMusic} />
//       <h1 style={{ marginTop: "150px", textAlign: "center" }}>
//         Home Loaded Successfully
//       </h1>
//     </>
//   );
// }

// export default Home;