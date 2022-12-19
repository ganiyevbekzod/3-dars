var elBody = document.querySelector("body");
var elList = document.querySelector(".js-list");
var elSelect=document.querySelector(".js-select");
var elOption=document.querySelector(".js-option");

elBody.style.background="linear-gradient(72.67deg, #1A1822 2.78%, #9040E3 173.27%), #6B50FF";
function wiew(Array,node) {
	node.innerHTML='';
	for(film of Array){
	  let newItem=document.createElement('li');
	  newItem.setAttribute("class","mb-5 col-sm-12 col-md-6 col-lg-4 title text-light  text-center border border-danger");
	  node.appendChild(newItem);
	
	  let newId=document.createElement('h4');
	  newId.textContent=`${film.id}`;
	  newId.setAttribute("class","title");
	  newItem.appendChild(newId);
	  
	  let newImg=document.createElement('img');
	  newImg.setAttribute("src", film.poster)
	  newItem.appendChild(newImg);
	  
	  let newText=document.createElement('h4');
	  newText.textContent=`${film.title}`;
	  newText.setAttribute("class","title text-light pt-3");
	  newItem.appendChild(newText);
	  
	  let newFlm=document.createElement('p');
	  newFlm.textContent=`${film.overview}`;
	  newFlm.setAttribute("class","text d-block mx-auto text-center w-75");
	  newItem.appendChild(newFlm);
	  
	  let newDate=document.createElement('h4');
	  newDate.textContent=`${film.release_date}`;
	  newDate.setAttribute("class","title");
	  newItem.appendChild(newDate);
	
	  let newGenres=document.createElement('h4');
	  newGenres.textContent=`${film.genres}`;
	  newGenres.setAttribute("class","title");
	  newItem.appendChild(newGenres);
	}
  }
  wiew(films,elList)
  let newArray=[];
  elSelect.addEventListener("change",function(){

	newArray=[];
  
	if(elSelect.value !='All'){
	  films.forEach((movies) => {
		if(movies.genres.includes(elSelect.value)){
		  newArray.push(movies);
		}
		wiew(newArray,elList)
	  });
	}else{
	wiew(films,elList);
}
  })