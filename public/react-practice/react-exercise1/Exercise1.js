import React from "react";
import ReactDOM from "react-dom/client";
// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice
const logo = <img src = "./A-letter.png.jpg"/>
function SearchBar() {
    return <input type="text" placeholder="Search.."></input>
}
const HeaderComponent = () => (
    <div>
        {logo}
        <h1>This is first sample header react functional component </h1>
        <SearchBar />
    </div>); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />)