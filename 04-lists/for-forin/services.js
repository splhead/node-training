const axios = require('axios')
const URL = 'https://swapi.co/api/people'

async function getCharacter(name) {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    return response.data
    // console.log('data', response.data)
}

// getCharacter('r2')
//     .then((resultado) => {
//         console.log('resultado', resultado.results[0].name)
//     })
//     .catch((error) => {
//         console.error('Deu ruim', error)
//     })

module.exports = {
    getCharacter
}