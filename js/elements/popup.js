export var Popup = {
    create: (id, content) => create(id, content),
}

function create(id, content){
    $("body").append(getPopupHTML(id, content));
    $(`#${id}Toggle`).click(()=>{
        $(`#${id}`).hide("fast");
    });
}

function getPopupHTML(id, content){
    return `<div id='${id}' class='popup' style='display: none;'>
    <a href='#' style='float:right; position:sticky; top:0;' id='${id}Toggle'>X</a>
    ${content}
    </div>`;
}