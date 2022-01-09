import './App.css';
import React, { useState } from 'react';
// import Nav from './components/Nav';
// import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {



  // const [contactSelected, setContactSelected] = useState(false);

  // return (
  //   <div>
  //     <Nav
  //       contactSelected={contactSelected}
  //       setContactSelected={setContactSelected}
  //     ></Nav>
  //     <main>
  //       {!contactSelected ? (
  //         <>
  //         <body />
  //         </>
  //       ) : (
  //           <ContactForm></ContactForm>
  //         ) }
  //         <Footer></Footer>
  //     </main>
  //   </div>
  // );
  return(
    <div>
    <Body />
   <footer></footer>
   </div>
  )
}

export default App;
