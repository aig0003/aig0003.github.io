function insert_navbar(nav_array) {
    var i;
    document.getElementById('navbar').innerHTML += '<ul id="navlist">';
    for (i = 0; i < nav_array.length; i++) {
        document.getElementById('navlist').innerHTML += 
        '<li><a href="skills.html">' + nav_array[i] + '</a><hr class="" align="left" height="1px" width="0px"></li>';
    }
    document.getElementById('navbar').innerHTML += '</ul>';   
}

function set_background_image(orientation, colors) {
    var orientation = 90;
    var colors_str = ''
    for (var i=0; i<colors.length;i++) {
        if(i<colors.length-1) {colors_str += colors[i] + ',';
        } else {colors_str += colors[i];}
    }
    alert(colors_str);
    document.body.style.backgroundImage = 'linear-gradient('+orientation+'deg,' + colors_str +')';
}

function get_background_image() {
    alert(getComputedStyle(document.body).backgroundImage);
}

function get_current_page() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf("/") + 1);
    window.alert("hi");
    document.getElementById('content').innerHTML = "<p>" + page + "</p>";
    return page;
}

function rgba_input(){
    var r = document.createElement("INPUT");
    var g = document.createElement("INPUT");
    var b = document.createElement("INPUT");
    var a = document.createElement("INPUT");
    var inputs = [r,g,b,a];
    for(var i=0; i < inputs.length; i++) {
        inputs[i].setAttribute("class","color");
        inputs[i].setAttribute("type","number");
        inputs[i].setAttribute("min","0");
        inputs[i].setAttribute("max","255");
        document.body.appendChild(inputs[i]);
    }
    var string = "rgba()";
    return ;
}