import React from "react";
import ReactDOM from "react-dom/client";

//JSX - Babel transpiles it , HTML like or XML Like (transpiled before going to JS Engine) -> Parcel - Babel converts to React.createElement => Object => HTML Element
// const jsxheading = (<h1 className="head">
// Namaste React from JSX 🚀</h1>);
// console.log(jsxheading);

const element = <span>Hey this is kirthi</span>


//Component Composition

const number = 1000;


const title = (
    <h1 className="head" tabIndex="5">
    {element}
    Title from react element
    </h1>
);

const Title = () =>(
    <h1 className="head" tabIndex="5">
    {element}
    Title from function
    </h1>
);

const Footer = () =>  <h1 className="footer" tabIndex="5"> AK </h1>


const HeadingComponent = () =>(
    <div id="container">
    <h2>{number + 100}</h2>
    {title}
    {Title()}
    <h1>Namaste React Functional Component</h1>
    <Footer></Footer>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);