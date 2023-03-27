export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    email: String;
    telefono: String;
    descripcion: String;

    constructor(nombre: String,apellido: String, img: String, email: String, telefono: String, descripcion: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.email = email;
        this.telefono = telefono;
        this.descripcion = descripcion;
    }
}