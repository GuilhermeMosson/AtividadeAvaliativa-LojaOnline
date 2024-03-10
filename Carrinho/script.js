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
    let mensagem = 'Produtos no carrinho: \n';
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const total = document.getElementById('total').innerHTML;

    var registro  = new Date();
    var dt = formatarData(registro);

    carrinhoItens.forEach(item =>  {
        mensagem += `${item.nome} - R$${item.preco} | `;
    });

    mensagem += `${total} | Pedido feito em ${dt}`;
        
    var numeroTel = "5541999999999"; /*Lembrar de colocar o nº certo*/
    var linkWhatsApp = "https://wa.me/" + numeroTel + "?text=" + mensagem;
    window.open(linkWhatsApp, "_blank");/*Abre o zap em outra janela*/;
}

function limpar(){
    document.getElementById('carrinho').innerHTML = '';
    document.getElementById('total').innerHTML = '';
    localStorage.removeItem('carrinho');
}

function formatarData(item){
    var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    return item.toLocaleString("pt-BR", options)
}

exibirItensNoCarrinho();
