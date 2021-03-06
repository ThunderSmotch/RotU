export var Footer = {
    init,
}

//Initialize this singleton
function init(version){
    appendLinks(version);
    handleChangelogClick();
}

//Append footer links to footer
function appendLinks(version){
    var links = [
        `<a id='achievementsButton' href="#">Achievements</a> | `,
        `<a id='settingsButton' href="#">Settings</a> | `,
        `<a target='_blank' href='https://github.com/ThunderSmotch/RotU'>Github</a> | `,
        `<a target='_blank' href='https://discord.gg/q7xXT4U'>Discord</a> | `,
        `<a id='changelogButton' href="#">Rule over the Universe ${version}</a>`
    ];
    $("#footer").append(links);
}

//TODO implement changelog popup
//Changelog Click
function handleChangelogClick(){
    $("#changelogButton").click(function(){
        console.log("Changelog Clicked.")
    })
}