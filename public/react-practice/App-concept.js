import React from "react";
import ReactDOM from "react-dom/client";
// add image, anchor tag in JSX.
// const heading = (<h1 id="heading" className="class-heading">This is using JSX</h1>);

//reactElement
// const heading = <h1>this is react component</h1>


//functional component, start with capital letter
function Title() {  //this is by using normal function
return <h1 className="jsx-functional-component">JSX with functional component</h1>;
}

const title = <h3>putting reactElement inside component</h3>
const title1 = <div>{<h1>React element inside react element</h1>}{title}</div>
const abc = "Aasif"
const SubTitle = () => ( //this is by using arrow function and without cusrly braces.
    <div>
        <Title />   {/* component composition */}
        {abc}   {/*We can write any JS code here */}
        {title1}   {/* title is an reactElement */}
        <h2>component composition in React functional component</h2>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  //this is to render reactElement
root.render(<SubTitle />); // this is to render functional component


