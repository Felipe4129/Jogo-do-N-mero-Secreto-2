// 01) ----------------------

function OlaMundo()
{
    console.log('Olá mundo!');
    alert('Olá mundo!');
}

// 02) ----------------------

function nome()
{
    let nome = 'Felipe';
    console.log(`Olá, ${nome}`);
    alert(`Olá, ${nome}`);
}

// 03) ----------------------

function numero()
{
    let valor1 = parseInt(prompt('Informe o valor:'));
    let resultado = valor1*2;
    alert(`O dobro do valor de ${valor1} é: ${resultado}`);
    console.log(`O dobro do valor de ${valor1} é: ${resultado}`);
}

// 04) ----------------------
function media()
{
    let valor1 = parseInt(prompt('Informe o valor 1:'));
    let valor2 = parseInt(prompt('Informe o valor 2:'));
    let valor3 = parseInt(prompt('Informe o valor 3:'));
    
    let resultado = (valor1+valor2+valor3)/3;
    
    alert(`A média desses valores é: ${resultado}`);
    console.log(`A média desses valores é: ${resultado}`);
}

// 05) ----------------------

function valorMaior()
{
    let valor1 = parseInt(prompt('Informe o valor 1:'));
    let valor2 = parseInt(prompt('Informe o valor 2:'));
    
    if (valor1>valor2)
    {
        alert(`O maior valor é: ${valor1}`);
        console.log(`O maior valor é: ${valor1}`);
    }
    else
    {
        alert(`O maior valor é: ${valor2}`);
        console.log(`O maior valor é: ${valor2}`);
    }

}

// 06) ----------------------

function multiplicacao()
{
    let valor = parseInt(prompt('Informe um valor:'));
    resultado = valor*valor;
    alert(`O resultado da multiplicação desse valor por ele mesmo é: ${resultado}`);
    console.log(`O resultado da multiplicação desse valor por ele mesmo é: ${resultado}`);
}