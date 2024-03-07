function irCarrinho(nome, preco){
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoItens.push = ({nome, preco});
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
    console.log(nome, preco)
}

function exibirItensNoCarrinho() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinho = document.getElementById("carrinho");
    // Limpa o conteúdo atual do carrinho
    carrinho.innerHTML = '';
    // Adiciona os itens do carrinho ao elemento 'carrinho'
    carrinhoItens.forEach(item => {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${item.nome} - ${item.preco}`;
        carrinho.appendChild(novoItem);
      });
    }  

function calculartotal(){
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const total = carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
    const totalElemento = document.getElementById('total');
    totalElemento.textContent = `R$${total}`;
}

function limpar(){
    document.getElementById('carrinho').innerHTML = '';
    document.getElementById('total').innerHTML = '';
    localStorage.removeItem('carrinho');
}

exibirItensNoCarrinho();
