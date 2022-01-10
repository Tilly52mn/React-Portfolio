import React from "react";



// export default Nav;

// Props are passed through our functional component.
function Nav(props) {
  const tabs = ['Portfolio', 'About', 'Resume', 'Contact'];
  return (
    <header className="flex-row px-1" id="navbar" style={{justifyContent:"space-between",display:"flex",}}>
      <h2>Adam Tilly</h2>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item mx-2 " key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link font-weight-bold'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Nav;
