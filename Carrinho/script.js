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
      const total = carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
      const totalElemento = document.getElementById('total');
      totalElemento.textContent = `Total do carrinho: R$${total}`;
    }  

function enviarWats(){
    const carrinhoItens = document.getElementById('carrinho').innerHTML;
    const totalElemento = document.getElementById('total').innerHTML;
    var numeroTel = "554198799999"; /*Lembrar de colocar o nº certo*/
    var linkWhatsApp = "https://wa.me/" + numeroTel + "?text=Produtos: " + carrinhoItens + totalElemento;
    window.open(linkWhatsApp, "_blank");/*Abre o zap em outra janela*/
}

function limpar(){
    document.getElementById('carrinho').innerHTML = '';
    document.getElementById('total').innerHTML = '';
    localStorage.removeItem('carrinho');
}

exibirItensNoCarrinho();
