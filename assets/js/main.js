
function calcVlrBruto(num1, num2) {

    return num1 / (1 - (num2 / 100));
}

function calcVlrLiq(num1, num2) {

    return num1 * (1 - (num2 / 100));
}

function calcVlrImp(num1, num2) {

    return num1 - num2;
}

function tributos(num1, num2) {

    return num1 * num2
}

window.onload = function () {
    var objValorBruto = document.getElementById("valor_bruto");
    var objValorLiquido = document.getElementById("valor_liq");
    var objAliquota = document.getElementById("aliquota");
    var objResValorBruto = document.getElementById("res_valor_bruto");
    var objResValorLiq = document.getElementById("res_valor_liq");
    var objResValorImp = document.getElementById("res_valor_imposto");
    var objResIRRF = document.getElementById("res_irrf");
    var objResCSLL = document.getElementById("res_csll");
    var objResPIS = document.getElementById("res_pis");
    var objResCOFINS = document.getElementById("res_cofins");
    var objbotao = document.getElementById("btn_calcular");

    var irrf = 0.015
    var csll = 0.01
    var pis = 0.0065
    var cofins = 0.03

    objbotao.onclick = function () {
        var objFloBruto = parseFloat(objValorBruto.value);
        var objFloLiq = parseFloat(objValorLiquido.value);
        var objFloAliquota = parseFloat(objAliquota.value);

        if (isNaN(objFloBruto) || (objFloBruto == 0)) {

            var bruto = calcVlrBruto(objFloLiq, objFloAliquota).toFixed(2);

            objResValorBruto.innerHTML = "Valor Bruto: R$" + bruto;
            objResValorLiq.innerHTML = "Valor Líquido: R$" + objFloLiq.toFixed(2);
            objResValorImp.innerHTML = "Valor de Imposto: R$" + calcVlrImp(bruto, objFloLiq).toFixed(2);
            objResIRRF.innerHTML = "IRRF: R$" + tributos(bruto, irrf).toFixed(2);
            objResCSLL.innerHTML = "CSLL: R$" + tributos(bruto, csll).toFixed(2);
            objResPIS.innerHTML = "PIS/PASEP: R$" + tributos(bruto, pis).toFixed(2);
            objResCOFINS.innerHTML = "COFINS: R$" + tributos(bruto, cofins).toFixed(2);

        } else if (isNaN(objFloLiq) || (objFloLiq == 0)) {

            var liquido = calcVlrLiq(objFloBruto, objFloAliquota).toFixed(2);

            objResValorBruto.innerHTML = "Valor Bruto: R$" + objFloBruto.toFixed(2);
            objResValorLiq.innerHTML = "Valor Líquido: R$" + liquido;
            objResValorImp.innerHTML = "Valor de Imposto: R$" + calcVlrImp(objFloBruto, liquido).toFixed(2);
            objResIRRF.innerHTML = "IRRF: R$" + tributos(objFloBruto, irrf).toFixed(2);
            objResCSLL.innerHTML = "CSLL: R$" + tributos(objFloBruto, csll).toFixed(2);
            objResPIS.innerHTML = "PIS/PASEP: R$" + tributos(objFloBruto, pis).toFixed(2);
            objResCOFINS.innerHTML = "COFINS: R$" + tributos(objFloBruto, cofins).toFixed(2);


        }
    }
}