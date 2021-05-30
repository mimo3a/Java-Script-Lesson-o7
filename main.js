function pushText(){
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i<lis.length; i++) {
        lis[i].innerHTML = "new text";

    }
    var parag = document.getElementById('parag');   
    parag.querySelector("a").innerHTML = lis.length;
}
