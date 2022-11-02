
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
const FormSelect = document.querySelector(".form-select-control");
const SelectForm = document.querySelector(".js-Selekt");
const elSortJs = document.querySelector(".js-Sort") 
// console.log(elSort);

// console.log(elSort.value);

const qop = document.createDocumentFragment()


const moviesArr = movies.splice(0, 100);

const EsearchForm  = document.querySelector(".form-control");
const elFormSearch  = EsearchForm.querySelector(".form-input");


function OPtime (time){
const soat = Math.floor(time / 60 );
const min = Math.floor(time % 60 );

return ` ${soat} h ${min} min `

}

function renderMovie ( kino, element ){
  element.innerHTML = "";

for (let item of kino) {
  const elTemp = document.querySelector(".js-movie-template").content.cloneNode(true);
  elTemp.querySelector(".movie-img ").src = `https://i3.ytimg.com/vi/${item.ytid}/mqdefault.jpg `;

  elTemp.querySelector(".movie-title").textContent = item.Title;
  elTemp.querySelector(".movie-rating").textContent = item.imdb_rating;
  elTemp.querySelector(".movie-year").textContent = item.movie_year;
  elTemp.querySelector(".movie-runtime").textContent = OPtime(item.runtime);
  elTemp.querySelector(".movie-title").textContent = item.Title;
 
  elTemp.querySelector(".movie-btn").dataset.id = item.imdb_id;
  elTemp.querySelector(".movie-categories").textContent = item.Categories.split("|").join(", ") ;
  qop.appendChild(elTemp)
  element.appendChild(qop)
}
}

renderMovie(moviesArr, elList);

function renderModalInfo(topilganKino){


  modalTitle.textContent = topilganKino.Title ;
  modalIframe.src = `https://www.youtube-nocookie.com/embed/${topilganKino.ytid}`;
  modalRating.textContent = topilganKino.imdb_rating;
  modalYear.textContent = topilganKino.movie_year;
  modalRuntime.textContent = OPtime(topilganKino.runtime);
  modalCategories.textContent = topilganKino.Categories.split("|").join(", ");
  modalSummary.textContent = topilganKino.summary;
  modalLink.href = `https://www.imdb.com/title/${topilganKino.imdb_id}`;

}
elList.addEventListener("click",(evt)=>{
  const targetElement = evt.target
  if(targetElement.matches(".movie-btn")){
    const btnId =   targetElement.dataset.id 
    const foundMovie = movies.find(function (item) {
      console.log( typeof item.imdb_id );
      return item.imdb_id == btnId
    } );
    console.log(typeof btnId );
    console.log(  foundMovie );
    renderModalInfo(foundMovie);


  }
  
  elModal.addEventListener("hide.bs.modal", function(){
    modalIframe.src = "";
  })
});



// Sort


function sortMovies (movies , sortType){
  console.log(movies , sortType);
  if (sortType === "A-Z" ){
    movies.sort((a,b) => {
      if( a.Title > b.Title ){
        
        return 1
      } else if ( a.Title < b.Title ) {
        return -1
      } else{return 0}

    })
  }
    if(sortType == "Z-A" ){
    
    movies.sort((a,b) => {
      if( a.Title > b.Title ){
        console.log(a.Title);
        return -1
      } else if ( a.Title < b.Title ) {
        return 1
      } else{return 0}
      
    })
    }

    if(sortType == 1-10 ){
      return a - b
    }

}



// search 
EsearchForm.addEventListener("submit", (evt) => {
evt.preventDefault()
const elSort = elSortJs.value
const selectValue = SelectForm.value.trim();

const elFormSearchInput = elFormSearch.value.trim();
const regexTitle = new RegExp (elFormSearchInput , "gi");
const searchMovis = moviesArr.filter(item => String(item.Title).match(regexTitle)  && item.Categories.match(selectValue) || SelectForm === "All"  ||  String(item.Title) ==""  );

sortMovies(moviesArr , elSort)

// console.log(sortMovies(searchMovis , elSort));
if (searchMovis.length > 0){
  renderMovie(searchMovis, elList)
  
  
  
} else{
  elList.innerHTML = "movie not found"
}
} )
// search end 




// Select
const geners = []

movies.forEach(itm => {
  itm.Categories.split("|").forEach (item => {
      if (! geners.includes(item)) {
        geners.push(item)
      }
    })
     
})

const selectQop = new DocumentFragment()
geners.forEach(item => {
  const Option = document.createElement("option");
 

Option.value =item;
Option.textContent = item;
selectQop.appendChild(Option)
})
SelectForm.appendChild(selectQop)

// Select end







 