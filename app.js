let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemIncial()
{
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemIncial();

function verificarChute()
{
    let chute = document.querySelector('input').value;
    if(chute==numeroSecreto)
    {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(chute > numeroSecreto)
        {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else
        {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        //tentativas=tentativas+1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio()
{
    return parseInt(Math.random()*10+1);
}
function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disable',true);
}

