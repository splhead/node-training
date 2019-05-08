const service = require('./services')

async function main() {
    try {
        const result = await service.getCharacter('a')
        
        const characters = []

        console.time('for')
        for( let i = 0; i <= result.results.length - 1; i++) {
            const character = result.results[i]
            characters.push(character.name)
        }
        console.timeEnd('for')

        console.time('forin')
        for( let i in result.results ) {
            const character = result.results[i]
            characters.push(character.name)
        }
        console.timeEnd('forin')

        console.time('forof')
        for( character of result.results ) {
            characters.push(character.name)
        }
        console.timeEnd('forof')

        console.log('characters', characters)
    } catch (error) {
        console.error('Erro interno', error)
    }
}

main()