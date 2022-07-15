
function calcVlrBruto(num1, num2) {

    return num1 / (1 - (num2 / 100));
}

function calcVlrLiq(num1, num2) {

    return num1 * (1 - (num2 / 100));
}

function calcVlrImp(num1, num2) {

    return num1 - num2;
}

window.onload = function () {
    var objValorBruto = document.getElementById("valor_bruto");
    var objValorLiquido = document.getElementById("valor_liq");
    var objAliquota = document.getElementById("aliquota");
    var objResValorBruto = document.getElementById("res_valor_bruto");
    var objResValorLiq = document.getElementById("res_valor_liq");
    var objResValorImp = document.getElementById("res_valor_imposto");
    var objbotao = document.getElementById("btn_calcular");

    objbotao.onclick = function () {
        var objFloBruto = parseFloat(objValorBruto.value);
        var objFloLiq = parseFloat(objValorLiquido.value);
        var objFloAliquota = parseFloat(objAliquota.value);

        if (isNaN(objFloBruto) || (objFloBruto == 0)) {

            var bruto = calcVlrBruto(objFloLiq, objFloAliquota).toFixed(2);

            objResValorBruto.innerHTML = "Valor Bruto: R$" + bruto;
            objResValorLiq.innerHTML = "Valor Líquido: R$" + objFloLiq.toFixed(2);
            objResValorImp.innerHTML = "Valor de Imposto: R$" + calcVlrImp(bruto, objFloLiq).toFixed(2);

        } else if (isNaN(objFloLiq) || (objFloLiq == 0)) {

            var liquido = calcVlrLiq(objFloBruto, objFloAliquota).toFixed(2);

            objResValorBruto.innerHTML = "Valor Bruto: R$" + objFloBruto.toFixed(2);
            objResValorLiq.innerHTML = "Valor Líquido: R$" + liquido;
            objResValorImp.innerHTML = "Valor de Imposto: R$" + calcVlrImp(objFloBruto, liquido).toFixed(2);

        }
    }
}