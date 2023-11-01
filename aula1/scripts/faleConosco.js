const estadosBrasil = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' }
];

function verOutros() {
    const genero = document.getElementsByName('genero')
    const outros = document.getElementById('outros')

    if (genero[2].checked) {
        outros.disabled = false
    } else {
        outros.disabled = true
    }
}
function verEstados() {
    const naturalidade = document.getElementById('naturalidade')
    const nacionalidade = document.getElementById('nacionalidade')
    if (nacionalidade.value == 'BR') {
        for (let i = 0; i < estadosBrasil.length; i++) {
            let option = document.createElement("option")
            option.textContent = estadosBrasil[i].nome
            option.setAttribute("value", estadosBrasil[i].sigla)
            naturalidade.appendChild(option)
            naturalidade.hidden = false
        }
    } else {
        naturalidade.hidden = true
    }
}
function verSenha() {
    const senha1 = document.getElementById('senha1')
    const senha2 = document.getElementById('senha2')
    const btnSenha = document.getElementById('btnSenha')

    if (senha1.type == 'password' || senha2.type == 'password') {
        senha1.type = "text"
        senha2.type = "text"
        btnSenha.value = 'Ocultar'
    } else {
        senha1.type = "password"
        senha2.type = "password"
        btnSenha.value = 'Ver'
    }
}
function confirmarSenha() {
    const senha1 = document.getElementById('senha1')
    const senha2 = document.getElementById('senha2')
    const senhaIncorreta = document.getElementById('senhaIncorreta')
    if (senha2.value != '') {
        if (senha1.value != senha2.value) {
            senhaIncorreta.innerHTML = 'As senhas não conferem!'
            senha1.classList.add('bordaVermelha')
            senha2.classList.add('bordaVermelha')
        } else {
            senhaIncorreta.innerHTML = ''
            senha1.classList.remove('bordaVermelha')
            senha2.classList.remove('bordaVermelha')
        }
    }
}
function confirmarCep(){
    const cep = document.getElementById('cep').value

    if (cep == ''){
        alert ('Cep Vazio')
    }else if (cep.length != 8){
        alert ('Cep Inválido')
    }else{
        viaCep(cep)
    }
}
function viaCep (cep){
    fetch ('https://viacep.com.br/ws/' + cep + '/json/')
    .then(response => response.json())
    .then(response => {
        document.getElementById('logradouro').value = response.logradouro
        document.getElementById('bairro').value = response.bairro
        })
}