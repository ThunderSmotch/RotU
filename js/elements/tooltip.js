export var Tooltip = {
    init: () => init(),
    addTooltip: (id, content) => addTooltip(id, content),
    updateTooltip: (id, content) => updateTooltip(id, content),
}

function addTooltip(id, content){
    tippy(id, {
        content: content
    });
}

function updateTooltip(id, content){
    $(id).prop('_tippy').setContent(content);
}

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