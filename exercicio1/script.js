const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//part I
function propToupper(obj) {
    for (let i in obj) {
        console.log("chave", i);
        console.log("Valor", obj[i]);

    }
    return obj
}
console.log(propToupper(objeto))


//part II
function showValues(obj) {
    let text = "";
    for (let i in obj) {
        text += `${obj[i]}`;
    }
    return text.trim();
}
console.log(showValues(objeto))

//part III
function objectToCallback(obj, func) {
    console.log(func(obj));
}
