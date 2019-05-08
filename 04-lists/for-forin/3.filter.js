const { getCharacter } = require('./services')

/*
destructing technique
======================

const item = {
    name: 'Jonh Doe',
    age: 17
}

const { name, idade } = item
console.log( name, idade )

*/

Array.prototype.myFilter = function (callback) {
    const list = []
    for( index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if(!result) continue;
        list.push(item)
    }
    return list
}

async function main() {
    try {
        const { 
            results
        } = await getCharacter('a')

        // const larsFamilys =  results.filter( (character) => {
        //     // need to return a boolean in default
        //     // to inform if has to mantain in array
        //     // false => remove from array
        //     // true => keep in array
        //     // not found = -1
        //     // found = array position

        //     return character.name.toLowerCase().indexOf('lars') !== -1
        // })

        const larsFamilys = results.myFilter( (item, index, list) => {
            console.log( `Index: ${index}, ${list.length} `)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const characters = larsFamilys.map( (character) => character.name )

        console.log('characters', characters)

    } catch (error) {
        console.error('Deu ruim', error)
    }
}

main()