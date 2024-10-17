function generatecolor(){
    length=6;
    var chars='abcdef0123456789'
    var color='';
    for(var i=0;i<length;i++){
        color +=chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return '#'+color;
}
function changecolor(){
    document.body.style.backgroundColor=generatecolor()
}
setInterval(function(){
    changecolor()
},4000)