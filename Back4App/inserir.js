Parse.initialize(
  "7pVVtjCTwxfofutumr147TmNbYPMGP4WBFSrpg1Y",
  "lBlkDCKvKIhSHmlwDgtUpJVXn9M3ylTvImg9Iexi"
);
Parse.serverURL = "https://parseapi.back4app.com/";

const enviarAnime = async () => {
  const anime = new Parse.Object('Anime');

  anime.set('title', document.getElementById("title").value);
  anime.set('author', document.getElementById("author").value);
  anime.set('year', parseInt(document.getElementById("year").value));

  try {
    const result = await anime.save();
    alert(`New object created with objectId: ${result.id}`);
  } catch (error) {
    alert(`Failed to create new object: ${error.message}`);
  }
}

document.getElementById("createButton").addEventListener("click", async function () {
  enviarAnime();
}, false);
