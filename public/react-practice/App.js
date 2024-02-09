// sample 
const heading = React.createElement("h1", {}, "hello world from react");  //creating heading tag
const subheading = React.createElement("h3", {}, "this is journey of react");
console.log(heading); // here heading is object.

const root = ReactDOM.createRoot(document.getElementById("sampleroot")); //creating root to inject heading tag
const root1 = ReactDOM.createRoot(document.getElementById("sampleroot1"));
root.render(heading); //injecting heading tag inside root. 
root1.render(subheading);

//2. Nested HTML structure:
{/* <div id = "parent">
        <div id = "child">
            <h1>This is h1 tag inside another div i.e., nested h1</h1>
            <h3>This is the start for journey of the react.</h3>
        </div>
    </div> */}

// Solution:
const nestedHeading = React.createElement("div", {id:"parent"}, 
React.createElement("div", {id:"child"}, 
React.createElement("h1", {id: "heading1"}, "This is h1 tag inside another div ie., nested h1")));

const nestedroot = ReactDOM.createRoot(document.getElementById("root"));

nestedroot.render(nestedHeading);


//3. siblings of div
{/* <div id = "parent">
    <div id = "child1">
        <h3>This is the start for journey of the react.</h3>
    </div>
        <div id = "child2">
        <h1>This is h1 tag inside another div i.e., nested h1</h1>
    </div>
</div> */}

//solution:
const siblingHeadings = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child1"}, React.createElement("h1", {}, "This is first sibling h1")), 
React.createElement("div", {id: "child2"}, React.createElement("h1", {}, "This is second sibling h1"))]);

const siblingRoot = ReactDOM.createRoot(document.getElementById("root"));
siblingRoot.render(siblingHeadings);
