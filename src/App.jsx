import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Projet from "./components/Projets/Projet";
import Resume from "./components/Resume/Resume";
import Services from "./components/Services/Services";
import Techno from "./components/Techno/Techno";

function App() {
 
  return (
    <div className="container">
        <Header/>
        <Banner/>
        <hr className="border-bottom" style={{marginBottom:"40px",marginTop:"80px"}}/>
        <Services/>
        <Techno/>
        <Projet/>
        <hr className="border-bottom" style={{marginBottom:"40px",marginTop:"80px"}}/>
        <Resume/>
    </div>
  )
}

export default App
