

export const btnConfig = (cantidad, max, restarProd, sumarProd) => {
    return{
        restar: {
            className: `btn ${cantidad === 1 ? 'btn-danger' : 'btn-dark'}`,
            onClick: restarProd,
            disable: cantidad === 1
        },
        
        sumar: {
            className: `btn ${cantidad === max ? 'btn-danger' : 'btn-dark'}`,
            onClick: sumarProd,
            disable: cantidad === max
        }
    }
}