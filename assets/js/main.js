
window.onload = function () {
    var objValorLiquido = document.getElementById("valor_liq");
    var objAliquota = document.getElementById("aliquota");
    var objResValorBruto = document.getElementById("res_valor_bruto");
    var objbotao = document.getElementById("btn_calcular");

    objbotao.onclick = function () {
        var objFloLiq = parseFloat(objValorLiquido.value);
        var objFloAliquota = parseFloat(objAliquota.value);

        console.log(objFloLiq);
        console.log(objFloAliquota);

        var objValorBruto = objFloLiq / (1 - (objFloAliquota / 100))

        objResValorBruto.innerHTML = "O Valor Bruto da nota é de " + objValorBruto;
        console.log("O valor bruto da nota é de " + objValorBruto);

    }
}