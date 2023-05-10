let receitas = [ //JSON
  {
      "titulo": "Arroz",
      "imagem": "Arroz.png",
      "ingredientes": ['Arroz',
      'Água',
      'Alho'],
      "preparo": "Frite o alho, após coloque o arroz e água. Aguarde 20 minutos. Sirva quente.",
  },
  {
      "titulo": "Gelatina",
      "imagem": "gelatina.png",
      "ingredientes": ['Gelatina',
      'Água fria',
      'Água quente'],
      "preparo": "Misture a gelatina em 500 ml de água quente. Após acrescente +500 ml de água fria. Coloque na geladeira e aguarde 2 horas."
  },
  {
    "titulo": "Suco de laranja",
    "imagem": "Suco2.png",
    "ingredientes": ['Laranja',
    'Água',
    'Açucar'],
    "preparo": "Corte a laranja ao meio. Esprema em uma jarra. Acrescente açucar a gosto."
}
]


function getListaIngredientes(receita) {
  const lista = receita.ingredientes
    .map(ingrediente => `<li class='mb-1'>${ingrediente}</li>`)
    .reduce((acumulador, item) => acumulador + item, "<ul class='mb-4'>") + "</ul>"
  return lista
}


function getCard(receita) { 
  let card = `
    <div class='card rounded-5 my-4' style='width: 300px; height: 600px;'> 
      <img src='${receita.imagem}' class='card-img-top'>
      <div class='card-body'>
        <h5 class='card-title text-center fs-4 p-2 fw-bold'>${receita.titulo}</h5>
        <div class='card-text'>${getListaIngredientes(receita)}</div>
        <hr>
        <p class='card-text p-2'>${receita.preparo}</p>
      </div>
    </div>`
  return card
}


function preencheCatalogo() {
  const html = receitas
    .map(receita => getCard(receita))
    .reduce((acumulador, item) => acumulador + item, "")
  document.getElementById("pnlCatalogo").innerHTML = html
}
onload = preencheCatalogo()