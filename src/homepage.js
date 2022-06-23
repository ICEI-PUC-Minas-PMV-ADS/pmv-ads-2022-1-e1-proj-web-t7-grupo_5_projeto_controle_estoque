function adicionarItem() {
    produto_digitado = document.getElementById('nome_do_produto').value
    preco_digitado = document.getElementById('preco_do_produto').value
    data_produto = document.getElementById('data')
    hora_produto = document.getElementById('hora')
    if (produto_digitado.length > 0 && preco_digitado.length > 0){
        
    var tabela = document.getElementById('estoque')
    var nova_linha = tabela.insertRow(0)
    var nova_celula_prod = nova_linha.insertCell(0)
    var nova_celula_preco = nova_linha.insertCell(1)
    var nova_celula_data = nova_linha.insertCell(2)
    var nova_celula_hora = nova_linha.insertCell(3)

    let data = new Date()
    let data_produto = (adicionarZero(data.getDate())) + "/" + (adicionarZero(data.getMonth() + 1)) + "/" + (adicionarZero(data.getFullYear())); 
    let hora = new Date()
    let hora_produto = (adicionarZero(hora.getHours())) + ":" + (adicionarZero(hora.getMinutes())) + ":" + (adicionarZero(hora.getSeconds()));

    nova_celula_prod.innerHTML = produto_digitado
    nova_celula_preco.innerHTML = preco_digitado
    nova_celula_data.innerHTML = data_produto
    nova_celula_hora.innerHTML = hora_produto
    
    document.getElementById('nome_do_produto').value = ''
    document.getElementById('preco_do_produto').value = ''
    }
    // função para adicionar o zero na data e hora
    function adicionarZero(numero){
      if(numero <= 9)
         return "0" + numero;
      else
         return numero;   
    }
    
 
}

function removerItem() {
    var tabela = document.getElementById('estoque').deleteRow(0)
}




$(function() {
  $(".exportToExcel").click(function(e){
    var table = $(this).prev('.table2excel');
    if(table && table.length){
      var preserveColors = (table.hasClass('table2excel_with_colors') ? true : false);
      $(table).table2excel({
        exclude: ".noExl",
        name: "Excel Document Name",
        filename: "estoque" + "_" + new Date().toISOString() + ".xls",
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: preserveColors
      });
    }
  });
});



//Emissão nota fiscal

var tabela_nf = document.querySelector('table') //pega a tabela do estoque atualizada
//a linha abaixo a transforma num array, que é uma coleção javascript pra armazenar informações
var array_nf = [...tabela_nf.rows].map(x => [...x.querySelectorAll('td, th')].map(td => td.textContent))
array_nf.shift() //apaga o título da tabela, pois não vamos precisar disso
var tamanho_array = array_nf.length //verifica o tamanho do array 
lista = [] //variável vazia pra armazenar números aleatórios
for(x = 0; x < tamanho_array; x++){ //gera 1 número aleatório por ciclo. A qtd de ciclos é dada pelo tamanho do array
  numero_aleatorio = [Math.floor(Math.random() *65536)] //gera números aleatórios pra nf
  lista.push(numero_aleatorio) //coloca os números aleatórios na variável lista
  lista = lista.flat() //transforma um nested array num array plano
  }

var tab = document.getElementById('tabela')
var linhas = tab.getElementsByTagName('tr')

for(var x = 0; x < linhas.length; x++) {
   var linha = linhas[x]
   linha.addEventListener('click', function(){
     selecionar_linha(this, false)
   });
}

function selecionar_linha(linha, multiplas) {
  if(!multiplas) {
    var linhas = linha.parentElement.getElementsByTagName('tr');
    for(var x = 0; x < linhas.length; x++){
      var linha_dois = linhas[x];
      linha_dois.classList.remove('selecionado');
    }
  }
  linha.classList.toggle('selecionado')
}

var gerar_nota = document.getElementById('emitir_nf');
gerar_nota.addEventListener('click', function(){
  var selecionados = tab.getElementsByClassName('selecionado');
  if(selecionados.length < 1){
    alert('Selecione 1 linha, pelo menos');
    return false;
  }

  for(var x= 0; x < selecionados.length; x++) {
    var selecionado = selecionados[x];
    selecionado = selecionado.getElementsByTagName('td');
    document.write('Nota fiscal ---' + '<br>' + selecionado[0].textContent + '<br>' +  'Valor: ' + selecionado[1].textContent)
    window.print()
    window.location.href='homepage.html'
  }
  });



// ICONES
feather.replace()