//1

//2

let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do desafio';

//3

function verificarMensagem()
{
    console.log('O botão foi clicado');
}

//4

function verificarAlerta()
{
    alert('Eu amo JS');
}

//5

function verificarPrompt()
{
    let cidade='Rio de Janeiro';
    alert(`Estive em ${cidade} e lembrei de você`);
}

//6

function verificarSoma()
{
    let valor1 = parseInt(prompt ('Informe o valor 1'));
    let valor2 = parseInt(prompt ('Informe o valor 2'));
    let resultado = valor1+valor2;
    alert(`O resultado de ${valor1}+${valor2} e: ${resultado}`);
}
