const Horarios =require('../models/Horarios')

const ctrlHorarios = {};

ctrlHorarios.getHorario = async (req,res)=>{
const datos= await Horarios.find({})
return res.json({
    mensaje:"Horarios Encontrados",
    encontrados:datos
})

}
ctrlHorarios.postHorario = async (req,res)=>{
    const{Subject,dia,horariodesde, horariohasta}=req.body

    const newHorario= new Horarios({
        Subject,
        dia,
        horariodesde, 
        horariohasta,
          })
    const horario = await newHorario.save()
    return res.json({
        mensaje:"Horario guardado",
        encontrados:horario
    })


}

ctrlHorarios.putHorario= async (req,res)=>{
    const {id}=req.params
    const {Subject,dia,horariodesde,horariohasta} =req.body
    const update ={}
console.log(id)
console.log(typeof id)

    if(Subject){
        update.Subject=Subject 
    }
    if(dia){
        update.dia=dia 
    }
    if(horariodesde){
        update.horariodesde=horariodesde
    }
    if(horariohasta){
        update.horariohasta=horariohasta
    }

    if(update.Subject || update.dia || update.horariodesde || update.horariohasta ){
        try {
            const horario = await Horarios.findByIdAndUpdate(id,update,{new:true})
            return res.json({
                mensaje:"Horario actualizado",
                horario
            })
 
 
        } catch (error) {
            res.json({
                mensaje:"Error al actualizar el horario"
            })
        }
          
              
        
    }

}
ctrlHorarios.deleteHorario = async (req,res)=>{
    const {id}=req.params
    try{
        await Horarios.findByIdAndDelete(id,{new:true})
        res.json({
            mensaje:"Se elimino el horario"
        })
    }
    catch(error){
        res.json({
            mensaje:"Error al eliminar el horario"

        })
    }
}



ctrlHorarios.getAllHorario = async (req,res)=>{
    const {id}=req.params

try{
const horario1= await Horarios.findOne({_id:id})
 res.json(horario1)
}
catch(error){
   res.json(
      {
         mensaje:"Error al encontrar el horario"
      }
   )

}

}