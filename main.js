
const elList = document.querySelector(".list");

const qop = document.createDocumentFragment()

for (let i = 0; i < 300; i++) {

  const elTemp = document.querySelector(".template").content.cloneNode(true);

    
  elTemp.querySelector(".title").textContent = movies[i].Title
  elTemp.querySelector(".fulltitle").textContent = movies[i].fulltitle
  elTemp.querySelector(".Uncategorized").textContent = movies[i].Uncategorized
  elTemp.querySelector(".summary").textContent = movies[i].summary
  elTemp.querySelector(".imdb_id").textContent = movies[i].imdb_id
  elTemp.querySelector(".imdb_raitng").textContent = movies[i].imdb_raitng
  elTemp.querySelector(".runtime").textContent = movies[i].runtime
  elTemp.querySelector(".language").textContent = movies[i].language

  elTemp.querySelector(".ytid").textContent = movies[i].ytid


  
  qop.appendChild(elTemp)
 
}
elList.appendChild(qop)