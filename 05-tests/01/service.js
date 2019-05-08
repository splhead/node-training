const {
    get
} = require('axios')

const URL = `https://swapi.co/api/people`

async function getPeople(name) {
    const url = `${URL}/?search=${name}&format=json`
    const result = await get(url)
    // console.log(JSON.stringify(result.data))
    return result.data.results.map(peopleMap)
}

function peopleMap(people) {
    return {
        nome: people.name,
        peso: people.height
    }
}

module.exports = {
    getPeople
}