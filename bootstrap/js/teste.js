function preencheArray(tamanho) {

    var array = [];

    for (var i = 0; i < tamanho; i++) {
        var numero = Math.floor(Math.random() * 60);
        array[i] = numero;
    }
    return array;
}
console.log(preencheArray(10));