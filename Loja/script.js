function irCarrinho(nome, preco) {
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoItens.push({ nome, preco }); 
    // Armazena os itens atualizados de volta no armazenamento local
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
    alert("Seu item já foi adicionado ao carrinho! Olhe seu carrinho para ver seus itens!!")
}
