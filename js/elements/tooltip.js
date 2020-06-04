export var Tooltip = {
    addTooltip: (id, content) => addTooltip(id, content)
}

function addTooltip(id, content){
    tippy(id, {
        content: content
    });
}