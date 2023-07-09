const express=require('express');
const app=express();
const port = 3000

app.use(express.json());

app.post('/misitio/calculos', (req,res) =>{
    console.log(req.body);
    res.send('Cálculo impuesto a la renta')
})

app.post('/misitio/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
    })

    app.delete('/misitio/usuarios/:id', (req,res)=>{
        res.send('Usuario '+ (req.params.id) +' borrado');
       });

app.get('/misitio', (req,res)=>{
 res.send('Bienvenido a mi sitio web');
});


app.get('/misitio/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
   });
  
   app.get('/misitio/gastos', (req,res)=>{
    res.json(
    {
    gasto:'Salud',
    monto:14575.60,
    informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
    }
    );
   });

   app.post('/misitio/calculos', (req,res)=>{
    res.send('Cálculo impuesto a la renta');
   });



app.listen(port, ()=>{
 console.log('Servidor escuchando en el puerto ' + port);
})


//put
app.put('/misitio/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario actualizado');
    })

//delete

app.delete('/misitio/usuarios/:id', (req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
   });



//Crear un método PUT para gastos que permita actualizar el monto del gasto de VIVIENDA

// Datos de ejemplo para gastos de vivienda
let gastosVivienda = {
  monto: 1000
};

// Ruta PUT para actualizar el monto de gastos de vivienda
app.put('/misitio/gastos/viviendas', (req, res) => {
  const nuevoMonto = req.body.monto;

  // Actualizar el monto de gastos de vivienda
  gastosVivienda.monto = nuevoMonto;

  // Enviar respuesta exitosa
  res.json({ mensaje: 'El monto de gastos de vivienda ha sido actualizado' });
});


//Crear un método DELETE para borrar todos los gastos que correspondan al ID 435

app.delete('/misitio/gastos/viviendas', (req, res) => {
    const nuevoMonto = req.body.monto;
  
    // Actualizar el monto de gastos de vivienda
    gastosVivienda.monto = nuevoMonto;
  
    // Enviar respuesta exitosa
    res.json({ mensaje: 'El monto de gastos a sido borrado' });
  });

//. Crear un método GET que permita visualizar todos los usuarios registrados
app.get('/misitio/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario obtenido');
    })
