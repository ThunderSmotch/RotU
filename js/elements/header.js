export var Header = {
    init: init,
    changeTitle: changeTitle, 
}

function init(){
    $("#header").append(getHeaderHTML());
}

function getHeaderHTML(){
    return `
    <div id='headerTitle'></div>
    `;
}

//Change the header's title
function changeTitle(title){
    $('#headerTitle').text(title);
}