
const elList = document.querySelector(".list");

const elModal = document.querySelector(".modal");
const modalTitle = elModal.querySelector(".modal-title");
const modalIframe = elModal.querySelector(".modal-iframe");
const modalRating = elModal.querySelector(".modal-rating");
const modalYear = elModal.querySelector(".modal-year");
const modalRuntime = elModal.querySelector(".modal-runtime");
const modalCategories = elModal.querySelector(".modal-categories");
const modalSummary = elModal.querySelector(".modal-summary");
const modalLink = elModal.querySelector(".modal-imdb-link");

const qop = document.createDocumentFragment()



function OPtime (time){
const soat = Math.floor(time / 60 );
const min = Math.floor(time % 60 );

return ` ${soat} h ${min} min `

}

for (let i = 0; i < 30; i++) {

  const elTemp = document.querySelector(".js-movie-template").content.cloneNode(true);
  elTemp.querySelector(".movie-img ").src = `https://i3.ytimg.com/vi/${movies[i].ytid}/mqdefault.jpg `;

  elTemp.querySelector(".movie-title").textContent = movies[i].Title;
  elTemp.querySelector(".movie-rating").textContent = movies[i].imdb_rating;
  elTemp.querySelector(".movie-year").textContent = movies[i].movie_year;
  elTemp.querySelector(".movie-runtime").textContent = OPtime(movies[i].runtime);
  elTemp.querySelector(".movie-title").textContent = movies[i].Title;
 
  elTemp.querySelector(".movie-btn").dataset.id = movies[i].imdb_id;


  elTemp.querySelector(".movie-categories").textContent = movies[i].Categories.split("|").join(", ") ;
  qop.appendChild(elTemp)
}

function renderModalInfo(topilganKino){
  modalTitle.textContent = topilganKino.Title;
  modalIframe.src = `https://www.youtube-nocookie.com/embed/${topilganKino.ytid}`;
  modalRating.textContent = topilganKino.imdb_rating;
  modalYear.textContent = topilganKino.movie_year;
  modalRuntime.textContent = OPtime(topilganKino.runtime);
  modalCategories.textContent = topilganKino.Categories.split("|").join(", ");
  modalSummary.textContent = topilganKino.summary;
  modalLink.href = `https://www.imdb.com/title/${topilganKino.imdb_id}`;

}

const ElInput = document.querySelector(".form-input");

 
elList.addEventListener("click",(evt)=>{
  const targetElement = evt.target
  if(targetElement.matches(".movie-btn")){
    const btnId = targetElement.dataset.id
    const foundMovie = movies.find(movie => movie.imdb_id === btnId);
    renderModalInfo(foundMovie);

  }
  
  elModal.addEventListener("hide.bs.modal", function(){
    modalIframe.src = "";
  })
});


elList.appendChild(qop)