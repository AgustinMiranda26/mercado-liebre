const express= require ("express");
const path= require ("path");
const app= express()
const port= 3000
const rutaHome= require('./routes/home.js')
const rutaLogin= require('./routes/login.js')
const rutaRegister= require('./routes/register.js')

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost${port}👌`)
})

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', rutaHome);
app.use('/login', rutaLogin);
app.use('/register', rutaRegister);






