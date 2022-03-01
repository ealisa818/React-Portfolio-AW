import React from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects  from './Components/Projects';
import Skills from './Components/About';
import Footer from './Components/Footer';
import "./assets/style.css"





export default function App() { 
    return (
     <div> 
         <Nav/>
         <About/>
         <Projects/>
         <Skills/>
         <Footer/>
     </div>   

    
    )
}

// import Footer from './components/Footer';

// import Skills  from './Components/Skills.js'
// export default function App() {
//   return (
//     <div>
//       <Skills />
//       <Footer />
//     </div>
