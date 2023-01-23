const form = document.getElementById("form")
const nome = document.getElementById("nome")
const ultimonome = document.getElementById("ultimonome")
const email = document.getElementById("e-mail")
const senha = document.getElementById("senha")
const endereco = document.getElementById("endereco")
const numero = document.getElementById("numero")
const uf = document.getElementById("uf")
const cidade = document.getElementById("cidade")
const bairro = document.getElementById("bairro")


form.addEventListener("submit", (e) => {
    e.preventDefault()
})


/*Usar o fetch aqui*/
function consultarCep(n, u, e, s, en, num) {
  
    if (nValor != "" || n.cValor != null){
        const p = document.getElementById("invalido")
    }
    if (uValor != "" || u.cValor != null){
        const p = document.getElementById("invalido")
    }
    if (eValor != "" || e.cValor != null){
        const p = document.getElementById("invalido")
    }
    if (sValor != "" || s.cValor != null){
        const p = document.getElementById("invalido")
    }
    if (enValor != "" || en.cValor != null){
        const p = document.getElementById("invalido")
    }
    if (numValor != "" || num.cValor != null){
        const p = document.getElementById("invalido")
    }else{
    cep.className = "form-control is-invalid"
    p.style.display = "block"
    }
    
        
        let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" 

        fetch(url).then(res => {
        return res.json()
        }).then(saida => {
        uf.value = saida.sigla
        })
    }


    
    
    



