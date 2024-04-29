let searchbtn=document.getElementById('search-btn');
let closebtn=document.getElementById('close-btn');
let searchbox=document.getElementById('search-box');
searchbtn.onclick=()=>{
    searchbox.classList.add('active');
    closebtn.classList.add('active');
    searchbtn.classList.add('active');
}

closebtn.onclick=()=>{
    searchbox.classList.remove('active');
    closebtn.classList.remove('active');
    searchbtn.classList.remove('active');
}