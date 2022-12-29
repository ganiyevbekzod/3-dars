var elBody = document.querySelector("body");
var elList = document.querySelector(".js-list");
var elSelect=document.querySelector(".js-select");
var elSelect2=document.querySelector(".js-select2");
var elOption=document.querySelector(".js-option");
let elForm=document.querySelector(".js-form");
let elInput=document.querySelector(".js-input");
const ElDarkmode=document.querySelector(".js-dark")
function wiew(Array,node) {
	node.innerHTML='';
	for(film of Array){
	  let newItem=document.createElement('li');
	  newItem.setAttribute("class","mb-5 col-sm-12 col-md-6 col-lg-4 title  text-center border border-danger");
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
	  newText.setAttribute("class","title  pt-3");
	  newItem.appendChild(newText);
	  
	  let newFlm=document.createElement('p');
	  newFlm.textContent=`${film.overview}`;
	  newFlm.setAttribute("class","text d-block mx-auto  w-75");
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

  let newArr=[];
  elForm.addEventListener('input', (evt) =>{
    evt.preventDefault();
    newArr=[];
    elList.innerHTML='';
    let elInputVal=elInput.value.toLocaleLowerCase();
    films.forEach((el)=>{
      if(el.title.toLocaleLowerCase().includes(elInputVal))
	  {
        newArr.push(el);
        wiew(newArr,elList)
      }
    });
    console.log(newArr);
  });



  //Sort
//   const TartiblanganFilms=films.sort((a,b) =>{
// 	let FilmsA=a.toUppercase();
// 	let FilmsB=b.toUppercase();

// 	if(FilmsB>FilmsA){
// 		return -1
// 	}
// 	if(FilmsA>FilmsB){
// 		return 1
// 	}
// 	return 0
//   })


  var newsorte = []

elSelect2.addEventListener('change',function(){
	newsorte = []
	elList.innerHTML = ''

films.forEach((els)=>{
	newsorte.push(els)
	newsorte.sort((a,b)=> 
	a.title.toLocaleLowerCase().charCodeAt(0) - 
	b.title.toLocaleLowerCase().charCodeAt(0))

})

if(elSelect2.value == 'a-z'){

	newsorte.sort((a,b)=> 
	a.title.toLocaleLowerCase().charCodeAt(0) - 
	b.title.toLocaleLowerCase().charCodeAt(0))
	wiew(newsorte,elList)
}

if(elSelect2.value == 'z-a'){
	
	newsorte.sort((a,b)=>
	b.title.toLocaleLowerCase().charCodeAt(0) - 
	a.title.toLocaleLowerCase().charCodeAt(0))
	wiew(newsorte,elList)
}
})

// darkmode
let theme=false
ElDarkmode.addEventListener("click",function (){
    theme=!theme
    const bg=theme ? "dark" :"light";
    window.localStorage.setItem("theme",bg)
    changeTheme()
});
function changeTheme() {
    if(window.localStorage.getItem("theme")=="dark"){
        document.body.classList.add("dark");
    }
    else{
        document.body.classList.remove("dark");
    }
    changeTheme()
}