function insert_navbar(nav_array) {
    //var is_active = "";
    //if (current_page == "index.html") { class = "active";}
    var i;
    document.getElementById('navbar').innerHTML += '<ul id="navlist">';
    for (i = 0; i < nav_array.length; i++) {

        document.getElementById('navlist').innerHTML += 
        '<li><a href="skills.html">' + nav_array[i] + '</a><hr class="" align="left" height="1px" width="0px"></li>';
    }
    document.getElementById('navbar').innerHTML += '</ul>';
    /*for (i=0; i < nav_array.length;i++) {
        document.getElementById('container').innerHTML += '<h1>Hi</h1>'
    }*/

    
}

function change_backgroundcolor() {
    alert("Hi");

    document.body.style.backgroundImage = "linear-gradient(to right,rgba(255, 1, 234, 0.8) 0% ,rgba(0,0,0,1) 100%)";
}

function get_current_page() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf("/") + 1);
    window.alert("hi");
    document.getElementById('content').innerHTML = "<p>" + page + "</p>";
    return page;
}