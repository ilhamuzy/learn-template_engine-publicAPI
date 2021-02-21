const express = require("express")
const axios = require("axios")
const app = express();

//setting ejs
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("index", {title: "Homepage"})
})

app.get("/about", (req, res)=>{
    res.render("about", {title: "About"})
})

app.get("/news", (req, res) => {
    // url Public API
    const url = "https://berita-indo-api.vercel.app/v1";
  
    // Untuk method get, argumen pertama adalah url endpoint API
    axios.get(`${url}/kumparan-news`)
    .then(result => {
      // handling dengan Promise chaining
      res.render("news", { title: "Berita", news: result.data.data })
    })
  })

app.get("/corona", (req, res) => {
    const url = "https://api.kawalcorona.com/indonesia/provinsi/";
    axios.get(`${url}`)
    .then(result => {
      res.render("corona", { title: "Data Corona", corona: result.data})
    })
  })

app.get("/greet", (req,res) =>{
    res.render("greet", {nama: req.query.name})
})

app.listen(3000, ()=> console.log("Server Ready !"))