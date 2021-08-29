const cat = fetch(`https://cataas.com/api/cats`)
.then((data) => data.json())
.then(cats => showCat(cats));
function showCat(cats){
  cats.forEach((cat)=> createCat(cat));
}
let catInfo = [
  {
    id:"id",
    created_at:"created_at",
    tags:"tags"
  }
];
catInfo.forEach((cat) => createCat(cat));
function createCat({id,created_at,tags}){
  const info = document.createElement("div");
  info.setAttribute("class","container");
  
  info.innerHTML = `<div class="cat-container">
  <img class="cat" src="https://cataas.com/cat/${id}"
  <div>
  <div class="details">
  <h3>${id}</h3>
  </div>`;
  document.body.append(info);
}