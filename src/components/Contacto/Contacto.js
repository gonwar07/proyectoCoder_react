import React, { useState } from 'react'
import { validarDatosForm } from '../../helpers/validarDatosForm'
import './contacto.scss'

export const Contacto = () =>{

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        msj: ''
    })

    const handleInputChange = (e) =>{
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        if (validarDatosForm(values)) {
            setTimeout(() => {
                window.location.reload(false)
              }, 3000);
        }
    }

    return(
        <div className='contacto'>
            <h2>Dejanos tu mensaje!</h2>
            <form className='formulario container my-5' onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    name="nombre"
                    value={values.nombre}
                    className='inputs form-control my-3'
                    type= "text"
                    placeholder='Indica tu nombre'            
                />

                <input
                    onChange={handleInputChange}
                    name="apellido"
                    value={values.apellido}
                    className='inputs form-control my-3'
                    type= "text"
                    placeholder='Indica tu apellido'            
                />

                <input
                    onChange={handleInputChange}
                    name="email"
                    value={values.email}
                    className='inputs form-control my-3'
                    type= "email"
                    placeholder='Indica tu email'            
                />

                <input
                    onChange={handleInputChange}
                    name="msj"
                    value={values.msj}
                    className='inputs placeHolder form-control my-3'
                    type= "textarea"
                    placeholder='Dejanos tu mensaje!'            
                />

                <button type='submit' className='btn btn-dark'>Enviar</button>

            </form>
        </div>
    )
}