// index.ejs need to be inside the folder views for it to work
const express = require('express'); // module needed for creating a server to show what we built on the browser and it will be need for rendering everything
const app = express(); // instancing express inside the variable app

app.set("view engine", "ejs"); // telling express we are using ejs .set is a method inside express

app.get("/", function (req, res){ // creating a route `"/"`: name of the website
     const items = [
        {
             title: "D",
             message:"eveloping applications in a easy way"
        },
        {
            title: "E",
            message:"JS uses JavaScript to render HTML"
       },
       {
        title: "M",
        message:"uch more easy to use"
        },
        {
            title: "A",
            message:" lovely way to learn"
        },
        {
            title: "I",
            message:"nstall ejs"
        },
        {
            title: "S",
            message:"imple syntax"
        },
     ];
    const subtitle = "A modeling language to create a HTML page"

    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle, 
    }); // res is for response: we are rendering index
}) 

app.get("/about", function (req, res){ 
    res.render("pages/about"); 
}) 

app.listen(8080); // listen is a function inside express to hear the port 
console.log("Server working"); // any alterations in EJS files we dont need to stop the server and run it again it will be only necessary when making alterations in JS files like this one