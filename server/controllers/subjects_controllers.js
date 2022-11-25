const Subjects =require('../models/subjects')

const ctrlSubjects = {};

ctrlSubjects.getSubjects = async (req,res)=>{
const datos= await Subjects.find({}).populate("DocentTitular")
return res.json({
    mensaje:"Materias Encontradas",
    encontrados:datos
})

}
ctrlSubjects.postSubjects = async (req,res)=>{
    const{DocentTitular,anio,NombreMateria}=req.body

    const newMateria= new Subjects({
        DocentTitular,
        anio,
        NombreMateria, 
          })
    const materia = await newMateria.save()
    return res.json({
        mensaje:"Materia guardada",
        encontrados:materia
    })


}

ctrlSubjects.putSubjects= async (req,res)=>{
    const {id}=req.params
    const {DocentTitular,anio,NombreMateria} =req.body
    const update ={}
console.log(id)
console.log(typeof id)

    if(DocentTitular){
        update.DocentTitular=DocentTitular 
    }
    if(anio){
        update.anio=anio 
    }
    if(NombreMateria){
        update.NombreMateria=NombreMateria
    }

    if(update.DocentTitular || update.anio || update.NombreMateria ){
        try {
            const subject = await Subjects.findByIdAndUpdate(id,update,{new:true})
            return res.json({
                mensaje:"Materia actualizada",
                materia
            })
 
 
        } catch (error) {
            res.json({
                mensaje:"Error al actualizar la materia"
            })
        }
          
              
        
    }

}
ctrlSubjects.deleteSubjects = async (req,res)=>{
    const {id}=req.params
    try{
        await Subjects.findByIdAndDelete(id,{new:true})
        res.json({
            mensaje:"Se elimino la materia"
        })
    }
    catch(error){
        res.json({
            mensaje:"Error al eliminar"

        })
    }
}
ctrlSubjects.getAllSubjects = async (req,res)=>{
    const {id}=req.params

try{
const materia1= await materiaModelo.findOne({_id:id})
 res.json(materia1)
}
catch(error){
   res.json(
      {
         mensaje:"Error al encontrar la materia"
      }
   )

}

}

module.exports = ctrlSubjects;