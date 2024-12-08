
const express = require ("express")

const app = express()

app.get("/",  (req , res) => {
    res.sendFile(__dirname+"/jk/index.html")
})






app.get("/home", function (req , res)  {
    res.sendFile(__dirname+"/jk/index.html")
} )




app.get("/about", function (req , res)  {
    res.sendFile(__dirname+"/jk/abou.html")
} )



app.get("/contact", function (req , res)  {
    res.sendFile(__dirname+"/jk/contact.html")
} )


app.listen(5000 ,()=>console.log("the server is running") )

