function VerificaSeOChutePossuiUmValorValido(chute) {

    const numero = +chute

    if (ChuteForInvalido(numero)) {

        elementoChute.innerHTML += '<div>Valor Inválido</div>'

    };

    if (NumeroForMaiorOuMenorQueOValorPermitido(numero)) {

        elementoChute.innerHTML += `
        <div>
        Valor Inválido:Fale um número entre ${menorValor} e ${maiorValor}
        </div>
        `

    };

    if (numero === numeroSecreto) {

        document.body.innerHTML = `
        
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `

    } else if (numero > numeroSecreto) {

        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `

    } else {

        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `

    }

};

function ChuteForInvalido(numero) {

    return Number.isNaN(numero)

};

function NumeroForMaiorOuMenorQueOValorPermitido(numero) {

    return numero > maiorValor || numero < menorValor

};

document.body.addEventListener('click', e =>{

    if (e.target.id == 'jogar-novamente') {

        window.location.reload()

    }

})