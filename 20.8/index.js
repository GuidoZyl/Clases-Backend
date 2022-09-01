document.addEventListener("DOMContentLoaded", () => {
    
    // Ejercicio 1
    
    let alumnos = [{
        nombre: "Juan",
        apellido: "Calvo",
        dni: 46778825,
        anio: 4,
        curso: "A",
        nota: 8
    },
    {
        nombre: "Carlos",
        apellido: "Gutiérrez",
        dni: 46775625,
        anio: 4,
        curso: "A",
        nota: 9
    },
    {
        nombre: "Ariel",
        apellido: "Flores",
        dni: 47778253,
        anio: 5,
        curso: "A",
        nota: 7
    },
    {
        nombre: "martín",
        apellido: "Rodríguez",
        dni: 46678925,
        anio: 5,
        curso: "A",
        nota: 6
    },
    {
        nombre: "Miguel",
        apellido: "Silva",
        dni: 46728425,
        anio: 4,
        curso: "B",
        nota: 3
    },
    {
        nombre: "uriel",
        apellido: "López",
        dni: 46778852,
        anio: 4,
        curso: "B",
        nota: 10
    },
    {
        nombre: "Ariel",
        apellido: "Martínez",
        dni: 46881625,
        anio: 3,
        curso: "B",
        nota: 5
    },
    {
        nombre: "Joaquín",
        apellido: "Suárez",
        dni: 46778925,
        anio: 3,
        curso: "B",
        nota: 2 
    }
    ];

    //Ejercicio 2

    const capitalizar = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    //Ejercicio 3

    const mostrarAlumno = (alumno) => {
        let dni = alumno.dni.toString()
        let dni2 = dni[0] + dni [1] + "." + dni[2] + dni[3] + dni[4] + "." + dni[5] + dni[6] + dni[7];

        console.log("DNI: " + dni2 + "\nNombre y apellido: " + alumno.nombre + " " + alumno.apellido + 
        "\nCurso: " + alumno.anio + "°" + alumno.curso + "\nNota: " + alumno.nota);
    }

    mostrarAlumno(alumnos[1]);

    //Ejercicio 4

    let alumnosUpper = alumnos.map((element) => capitalizar(element.nombre));
    console.log(alumnosUpper)
})