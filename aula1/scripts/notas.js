function verValores(){
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)
    if ((nota1 <0 || nota1>10 || nota2 <0 || nota2>10 || nota3 <0 || nota3>10)){
      alert('Notas Incorretas')
    }else{
        calcularMedia()
    }
}

function calcularMedia(){
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)

    let media = (nota1+nota2+nota3)/3

    document.querySelector('#media').value = media.toFixed(2)

    if (media >=7 && media <=10){
        document.querySelector('#resultado').innerHTML = "Aprovado"
        document.querySelector('#resultado').classList.add('verde')
    }else if (media >=5 && media <7){
        document.querySelector('#resultado').innerHTML = "Recuperação"
        document.querySelector('#resultado').classList.add('amarelo')
    }else if (media >=0 && media <5){
        document.querySelector('#resultado').innerHTML = "Reprovado"
        document.querySelector('#resultado').classList.add('vermelho')
    }
}

function testarCampo(){
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let nota3 = Number(document.querySelector('#nota3').value)

    if ((nota1 <0 || nota1>10)){
        document.querySelector('#errorNota1').classList.add('vermelho')
        document.querySelector('#errorNota1').innerHTML = "valor incorreto"
    }else{
        document.querySelector('#errorNota1').classList.remove('vermelho', 'verde', "amarelo")
        document.querySelector('#errorNota1').innerHTML = ""
    }
    if (nota2 <0 || nota2>10){
        document.querySelector('#errorNota2').classList.add('vermelho')
        document.querySelector('#errorNota2').innerHTML = "valor incorreto"
    }
    if (nota3 <0 || nota3>10){
        document.querySelector('#errorNota3').classList.add('vermelho')
        document.querySelector('#errorNota3').innerHTML = "valor incorreto"
    }
}

function limpar (){
    document.querySelector('#nota1').value = ""
    document.querySelector('#nota2').value = ""
    document.querySelector('#nota3').value = ""
    document.querySelector('#errorNota1').classList.remove('vermelho', 'verde', "amarelo")
    document.querySelector('#errorNota1').innerHTML = ""
    document.querySelector('#errorNota2').classList.remove('vermelho', 'verde', "amarelo")
    document.querySelector('#errorNota2').innerHTML = ""
    document.querySelector('#errorNota3').classList.remove('vermelho', 'verde', "amarelo")
    document.querySelector('#errorNota3').innerHTML = ""
    document.querySelector('#media').value = ""
    document.querySelector('#resultado').innerHTML = ""
    document.querySelector('#resultado').classList.remove('vermelho', 'verde', "amarelo")
}
