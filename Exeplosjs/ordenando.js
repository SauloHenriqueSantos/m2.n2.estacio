  var swap = (vetor, pos1, pos2) => {  //função SWAP
    var temp = vetor[pos1]
    vetor[pos1] = vetor[pos2]
    vetor[pos2] = temp
    return vetor
  }
  
  
  var shuffle = (vetor, quant) => { // função shuffle
    for (let i = 0; i < quant; i++) {
      const pos1 = Math.floor(Math.random() * vetor.length)
      const pos2 = Math.floor(Math.random() * vetor.length)
      const temp = vetor[pos1]
      vetor[pos1] = vetor[pos2]
      vetor[pos2] = temp
    }
    return vetor
  }
  
  
  var bubble_sort = (vetor) => {// função bubble_sort
    var tamanho = vetor.length
    for (let i = 0; i < tamanho - 1; i++) {
      for (let j = 0; j < tamanho - i - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
          var temp = vetor[j]
          vetor[j] = vetor[j + 1]
          vetor[j + 1] = temp
        }
      }
    }
    return vetor
  }
  
  
  var selection_sort = (vetor) => {// função selection sort
    var tamanho = vetor.length
    for (let i = 0; i < tamanho - 1; i++) {
      let indiceMenor = i
      for (let j = i + 1; j < tamanho; j++) {
        if (vetor[j] < vetor[indiceMenor]) {
          indiceMenor = j
        }
      }
      if (indiceMenor !== i) {
        var temp = vetor[i]
        vetor[i] = vetor[indiceMenor]
        vetor[indiceMenor] = temp
      }
    }
    return vetor
  }
  
  
  var quick_sort = (vetor, start = 0, end = vetor.length - 1) => {
    if (start == undefined) {
      start = 0
    }
    if (end == undefined) {
      end = vetor.length - 1
    }
    if (start >= end) {
      return
    }
    
    var index = particionamento(vetor, start, end)
    
    quick_sort(vetor, start, index - 1)
    quick_sort(vetor, index + 1, end)
  }
  
  
  var particionamento = (vetor, start, end) => {
    var pivotValue = vetor[end]
    let pivotIndex = start
    for (let i = start; i < end; i++) {
      if (vetor[i] < pivotValue) {
        swap(vetor, i, pivotIndex)
        pivotIndex++
      }
    }
    swap(vetor, pivotIndex, end)
    return pivotIndex
  }
  
  
  var valores = []
  function add() {
    var input = document.getElementById('valor')
    var valor = Number(input.value)
    var lista = document.getElementById('valores') 
    var node = document.createElement('li')
    var textNode = document.createTextNode(valor) 
    node.appendChild(textNode)
    lista.appendChild(node)
    valores.push(parseInt(valor))
  }
  
  
  function limpar() {
    var listaValores = document.getElementById('valores');
    listaValores.innerHTML = '';
  
    var input = document.getElementById('valor');
    input.value = '';
  }
  
  
  function ordenar() {
    var lista = document.getElementById('valores')
    var selects = document.getElementById('selects')
    var vetor = Array.from(lista.children).map(function(item) {
      return parseInt(item.innerHTML)
    })
    const algoritmo = selects.options[selects.selectedIndex].value
  
    var start = 0;
    var end = vetor.length - 1
  
    switch (algoritmo) {
      case 'bubble_sort':
        bubble_sort(vetor)
        break;
      case 'selection':
        selection_sort(vetor)
        break;
      case 'quick_sort':
        quick_sort(vetor, start, end)
        break;
    }
  
    var novosItens = vetor.map(function(item) {
      return `<li>${item}</li>`
    }).reduce(function(acumulador, item) {
      return acumulador + item
    }, '');
    lista.innerHTML = novosItens;
  }
  
  
  function misturar() {
    var lista = document.getElementById('valores')
    var array = Array.from(lista.children)
    shuffle(array, array.length)
    for (let i = 0; i < array.length; i++) {
      lista.appendChild(array[i])
    }
  }