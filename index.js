let list = document.querySelector("ul");
let listElement1 = document.createElement("li");
let listElement2 = document.createElement("li");
let listElement3 = document.createElement("li");
let listElement4 = document.createElement("li");

//create the list
list.appendChild(listElement1);
listElement1.setAttribute("class","active")
listElement1.innerHTML = `<a href="#section1" onclick=print()>Section 1</a>`
console.log(listElement1.firstChild.href)

list.appendChild(listElement2);
listElement2.innerHTML = `<a href="#section2">Section 2</a>`
console.log(listElement2.firstChild.href)

list.appendChild(listElement3);
listElement3.innerHTML = `<a href="#section2">Section 3</a>`
console.log(listElement3.firstChild.href)

list.appendChild(listElement4);
listElement4.innerHTML = `<a href="#section4">Section 4</a>`
console.log(listElement4.firstChild.href)

let lis = document.querySelectorAll("ul li");
let sections = document.querySelectorAll("section");

lis.forEach((li) =>{
    li.addEventListener("click", (e) =>{
        lis.forEach((li) =>{
            //Remove active from all li
            li.classList.remove("active");
        });
        //add active to the item that i clicked on or active
        e.currentTarget.classList.add("active");
        e.preventDefault()
    })
})

// the screen on viewport mode we add active class to our sections
if(window.innerWidth <= 800){
    function actived(){
        for(const section of sections ){
            let box = section.getBoundingClientRect(); // to get the dimensions
            if(box.top <=100){
                //add active class
                document.querySelector("#section1").setAttribute("class","active");
            }else if(box.top >=600){
                //add active class
                document.querySelector("#section2").setAttribute("class","active");
            }else if(box.top >=1700){
                //add active class
                document.querySelector("#section3").setAttribute("class","active");
            }else if(box.top >=2700){
                //add active class
                document.querySelector("#section4").setAttribute("class","active");
            }
        }
    }

// call the actived function
    document.addEventListener("scroll",function(){
        actived();
    })
}

function print(){
    console.log("hello")
}