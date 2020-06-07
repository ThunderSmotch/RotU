export var Header = {
    init,
    changeTitle, 
}

//Initalize this singleton
function init(){
    $("#header").append(getHeaderHTML());
}

//Change the header's title
function changeTitle(title){
    $('#headerTitle').text(title);
}

//Header HTML
function getHeaderHTML(){
    return `
    <div id='headerTitle'></div>
    `;
}