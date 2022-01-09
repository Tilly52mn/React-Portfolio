import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// function Nav(props) {
//   // const {
//   //   categories = [],
//   //   setCurrentCategory,
//   //   currentCategory,
//   //   contactSelected,
//   //   setContactSelected
//   // } = props;


//   const handleClick = (item) => {
//     console.log(item);
//     return item;
//   };

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera"> </span> Adam Tilly
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row nav-row">
//           <li className="list-group-item mx-2">
//             <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
//               About me
//             </a>
//           </li>
//           <li className={`list-group-item mx-2 ${contactSelected && 'navActive'}`}>
//             <a data-testid="Portfolio" href="#Portfolio" onClick={() => setContactSelected(false)}>
//               Portfolio
//             </a>
//           </li>
//           <li className={` list-group-item mx-2 ${contactSelected && 'navActive'}`}>
//             <span onClick={() => setContactSelected(true)}>Contact</span>
//           </li>
//           <li className={`list-group-item mx-2 ${contactSelected && 'navActive'}`}>
//             <span onClick={() => setContactSelected(true)}>Resume</span>
//           </li>
//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
//                 }`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category);
//                   setContactSelected(false);
//                 }}
//               >
//                 {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;

// Props are passed through our functional component.
function Nav(props) {
  const tabs = ['Portfolio', 'About', 'Resume', 'Contact'];
  return (
    <header className="flex-row px-1">
      <h2>Adam Tilly</h2>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
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
