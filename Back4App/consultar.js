Parse.initialize(
  "7pVVtjCTwxfofutumr147TmNbYPMGP4WBFSrpg1Y",
  "lBlkDCKvKIhSHmlwDgtUpJVXn9M3ylTvImg9Iexi"
);
Parse.serverURL = "https://parseapi.back4app.com/";

let animes = [];
const lista = document.getElementById("lista");

const gerarLista = () => {
  lista.innerHTML = "";
  
  for (let i = 0; i < animes.length; i++) {
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Título: ${animes[i].titulo} - Autor: ${animes[i].autor} - Ano: ${
        animes[i].ano
      }`
    );
    
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

const fetchAnimes = async () => {
  const Anime = Parse.Object.extend("Anime");
  const query = new Parse.Query(Anime);

  try {
    const results = await query.find();
    animes = [];
    for (const object of results) {
      const titulo = object.get("title");
      const autor = object.get("author");
      const ano = object.get("year");
      animes.push({ titulo, autor, ano });
    }
    gerarLista();
  } catch (error) {
    console.error("Error while fetching Anime", error);
  }
};

fetchAnimes();
