function searchPost(){

let keyword=document.getElementById("searchInput").value

let result=posts.filter(p=>p.title.includes(keyword))

let box=document.getElementById("searchResult")

box.innerHTML=""

result.forEach(p=>{

let li=document.createElement("li")

li.innerHTML="<a href='"+p.url+"'>"+p.title+"</a>"

box.appendChild(li)

})

}

function addComment(){

let name=document.getElementById("commentName").value

let text=document.getElementById("commentText").value

let time=new Date().toLocaleString()

let comments=JSON.parse(localStorage.getItem("comments")||"[]")

comments.push({name,text,time})

localStorage.setItem("comments",JSON.stringify(comments))

showComments()

}

function showComments(){

let comments=JSON.parse(localStorage.getItem("comments")||"[]")

let list=document.getElementById("commentList")

if(!list) return

list.innerHTML=""

comments.forEach(c=>{

let div=document.createElement("div")

div.className="comment"

div.innerHTML=

"<div class='comment-name'>"+c.name+"</div>"+
"<div>"+c.text+"</div>"+
"<div class='comment-time'>"+c.time+"</div>"

list.appendChild(div)

})

}

showComments()
