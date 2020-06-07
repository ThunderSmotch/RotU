export var Tooltip = {
    init,
    addTooltip,
    updateTooltip,
}

//Initialize this singleton
function init() {
    tippy.setDefaultProps({
        theme: 'rotu',
        allowHTML: true,
        arrow: false,
        interactive: true,
        placement: 'top',
        hideOnClick: false
    });
}

//Add tooltip to given element id with given content
function addTooltip(id, content){
    tippy(id, {
        content: content
    });
}

//Update an existing tooltip for element id with given content
function updateTooltip(id, content){
    $(id).prop('_tippy').setContent(content);
}