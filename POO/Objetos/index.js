//Tarea A: Objetos

const Persona =  {
   
        nombre: "Lucas",
        edad: 29,
        dni: 32654987,
        domicilio: {
            calle: "Falsa",
            numero: 123
        },
        hijos: 4,
        profesion: "Developer",
  

    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    },

    listar(){
        console.group("datos de la persona")

        console.log(`nombre: ${this.nombre}`);
        console.log(`edad: ${this.edad}`);
        console.log(`domicilio: ${this.domicilio.calle} ${this.domicilio.numero}`);
        console.log(`hijos: ${this.hijos}`);
        console.log(`profesion: ${this.profesion}`);

        console.groupEnd()
    }
}

console.log(Persona.saludar());
console.log(Persona.listar());

//Arreglo de Objetos

const movies =[
    {
        titulo: "Rocky",
        Genero: "Drama",
        Año: 1985,
        sinopsis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, unde! Maiores, esse. Commodi fuga non nesciunt placeat sapiente velit doloremque! At commodi nostrum molestias odio, laudantium doloremque doloribus culpa consequatur!"
    },
    {
        titulo: "Star Wars",
        Genero: "Drama",
        Año: 1980,
        sinopsis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, unde! Maiores, esse. Commodi fuga non nesciunt placeat sapiente velit doloremque! At commodi nostrum molestias odio, laudantium doloremque doloribus culpa consequatur!"
    },
    {
        titulo: "Ace Ventura",
        Genero: "Comedia",
        Año: 1985,
        sinopsis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, unde! Maiores, esse. Commodi fuga non nesciunt placeat sapiente velit doloremque! At commodi nostrum molestias odio, laudantium doloremque doloribus culpa consequatur!"
    },
    {
        titulo: "Titanic",
        genero: "Romantica",
        año: 1985,
        sinopsis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, unde! Maiores, esse. Commodi fuga non nesciunt placeat sapiente velit doloremque! At commodi nostrum molestias odio, laudantium doloremque doloribus culpa consequatur!"
    },
]

const ListaDePelis = (lista) => {
    lista.map(peli => {
        console.log(`Titulo: ${peli.titulo}`);
        console.log(`genero: ${peli.genero}`);
        console.log(`Año: ${peli.Año}`);
        console.log(`sinopsis: ${peli.sinopsis}`);
    })
}

console.log(ListaDePelis(movies));