// Dados (Arrays de sabores)
const saboresSimples = ["Trigo", "Laranja", "Milho", "Banana", "Massa de Mandioca", "Macaxeira", "Cenoura (s/ cob)", "Chocolate (s/ cob)"];
const saboresCobertura = ["Chocolate", "Cenoura com Chocolate", "Meio a Meio"];

// Elementos HTML
const selectTipo = document.getElementById('tipoBolo');
const selectSabor = document.getElementById('saborBolo');
const selectTamanho = document.getElementById('tamanhoBolo');
const spanTotal = document.getElementById('valorTotal');
const btnLink = document.getElementById('linkWhatsapp');

// Atualiza os selects quando troca o tipo de bolo
function atualizarOpcoes() {
    const tipo = selectTipo.value;
    
    selectSabor.innerHTML = '';
    selectTamanho.innerHTML = '';

    let listaSabores = [];
    let listaTamanhos = [];

    if (tipo === 'simples') {
        listaSabores = saboresSimples;
        listaTamanhos = [
            { nome: '1kg', preco: 20 },
            { nome: '500g', preco: 12 }
        ];
    } else if (tipo === 'cobertura') {
        listaSabores = saboresCobertura;
        listaTamanhos = [
            { nome: '1kg', preco: 26 },
            { nome: '500g', preco: 16 }
        ];
    } else if (tipo === 'rolo') {
        listaSabores = ['Goiabada'];
        listaTamanhos = [
            { nome: '1kg', preco: 38 },
            { nome: '500g', preco: 19 },
            { nome: '350g', preco: 13.30 }
        ];
    } else if (tipo === 'panetone') {
        listaSabores = ['Frutas', 'Chocolate'];
        listaTamanhos = [
            { nome: 'Unidade', preco: 25 }
        ];
    }

    listaSabores.forEach(function(sabor) {
        let opcao = document.createElement('option');
        opcao.value = sabor;
        opcao.text = sabor;
        selectSabor.appendChild(opcao);
    });

    listaTamanhos.forEach(function(item) {
        let opcao = document.createElement('option');
        opcao.value = item.preco;
        opcao.text = item.nome + " - R$ " + item.preco.toFixed(2);
        selectTamanho.appendChild(opcao);
    });

    calcularTotal();
}

// Calcula preço e gera link
function calcularTotal() {
    let preco = parseFloat(selectTamanho.value);
    
    spanTotal.innerText = "R$ " + preco.toFixed(2).replace('.', ',');

    let boloEscolhido = selectTipo.options[selectTipo.selectedIndex].text;
    let saborEscolhido = selectSabor.value;
    let tamanhoEscolhido = selectTamanho.options[selectTamanho.selectedIndex].text;

    let mensagem = "Olá! Quero encomendar: " + boloEscolhido + 
                   " | Sabor: " + saborEscolhido + 
                   " | Tamanho: " + tamanhoEscolhido;

    // Lembre-se de colocar seu número aqui
    let numero = "558199999999"; 
    let url = "[https://wa.me/](https://wa.me/)" + numero + "?text=" + encodeURIComponent(mensagem);
    
    btnLink.href = url;
}

// Inicia
window.onload = atualizarOpcoes;