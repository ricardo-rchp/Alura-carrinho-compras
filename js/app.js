let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    console.log(quantidade);

    if (!(quantidade > 0)){
        alert('Quantidade inválida');
        return;
    }

    let nomeProduto = produto.split(' -')[0];
    let valorUnitario = parseFloat(produto.split('$')[1]);

    // calcular o preço, o nosso subtotal 
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho 
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">\n<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>\n</section>`;
    
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral},00`;

    // Limpando o campo quantidade
    document.getElementById('quantidade').value = ''; 
}
    
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00'; 
    document.getElementById('quantidade').outerHTML = '<input class="quantidade-input" id="quantidade" type="number" placeholder="0">';   
}
    