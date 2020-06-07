export var Popup = {
    create,
    createNotification,
}

function create(id, content){
    $("body").append(getPopupHTML(id, content));
    $(`#${id}Toggle`).click(()=>{
        $(`#${id}`).hide("fast");
    });
}

function createNotification(id, content){
    $("body").append(getNotificationHTML(id, content));
    $(`#${id}`).slideDown().delay(2000).slideUp();
}

function getPopupHTML(id, content){
    return `<div id='${id}' class='popup' style='display: none;'>
    <a href='#' style='float:right; position:sticky; top:0;' id='${id}Toggle'>X</a>
    ${content}
    </div>`;
}

function getNotificationHTML(id, content){
    return `<div id='${id}' class='notification' style='display: none;'>
    ${content}
    </div>`;
}