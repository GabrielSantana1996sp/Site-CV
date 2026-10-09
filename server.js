const express = require ("express");
const helmet = require("helmet");
const path = require(`path`);
const app = express();
const PORT = process.env.PORT ||3000;

app.use(helmet());

app.use(express,urlencoded({extendex:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get("/" , (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

//não coloquei BD pois a intenção é o site e a apresentação conceitual

app.post("/",(req,res)=>{
    comments.push(escapeHtml(req.body.comment));
    res.redirect("/");
});

app.listen( PORT,()=>{
    console.log(`servidor rodando em... http://localhost:${PORT}`);
});
