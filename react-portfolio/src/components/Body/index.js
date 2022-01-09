import React, { useState } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Nav from '../Nav';
import Contact from '../Contact';
import Resume from '../Resume';
import Footer from '../Footer';


function Body() {
    // Using useState, set the default value for currentPage to 'About'
    const [currentPage, handlePageChange] = useState('About');
  
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Portfolio':
          return <Portfolio />;
        case 'Contact':
          return <Contact />;
          case 'Resume':
            return <Resume />;
        default:
          return <About />;
      }
    };
  
    return (
      <div>
        {/* Pass the state value and the setter as props to NavTabs */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Call the renderPage function passing in the currentPage */}
        <div>{renderPage(currentPage)}</div>
        <Footer>
        </Footer>
      </div>
    );
  }
  
  export default Body;