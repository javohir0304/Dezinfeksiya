import React, {useEffect, useState} from 'react';
import Dezenfection from "./components/Navbar";
import 'animate.css';
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import FoterPage from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            offset: 200,
        });

    },[])
    const handleMenuClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        const menuHeight = document.querySelector('.menu').offsetHeight;

        if (section) {
            const offset = section.offsetTop - menuHeight;
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
        setOpen(false)
    };
      return (
        <React.Fragment>
            <Dezenfection/>
            <Header handleMenuClick={handleMenuClick}/>
            <About handleMenuClick={handleMenuClick}/>
            <Services handleMenuClick={handleMenuClick}/>
            <Contacts/>
            <FoterPage/>
        </React.Fragment>
    )
}

export default App;
