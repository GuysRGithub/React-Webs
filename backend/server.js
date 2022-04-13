const express = require("express")
const cors = require("cors")


const app = express()
app.use(cors())

const port = 5000

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get("/api/test", (req, res) => {
    const test = [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
        },
        {
          id: 2,
          firstName: "Steve",
          lastName: "Smith",
        },
        {
          id: 3,
          firstName: "Neo",
          lastName: "Armstrong",
        },
      ];

      res.json(test)
}) 