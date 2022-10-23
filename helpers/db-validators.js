
const Guatemala = require('../models/guatemala');


const CodigoExiste = async( codigo = '' ) => {

    // Verificar si el correo existe
    const existe = await Guatemala.findOne({ codigo });
    if ( existe ) {
        throw new Error(`El codigo: ${ codigo }, ya está registrado`);
    }
}

module.exports = {
    CodigoExiste
}

