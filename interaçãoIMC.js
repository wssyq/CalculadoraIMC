function calcularIMC(){
    const valorPeso = parseFloat(document.getElementById("peso").value);
    const valorAltura = parseFloat(document.getElementById("altura").value);
    
    if (!valorPeso || !valorAltura) {
        document.getElementById("resultado").textContent = "Preencha peso e altura corretamente.";
        document.getElementById("classi").innerText = "";
        return;
    }

    const valorIMC = Math.round(valorPeso / (valorAltura * valorAltura));
    let classificacao = "";

    if (valorIMC < 18) {
    classificacao = "Abaixo do peso";
} else if (valorIMC < 25) {
    classificacao = "Peso normal";
} else if (valorIMC < 30) {
    classificacao = "Sobrepeso";
} else if (valorIMC < 40) {
    classificacao = "Obesidade";
} else {
    classificacao = "Obesidade grave";
}


    document.getElementById("resultado").textContent = "IMC: " + valorIMC
    document.getElementById("classi").innerText = `Classificação: ${classificacao}`;
}
