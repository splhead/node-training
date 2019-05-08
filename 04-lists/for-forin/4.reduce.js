const { 
    getCharacter
} = require('./services')

Array.prototype.myReduce = function(callback, intialValue) {
    let finalValue = typeof intialValue !== undefined ? intialValue : this[0]

    for( let index = 0; index <= this.length - 1; index++ ) {
        finalValue = callback(finalValue, this[index], this)
    }

    return finalValue
}

async function main() {
    try {
        const {
            results
        } = await getCharacter('a')

        const heights = results.map( (character) => parseInt(character.height) )
        console.log('heights', heights)
        // [20.2, 30.5, 42.3] = total

        // const total = heights.reduce( (previous, next) => {
        //     return previous + next
        // }, 0)

        // const total = heights.myReduce( (previous, next) => previous + next, 0 )

        const myList = [
            [ 'Deborah', 'Bruna'],
            [ 'NodeBR', 'Nerdzão']
        ]

        const total = myList.myReduce( (previous, next) => {
            return previous.concat(next)
        }, [])
        .join(', ')

        console.log('total', total)
    } catch (error) {
        console.error('Deu rum', error)
    }
}

main()