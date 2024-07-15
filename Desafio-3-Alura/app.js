// 01) ----------------------

function imc()
{
    let altura = prompt('Informe Sua altura');
    let peso = prompt('Informe Seu peso');
   
    let imc= peso / (altura*altura);

    alert(`Meu IMC é: ${imc}`);
    console.log(`Meu IMC é: ${imc}`);
}

// 02) ----------------------

function fatorial()
{
    let numero = prompt('Informe um numero');

    for (var a = numero - 1; a >= 1; a--) 
    {
        numero = numero*a;
    }
    alert(`O fatorial deste numero é: ${numero}`);
    console.log(`O fatorial deste numero é: ${numero}`);
}

// 03) ----------------------

function conversao()
{
    let CotaçãoDolar = '4.80';
    let valorDolar = prompt('Informe um valor de dolar para a conversão em Reais');

    let valorReais = valorDolar*CotaçãoDolar;

    alert(`O valor em reais é: ${valorReais}`);
    console.log(`O valor em reais é: ${valorReais}`);
}

// 04) ----------------------

function salaRetangular()
{
    let largura = prompt('Informe a largura do perímetro');
    let altura = prompt('Informe a altura do perímetro');

    let area = largura*altura;
    let perimetro = 2* (largura*altura);

    alert(`a área é: ${area} e o perímetro é ${perimetro}`);
    console.log(`a área é: ${area} e o perímetro é ${perimetro}`);
}

// 05) ----------------------

function salaCircular()
{
    let raio = prompt('Informe o raio');
    let pi = '3.14';

    let area = raio*raio*pi;
    let perimetro = 2*pi*raio;

    alert(`a área é: ${area} e o perímetro é ${perimetro}`);
    console.log(`a área é: ${area} e o perímetro é ${perimetro}`);
}

// 06) ----------------------

function tabuada()
{
    let numero = parseInt(prompt('Informe um número para multiplicação:'));

    if (numero >= 1 && numero <= 10) 
    { 
        let alerta = '';
        for (let a = 1; a <= 10; a++) 
        {
            let resultado = numero * a;

            console.log(`${numero} x ${a} = ${resultado}`);
            alerta += `${numero} x ${a} = ${resultado}\n`;
        }
        
        alert(alerta);
    }
}

