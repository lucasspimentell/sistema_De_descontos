function calcular() {
    let valor = document.getElementById("val");
    let desconto = document.getElementById("descon");
    let resultado = document.getElementById("res");


    if (valor.value == '') {
        alert("informe um valor");
    } else {
        let des = Number(desconto.value);
        let preco = Number(valor.value);
        let porcento = preco * des / 100;

        resultado.innerHTML = `O produto custa: ${(preco).toLocaleString('pt-br', { style: "currency", currency: 'brl' })}<br> com o desconto de ${des}% <br> o valor vai ser:<strong> <br>💵${(preco - porcento).toLocaleString('pt-br', { style: "currency", currency: 'brl' })}<strong> `

    }


}