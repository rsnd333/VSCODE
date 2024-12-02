const form = document.getElementById("form-agenda");
const nomes = [];
const contato = [];
const spanAdicionado = '<span class= "adicionado">Contato adicionado</span>' ;

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
    atualizaCadastro();
});

function adicionaLinha(){

    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (nomes.includes(inputNomeContato.value)){
        alert (`O contato ${inputNomeContato.value} ja foi inserido`);
    }else{

        nomes.push(inputNomeContato.value);
        contato.push(parseFloat(inputNumeroContato.value));
    
        let linha = "<tr>";
    
        linha += `<td>${inputNomeContato.value} </td>`;
        linha += `<td>${inputNumeroContato.value} </td>`;
        linha += `</tr>`;
    
        linhas += linha;
    
    }

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
};

function atualizaAgenda(){

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaCadastro(){

    console.log(nomes);
    console.log(contato);

}