const Asistencias =require('../models/Asistencias')

const ctrlAsistencia = {};

ctrlAsistencia.getAsistencia = async (req,res)=>{
const datos= await Asistencias.find({})
return res.json({
    mensaje:"Asistencias Encontradas",
    encontrados:datos
})

}
ctrlAsistencia.postAsistencia = async (req,res)=>{
    const{Profile,type,fecha,asistio}=req.body

    const newAsistencia= new Asistencias({
        Profile,
        type,
        fecha, 
        asistio,
          })
    const asistencia = await newAsistencia.save()
    return res.json({
        mensaje:"Asistencia guardada",
        encontrados:asistencia
    })


}

ctrlAsistencia.putAsistencia= async (req,res)=>{
    const {id}=req.params
    const {Profile,type,fecha,asistio} =req.body
    const update ={}
console.log(id)
console.log(typeof id)

    if(Profile){
        update.Profile=Profile
    }
    if(type){
        update.type=type 
    }
    if(fecha){
        update.fecha=fecha
    }

  if(asistio){
        update.asistio=asistio
    }
    if(update.Profile || update.type || update.fecha || update.asistio ){
        try {
            const asistencia = await Asistencias.findByIdAndUpdate(id,update,{new:true})
            return res.json({
                mensaje:"Asistencia actualizada",
                asistencia
            })
 
 
        } catch (error) {
            res.json({
                mensaje:"Error al actualizar la Asistencia"
            })
        }
          
              
        
    }

}
ctrlAsistencia.deleteAsistencia = async (req,res)=>{
    const {id}=req.params
    try{
        await Asistencias.findByIdAndDelete(id,{new:true})
        res.json({
            mensaje:"Se elimino la Asistencia"
        })
    }
    catch(error){
        res.json({
            mensaje:"Error al eliminar la Asistencia"

        })
    }
}
ctrlAsistencia.getAllAsistencia = async (req,res)=>{
    const {id}=req.params

try{
const asistencia1= await Asistencias.findOne({_id:id})
 res.json(asistencia1)
}
catch(error){
   res.json(
      {
         mensaje:"Error al encontrar la Asistencia"
      }
   )

}

}