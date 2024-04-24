const Descricao = (props) => {
    //props = {}
    //propriedades => chaves dos valores
    //props.idade = "25"
    
    return <div>
        <p>Seu nome é: {props.nome}</p>
        <p>Sua idade é: {props.idade}</p>
        <p>Seu telefone é: {props.telefone}</p>
        </div>
  
}

export default Descricao