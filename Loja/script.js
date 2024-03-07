function irCarrinho(nome, preco) {
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoItens.push({ nome, preco }); 
    // Armazena os itens atualizados de volta no armazenamento local
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
    show();
}

function show(){
    document.getElementById('idMsg').style.display="flex";
}

function fechar(){
    document.getElementById("idMsg").style.display="none"
}