// import express and path modules
const app = require("express")()
const path = require("path")

// function that takes two numbers and returns their sum
function addTwoNumbers(n1, n2) {
    return n1 + n2
}

// a simple HTTP GET request that renders the home HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// a GET request that takes two input parameters from the url query, parses to integers, calls the function addTwoNumbers(n1, n2) and outputs the sum as JSON when the api endpoint /addTwoNumbers is invoked.
app.get("/addTwoNumbers", (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    const sum = addTwoNumbers(n1, n2)
    res.json({statuscode: 200, data: sum})
})

// the port of the express server
const port = 3000

// a method to make the server listen on the specified port
app.listen(port, () => {
    console.log("Server listening on port:" + port)
})