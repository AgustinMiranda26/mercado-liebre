const express= require ('express');
const app= express();
const port= 3000;
const path= require ('path');
const rutaHome= require('./routes/home.route');
const rutaUser= require('./routes/users.route');

app.use(rutaHome);
app.use(rutaUser);


app.use(express.static(path.join(__dirname, '/public')))

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost${port}👌`)
})


