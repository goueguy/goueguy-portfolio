import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Customer from "./components/Customer/Customer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projet from "./components/Projets/Projet";
import Resume from "./components/Resume/Resume";
import Services from "./components/Services/Services";
import Techno from "./components/Techno/Techno";
import Testimony from "./components/Testimony/Testimony";
import animateTextWithTypeIt from "./utils/animateText";
import animateStatistics from "./utils/showStatistics";
import ScrollIcon from "./components/ScrollIcon/ScrollIcon";
import 'react-loading-skeleton/dist/skeleton.css'
import Logo from "./components/Logo/Logo";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      animateTextWithTypeIt();
      animateStatistics();
    }, 1000);
  })
  window.onscroll = ()=>{
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
      document.querySelector("#scrollTop").style.display = 'block';
    }else{
      document.querySelector("#scrollTop").style.display = 'none';
    }
  }
  return (
    <div className="container">
        {
          loading ? (
            <div className="loading">
                <Logo/>
            </div>
          ):(
            <div>
              <Header/>
              <Banner/>
              <hr className="border-bottom"/>
              <Services/>
              <Techno/>
              <Projet/>
              <hr className="border-bottom"/>
              <Resume/>
              <hr className="border-bottom"/>
              <Testimony/>
              <hr className="border-bottom"/>
              <Customer/>
              <hr className="border-bottom"/>
              <Contact/>
              <hr className="border-bottom"/>
              <Footer/>
              <ScrollIcon/>
            </div>
          )
        }
    </div>
  )
}

export default App
