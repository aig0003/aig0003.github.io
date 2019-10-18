function insert_navbar() {
    //var class = "";
    //if (current_page == "index.html") { class = "active";}
    document.getElementById('container').innerHTML = 
    '<div id="navbar">' +
        '<ul>' +
            '<li><a href="index.html">Home</a><hr class="active" align="left" height="1px" width="1%"></li>'+
            '<li><a href="skills.html">Skills</a><hr align="left" height="1px" width="0px"></li>'+
            '<li><a href="">Education</a><hr align="left" height="1px" width="0px"></li>'+
            '<li><a href="">About</a><hr align="left" height="1px" width="0px"></li>'+
            '<li><a href="">Contact</a><hr align="left" height="1px" width="0px"></li>'+
        '</ul>'+
    '</div>';
}


function get_current_page() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf("/") + 1);
    window.alert("hi");
    document.getElementById('content').innerHTML = "<p>" + page + "</p>";
    return page;
}