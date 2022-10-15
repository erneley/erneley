
const express= require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const ejs= require('ejs');

app.set('view engine', 'ejs');
//mongoose.connect("mongodb+srv://erneleyposso:<IUD16276107>@dbiudigital.sn7ribj.mongodb.net/dbiudigital", {useNewUrlParser:true},{useUnifiedTopology:true})

//mongoose.connect("mongodb+srv://erneleyposso:<IUD16276107>@dbiudigital.sn7ribj.mongodb.net/?retryWrites=true&w=majority")
//mongoose.connect("mongodb://localhost/iudigital")
mongoose.connect("mongodb+srv://erneleyposso:IUD16276107@dbiudigital.sn7ribj.mongodb.net/test");
//crea el esquema de equipos
const invschema={

serial: String,
modelo: String,
descripcion: String,
color : String,
fechacompra: String

}
const Inv=mongoose.model("Inv",invschema)


//crea el esquema de marcas de equipo
const marcaschema={

    nombre: String,
    estado: String,
    descripcion: String,
    fechacreacion : String,
    fechaupdate: String
    
    }
    const Marca=mongoose.model("Marca",marcaschema)


 //crea el esquema de estado de equipo
const estadoschema={

    nombre: String,
    estado: String,
    fechacreacion : String,
    fechaupdate: String
    
    }
    const estado=mongoose.model("estado",marcaschema)   


    
//crea el esquema de usuarios
const usuaschema={

    nombre: String,
    estado: String,
    email: String,
    fechacreacion : String,
    fechaupdate: String
    
    }
    const usuarios=mongoose.model("usuarios",usuaschema)
    
    



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.get("/crearequipo",function(req,res){
    res.sendFile(__dirname+"/crear.html")
})

app.get("/crearmarca",function(req,res){
    res.sendFile(__dirname+"/crearmarca.html")
})

app.get("/crearusuario",function(req,res){
    res.sendFile(__dirname+"/usuarios.html")
})


app.get("/crearestado",function(req,res){
    res.sendFile(__dirname+"/estado.html")
})





app.get("/listar",function(req,res){
    
    Inv.find({}, function(err,inventario){
       
        res.render('index',{
          listainv: inventario
        })

    })
    })

    app.get("/listarmarcas",function(req,res){
    
        Marca.find({}, function(err,lista){
           
            res.render('listarmarcas',{
              listado: lista
            })
    
        })
        })   


        app.get("/listarestados",function(req,res){
    
           estado.find({}, function(err,lista){
               
                res.render('listarestados',{
                  listado: lista
                })
        
            })
            })       


    app.get("/listarusuarios",function(req,res){
    
        usuarios.find({}, function(err,lista){
           
            res.render('listarusuarios',{
              listado: lista
            })
    
        })
        })   









    app.post("/crearequipo",function(req,res){
        let newInv= new Inv({
        serial: req.body.serial,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion,
        color: req.body.color,
        fechacompra:req.body.fecha
        });
    newInv.save();
    res.redirect('/');
    })

    

    app.post("/crearmarca",function(req,res){
        let newMarca= new Marca({
        nombre: req.body.nombre,
       estado: req.body.estado,
        descripcion: req.body.descripcion,
        fechacreacion:req.body.fechacreacion,
        fechaupdate:req.body.fechaupdate
        });
    newMarca.save();
    res.redirect('/');
    })



    app.post("/crearestado",function(req,res){
        let newEstado= new estado({
        nombre: req.body.nombre,
       estado: req.body.estado,
       fechacreacion:req.body.fechacreacion,
        fechaupdate:req.body.fechaupdate
        });
    newEstado.save();
    res.redirect('/');
    })

    
    

    app.post("/crearusuario",function(req,res){
        let newUsuario= new usuarios({
        nombre: req.body.nombre,
       estado: req.body.estado,
        email: req.body.email,
        fechacreacion:req.body.fechacreacion,
        fechaupdate:req.body.fechaupdate
        });
    newUsuario.save();
    res.redirect('/');
    })





 // abrir puerto   
const PORT=process.env.PORT || undefined || 3000
app.listen(PORT,function(){

    console.log("SERVER RUNNING");
    
    
    
    })