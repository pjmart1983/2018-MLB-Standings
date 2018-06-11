const about=()=>{
  document.getElementById("content").innerHTML="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum scelerisque semper. Mauris nunc ante, malesuada quis consequat eget, consectetur a lacus. Donec ultricies metus id maximus efficitur. Pellentesque commodo lectus non libero imperdiet, pharetra maximus felis dignissim. Duis ut placerat lacus. Proin ornare sem leo, et eleifend justo lacinia eu. Ut luctus, felis nec tincidunt finibus, nibh magna mattis sapien, et suscipit neque odio in sapien. Vestibulum vulputate massa in quam pharetra, aliquam efficitur risus mollis. Nam finibus sapien non mauris dignissim, non scelerisque metus pharetra. Quisque vulputate ornare urna.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum scelerisque semper. Mauris nunc ante, malesuada quis consequat eget, consectetur a lacus. Donec ultricies metus id maximus efficitur. Pellentesque commodo lectus non libero imperdiet, pharetra maximus felis dignissim. Duis ut placerat lacus. Proin ornare sem leo, et eleifend justo lacinia eu. Ut luctus, felis nec tincidunt finibus, nibh magna mattis sapien, et suscipit neque odio in sapien. Vestibulum vulputate massa in quam pharetra, aliquam efficitur risus mollis. Nam finibus sapien non mauris dignissim, non scelerisque metus pharetra. Quisque vulputate ornare urna.</p>";
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

