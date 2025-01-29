const movie = [];

function submit(){
  const title = document.getElementById("textinput").value;
  const score = document.getElementById("numinput").value;

  if(title === "" || score === "" || isNaN(score) || score === -1 || score > 10){
    alert("Enter valid input");
    return;
  } 

  const mymovies = new mymovie(title, score);
  mymovies.addtocollection();
  mymovies.displaycontent();
}

function mymovie (title, score){
  this.title = title;
  this.score = score;
}

mymovie.prototype.addtocollection = function(){
  movie.push({title:this.title, score:this.score, status:this.status});
};

mymovie.prototype.displaycontent = function(){
  const table = document.getElementById("table");
  table.innerHTML = "";

  movie.forEach((movies, index) => {
    const newrow = document.createElement("tr");
    const newtitle = document.createElement("td");
    const newscore = document.createElement("td");
    const newstatus = document.createElement("button");
    const newbtn = document.createElement("button");

    newtitle.textContent = movies.title;
    newscore.textContent = movies.score;
    newstatus.textContent = movies.status;
    newbtn.textContent = "delete";

    newstatus.onclick = function(){
      mymovie.prototype.newstatus(index);
    };

    newbtn.onclick = function(){
      mymovie.prototype.delete(index);
    };
    
    newrow.appendChild(newtitle);
    newrow.appendChild(newscore);
    newrow.appendChild(newstatus);
    newrow.appendChild(newbtn);
    table.appendChild(newrow);

    console.log(movie.title + " " + movie.score);
  });
};

mymovie.prototype.newstatus = function(index){
  if(movie[index].status === "read"){
    movie[index].status = "not read";
    this.displaycontent();
    return;
  } else if(movie[index].status === "not read"){
    movie[index].status = "read";
    this.displaycontent();
    return;
  }
  movie[index].score = "read";
  this.displaycontent();
  return;
}

mymovie.prototype.delete = function(index){
  movie.splice(index, 1);
  this.displaycontent();
  return;
};

