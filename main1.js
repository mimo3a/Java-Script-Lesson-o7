function changeToRed(){
    var links = document.getElementsByTagName('li');
    for(var i=0; i<links.length; i++) {
        var tegA = links[i].querySelector('a');    
        var innenText = tegA.href
        if ( innenText.includes("http://") || innenText.includes("ftp://")) {
            tegA.classList.add("external-red")
        }        
    }

}