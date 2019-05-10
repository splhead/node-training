const {
    deepEqual,
    ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    id: 1,
    nome: 'Flash',
    poder: 'Speed'
}

describe('Suite de manipulação de Heróis', () => {
    it('deve pesquisar um herói usando arquivos', async () => {
        const expected  = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })

    it('deve cadastrar um herói, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(actual, expected)
    })
})