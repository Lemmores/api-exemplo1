const form = document.getElementById("form")
const cep = document.getElementById("cep")
const rua = document.getElementById("rua")
const cidade = document.getElementById("cidade")
const uf = document.getElementById("uf")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    consultarCep(cep, rua, cidade, uf)
})


/*Usar o fetch aqui*/
function consultarCep(c, r, cd, u) {
    //Garantir apenas os números do cep
    let cValor = c.value.replace(".", "").replace("-", "")
    
    if (cValor != "" || c.cValor != null){
        const p = document.getElementById("cep-invalido")

    
      
    if(validarCep(cValor)){
        cep.className = "form-control is-valid"
        p.style.display = "none"
        
        let url = "https://viacep.com.br/ws/" + cValor + "/json/"
        fetch(url).then(res => {
        return res.json()
        }).then(saida => {
        r.value = saida.logradouro
        cd.value = saida.localidade
        u.value = saida.uf
        })
       

        }else{
        cep.className = "form-control is-invalid"
        p.style.display = "block"
        }
        }
    }


function validarCep(cv) {
    let re = /^[0-9]{8}$/
    return re.test(cv)
}


