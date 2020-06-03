export var Footer = {
    init: function(version){
        appendLinks(version);
        handleChangelogClick();
    }
}

function appendLinks(version){
    var links = [
        `<a target='_blank' href='https://github.com/ThunderSmotch/RotU'>Github</a> | `,
        `<a target='_blank' href='https://discord.gg/q7xXT4U'>Discord</a> | `,
        `<a id='changelogButton' href="#">Rule over the Universe ${version}</a>`
    ];
    $(".footer").append(links);
}

//TODO implement changelog popup
function handleChangelogClick(){
    $("#changelogButton").click(function(){
        console.log("Changelog Clicked.")
    })
}