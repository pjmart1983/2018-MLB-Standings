const about=()=>{
  document.getElementById("content").innerHTML="<p>aspiring web developer</p>";
}

const portfolio=()=>{
  document.getElementById("content").innerHTML="<p><a href='standings.html'>MLB Standings</a></p><p><a href='scores.html'>MLB Scores</a></p>";
}

const contact=()=>{
  document.getElementById("content").innerHTML="<p>phone 561-951-1901</p>"
}

document.getElementById("about").addEventListener("click", about);

document.getElementById("portfolio").addEventListener("click", portfolio);

document.getElementById("contact").addEventListener("click", contact);
