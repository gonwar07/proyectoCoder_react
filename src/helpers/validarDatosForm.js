import Swal from "sweetalert2"


export const validarDatosForm = (values) => {

    if (values.nombre.length < 4){
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido'
        })
        return false
    }
    
    if (values.apellido.length < 4){
        Swal.fire({
            icon: 'error',
            title: 'Apellido inválido'
        })
        return false
    }

    if (values.email.length < 7){
        Swal.fire({
            icon: 'error',
            title: 'Email inválido'
        })
        return false
    }

    
    if(values.msj.length < 5){
        Swal.fire({
            icon: 'info',
            title: 'Tu mensaje es demasiado corto'
        })
        return false
    }

    Swal.fire({
        icon: 'success',
        title: 'Tu mensaje fue enviado con éxito!'
    })
    return true
}