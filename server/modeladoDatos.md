
- Javascript
```js
const users {

    _id: <ObjectId>
    nombre: ""
    apellido: ""
    dni: ""
    email: ""
    password: ""

}

~~~
const profiles {
    
    _id: <ObjectId>
    refld: ObjectId ("")
    tipo: [docente, alumnos, administrativos]

    dataAlumnos:[]
    dataDocentes:[]
    dataAdministrativos:[]


}
~~~
const materias {

   _id: <ObjectId>
   docTitularId: ObjectId (""),
   anio: 2022,
   NombreMateria: programacion,
   notas: [
    {
        NombreyApellido: "Ivana Insaurralde",
        alumnoId: ObjectId,
        parc1:...,
        par2:...,
        Recu:...,
        final:...;
    }

   ]

}

~~~
const notas {
    _id: <ObjectId>
    AlumnoId: ObjectId (""),
    NombreyApellido:
    parcial1:....;
    parcial2:....;
    final:....;

}

~~~
const Horarios {

    _id: <ObjectId>
    MateriaId: ObjectId (""),
    dia: "",
    horariodesde: "",
    horariohasta: "",
}

~~~
const asistencia {

    _id: <ObjectId>
    AlumnosId: ObjectId (""),
    DocentesId: ObjectId (""),
    fecha: "",
    descripcion: "",


}

~~~
const avisos {

    _id: <ObjectId>
    DocentesId: ObjectId (""),
    AdministrativosId: ObjectId (""),
    fecha: "",
    titulo:...,
    contenido...,
}

~~~
