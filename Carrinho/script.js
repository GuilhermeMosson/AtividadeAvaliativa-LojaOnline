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

function confirmarDados(){
    document.getElementById('idInput').style.display='flex';
}

function enviarWats(){
    var nome = document.getElementById('floatingName').value;
    var endereco = document.getElementById('floatingAdress').value;

    if(!nome || !endereco){
        alert('Preencha todas as lacunas corretamente para continuar!!');
        document.getElementById('floatingName').style.border = '2px solid lightpink';
        document.getElementById('floatingAdress').style.border = '2px solid lightpink';
        return;
    }

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
    var linkWhatsApp = "https://wa.me/" + numeroTel + "?text=" + "Pedido de " + nome + ": " + mensagem + " | Será entregue em " + endereco;
    window.open(linkWhatsApp, "_blank");/*Abre o zap em outra janela*/;

    document.getElementById('idInput').style.display='none';
}

function fechar(){
    document.getElementById("idInput").style.display='none';
    document.getElementById('floatingName').value = '';
    document.getElementById('floatingAdress').value = '';
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
    }

    return item.toLocaleString("pt-BR", options)
}

exibirItensNoCarrinho();
