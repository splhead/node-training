const service = require('./services')

// how map function works
Array.prototype.myMap = function (callback) {
    const newArray = []
    for(let index = 0; index <= this.length - 1; index++) {
        const result = callback(this[index], index)
        newArray.push(result)
    }

    // for( index in this ) {
    //     const result = callback(this[index], index)
    //     newArray.push(result)
    // }

//     characteres [ '[0] Luke Skywalker',
//   '[1] Darth Vader',
//   '[2] Leia Organa',
//   '[3] Owen Lars',
//   '[4] Beru Whitesun lars',
//   '[5] Biggs Darklighter',
//   '[6] Obi-Wan Kenobi',
//   '[7] Anakin Skywalker',
//   '[8] Wilhuff Tarkin',
//   '[9] Chewbacca',
//   '[myMap] ' ]

    return newArray
}

async function main() {
    try {
        const results = await service.getCharacter('a')

        // const characters = []

        // results.results.forEach((character) => {
        //     characters.push(character.name)
        // })

        // const characters = results.results.map( (character) => character.name )

        const characters = results.results.myMap( (character, index) => `[${index}] ${character.name}` )
        console.log('characteres', characters)
    } catch (error) {
        console.error('Erro interno', error)
    }
}

main()