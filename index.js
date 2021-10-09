


// sec2 end
// var _x = window.matchMedia("(max-width: 700px)")
function myFun() {
let divs1 = document.querySelector(".nav-bar")
divs1.classList.toggle("show");
if(divs1.classList.contains("show")){
    document.querySelector(".fa3").style.display = "inherit"
    document.querySelector(".fa4").style.display = "none"
   
}
if(!divs1.classList.contains("show")){
    document.querySelector(".fa3").style.display = "none"
    document.querySelector(".fa4").style.display = "inherit"
}

};
function myFunction(){
    
    var divs = document.querySelector(".dropdownMain")
    divs.classList.toggle("showMain");
    if(divs.classList.contains("showMain")){

        document.querySelector(".fa1").style.display = "inherit"
        // document.querySelector("").style.display = "inherit"

        document.querySelector(".fa2").style.display = "none"
       
    }
    if(!divs.classList.contains("showMain")){
        // document.querySelector(".fa2").innerHTML = "h1"

        document.querySelector(".fa1").style.display = "none"
        document.querySelector(".fa2").style.display = "inherit"
    }

};

  
 

      window.onclick = function(event){
            
            if(!event.target.matches("#dropMain")){

        let remove = document.querySelector(".dropdownMain")
            if(remove.classList.contains("showMain")){
        
            remove.classList.remove("showMain")
            document.querySelector(".fa1").style.display = "none"
                document.querySelector(".fa2").style.display = "inherit"
       
    }}
    if(!event.target.matches("#dropbtn")){

        let remove = document.querySelector(".nav-bar")
            if(remove.classList.contains("show")){
        
            remove.classList.remove("show")
            document.querySelector(".fa3").style.display = "none"
                document.querySelector(".fa4").style.display = "inherit"

                 }}}


                

