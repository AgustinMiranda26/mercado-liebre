const express= require ("express");
const app= express()
const path= require ("path");

const port= 3000


//config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})


app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost${port}👌`)
})


