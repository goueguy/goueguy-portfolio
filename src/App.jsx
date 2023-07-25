import { useEffect, useRef, useState } from "react";
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
import Logo from "./components/Logo/Logo";


function App() {
  const [loading, setLoading] = useState(true);
  const [errors, setError]= useState([]);
  const scrollRef = useRef(null);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      animateTextWithTypeIt();
      animateStatistics();
    }, 1000);
  })
  window.onscroll = ()=>{
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
      scrollRef.current.style.display = 'block';
    }else{
      scrollRef.current.style.display = 'none';
    }
  }
  const sendEmail = (data)=>{
    fetch("http://127.0.0.1:8000/api/portfolio/contact-form/data",{
        method:"POST",
        mode: "cors",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
      }).then(response=>response.json())
      .then(data=>{
        if(data.code==400){
            setError({
              errors:data.errors
            });
        }else{
          setError({
            errors:[]
          });
          Swal.fire({
            text: data.message,
            icon: 'success',
            confirmButtonText: 'FERMER'
          })
        }
    })
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
              <Contact sendemail={sendEmail} errors={errors}/>
              <hr className="border-bottom"/>
              <Footer/>
              <ScrollIcon reference={scrollRef}/>
            </div>
          )
        }
    </div>
  )
}

export default App
