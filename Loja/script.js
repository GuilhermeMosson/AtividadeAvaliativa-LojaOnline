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

function enviarMsg(){
    nome = document.getElementById('exampleFormControlInput1').value;
    msg = document.getElementById('exampleFormControlTextarea1').value;
    var registro  = new Date();
    var dt = formatarData(registro);

    if(!nome || !msg){
        alert('Escreva uma mensagem para continuar');
        document.getElementById('exampleFormControlInput1').style.border = '2px solid lightpink';
        document.getElementById('exampleFormControlTextarea1').style.border = '2px solid lightpink';
        return;
    }

    var numeroTel = "5541999999999"; /*Lembrar de colocar o nº certo*/
    var linkWhatsApp = "https://wa.me/" + numeroTel + "?text=" + "Nome: " + nome + " Mensagem: " + msg + " | Mensagem envida em " + dt;
    window.open(linkWhatsApp, "_blank");
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