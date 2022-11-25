const Notas =require('../models/Notas')

const ctrlNotas = {};

ctrlNotas.getNota = async (req,res)=>{
const datos= await Notas.find({})
return res.json({
    mensaje:"Notas Encontradas",
    encontrados:datos
})

}
ctrlNotas.postAsistencia = ( '/notas', async (req,res)=>{
    const{materia,notas}=req.body

    const newNota= new Notas({
        materia,
        notas,
          })
    const nota = await newNota.save()
    return res.json({
        mensaje:"Nota guardada",
        encontrados:nota
    })


})

ctrlNotas.putNotas= async (req,res)=>{
    const {id}=req.params
    const {materia,notas} =req.body
    const update ={}
console.log(id)
console.log(typeof id)

    if(materia){
        update.materia=materia
    }
    if(notas){
        update.notas=notas
    }

    if(update.materia || update.notas ){
        try {
            const nota = await Notas.findByIdAndUpdate(id,update,{new:true})
            return res.json({
                mensaje:"Nota actualizada",
                nota
            })
 
 
        } catch (error) {
            res.json({
                mensaje:"Error al actualizar la Nota"
            })
        }
          
              
        
    }

}
ctrlNotas.deleteNotas = async (req,res)=>{
    const {id}=req.params
    try{
        await Notas.findByIdAndDelete(id,{new:true})
        res.json({
            mensaje:"Se elimino la Nota"
        })
    }
    catch(error){
        res.json({
            mensaje:"Error al eliminar la Nota"

        })
    }
}
ctrlNotas.getAllNotas = async (req,res)=>{
    const {id}=req.params

try{
const nota1= await Notas.findOne({_id:id})
 res.json(nota1)
}
catch(error){
   res.json(
      {
         mensaje:"Error al encontrar la Nota"
      }
   )

}

}

module.exports = ctrlNotas;