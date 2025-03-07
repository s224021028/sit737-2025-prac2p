const app = require("express")()

function addTwoNumbers(n1, n2) {
    return n1 + n2
}

app.get("/addTwoNumbers", (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    const sum = addTwoNumbers(n1, n2)
    res.json({statuscode: 200, data: sum})
})

const port = 3000
app.listen(port, () => {
    console.log("Server listening on port:" + port)
})