function responsive1() {
    var nav1 = document.getElementById("info");

    if(nav1.className === "infoBar"){
        nav1.className += "responsive"
    }
    else{
        nav1.className = "infoBar"
    }

}
function responsive2() {
    var nav2 = document.getElementById("navigation");
    
    if(nav2.className === "navBar"){
        nav2.className += "responsive"
    }
    else{
        nav2.className = "navBar"
    }
}