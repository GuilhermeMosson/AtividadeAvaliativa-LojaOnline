function exibirItensNoCarrinho() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinho = document.getElementById("carrinho");
    // Limpa o conteúdo atual do carrinho
    carrinho.innerHTML = '';
    // Adiciona os itens do carrinho ao elemento 'carrinho'
    carrinhoItens.forEach(item => {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${item.nome}  -  R$${item.preco}`;
        carrinho.appendChild(novoItem);
      });
    }  

function calculartotal(){
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const total = carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
    const totalElemento = document.getElementById('total');
    totalElemento.textContent = `Total do carrinho R$${total}`;
}

function limpar(){
    document.getElementById('carrinho').innerHTML = '';
    document.getElementById('total').innerHTML = '';
    localStorage.removeItem('carrinho');
}

exibirItensNoCarrinho();
