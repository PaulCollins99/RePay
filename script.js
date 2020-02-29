const btn = document.createElement("button")

function header(){
  let createtag = document.createElement("h3");
  createtag.classList.add('header')
  let placement = document.createTextNode("header");
  createtag.appendChild(placement);
  document.getElementById("content").appendChild(createtag);
  btn.textContent = "+"
  createtag.appendChild(btn)
  const t = document.getElementsByClassName('header')
  for (let i = 0; i < t.length; i++) {
    t[i].addEventListener('click', e => {
     
      text()
    })
    
  }
  
}



function text(){
  let li = document.createElement("li");
  let placement = document.createTextNode("enter text");
  li.appendChild(placement);
  const t = document.getElementsByClassName('header')

  for (let i = 0; i < t.length; i++) {
    t[i].appendChild(li)
    console.log('booom!!')
  }
}

// document.getElementById("heading").innerHTML =
//   localStorage["title"] || "Just Write"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || " "; // default text


setInterval(function() {
  // fuction that is saving the innerHTML of the div
  // localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
  console.log(localStorage);
}, 3000);
