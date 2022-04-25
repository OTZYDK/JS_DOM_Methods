// 1. What is the DOM?
// document object model: replica of an html file created by the linked by the js file

//2. Where is the DOM?
// the dom lives on the internet . in chrome's develepor tools under the elements tab.

//3. How do you change or manipulate the DOM?
// through the linked javascript file

// 1) Create an html element
// in-built functions are called methods such as: document.createElement

const list = document.createElement("ul");
// we store the element in a variable, so we can access it later. 
// document is the html file which it is linked to. From the opening html tag to the closing html tag.

// 2) Set an attribute on an html Element

list.setAttribute("id","details");
// The first parameter has the attribute (class, id, src...) that you want to set the second one has the Name of the attribute.

// 3) Accessing an html element

const listElement = document.getElementById("details");
// we use the name of the id to access the html element.

// 4) Creating plain text for an html element

// const head = document.createElement("h1");
    head.innerText = "Amatul Raheem Aasiyah";
    // document.body.appendChild(head);
    // head.setAttribute("class", "name");


// 5) Append/attach an html element to the body
document.body.appendChild(list);
// we are attaching the list to the body/document so we can see it
// example 2:
document.body.appendChild(head);