const produto = {
    nome: 'Caneta preta',
    preco: 1.90,
    desconto: 0.05
}

function clone (objeto) {
    return { ... objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Nova caneta'

console.log(novoProduto)