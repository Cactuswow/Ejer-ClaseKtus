var Arreglo
function Array() {
    Arreglo = [
        {Username: "Bryan", Cod: "192096", TypeUser: "Estudiante"},
        {Username: "Bryan", Cod: "192096", TypeUser: "Estudiante"},
        {Username: "Bryan", Cod: "192096", TypeUser: "Estudiante"}
        
    ]

    console.log(Arreglo);
    let Tiempo = new Date();
    Tiempo = Tiempo.getTime();
    console.log(Tiempo);
} 

function Compara() {
    let Nombre = $("#Wachi").val();

    for(let i = 0; i < Arreglo.length; i++) {
        if(Nombre == Arreglo[i].Username) {
            console.log("Sí hay");
        }
        else {
            console.log("Epa");
        }
    }
}