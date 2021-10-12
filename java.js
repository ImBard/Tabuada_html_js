// declarando as variaveis
var num = 0
const result = []

// função do botão
function onClick() {
  
  // pegando o valor do input e armazenando na variavel num
  num = document.getElementById('valor').value
  // Checkando se o input está vazio ao preciosar o botão
  console.log('num = ' + num)
  if (num == '') {
    document.getElementById('divLabel').style.display = 'flex' // caso a labels esteja escondida ele irá mostrala
    document.getElementById('divLabel').style.visibility = 'visible'
    //document.getElementById('labels').style.visibility = "visible" // vai tornar a div das labels visible
    document.getElementById('display').innerHTML = 'Digite um número!' // mostrará uma msg pedindo para que um numero seja inserido
    document.getElementById('labels').style.display = 'none'
  } else {
    // Alteração de styles
    
    document.getElementById('divLabel').style.display = 'none' // Se num != '', ele ira esconder a label como a msg 'Digite um numero' 
    document.getElementById('labels').style.visibility = "visible" // Deixara a div das labels visible
    document.getElementById('labels').style.display = "flex" // se a label estiver escondida ele mostrará
    document.getElementById('valor').value = '' // setar o valor do input para vazio 
    // Fazendo os calculos
    for (var i = 1; i < 11; i++) {
      // Colocando o resultado da multiplicação no Array result
      result[i] = num * i
      // Criando as labels usando o 'for' pra automatizar
      var label = document.createElement("label");
      label.setAttribute("id",i)
      labels.appendChild(label);
      label.innerHTML = num + ' x ' + i + ' = ' + result[i]
    }
    result.shift()
    console.log(result)

    // Quando o foco voltar para o input ele ira remover todas as labels criadas
    // Para que quando o botão for clicado novamente ele gere novas labels com valores atualizados
    let input = document.querySelector('input');
    input.onfocus = inputFocus;
    function inputFocus() {
      for (let i = 1; i < 11; i++) {
        document.getElementById(i).remove()
      }
      // Deixando a div das labels hidden novamente 
      document.getElementById('labels').style.visibility = 'hidden'
    }
  }
}
