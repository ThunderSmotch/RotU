var links = [
    `<a target='_blank' href='https://github.com/ThunderSmotch/RotU'>Github</a>`,
    `<a target='_blank' href='https://discord.gg/q7xXT4U'>Discord</a>`,
    `<a id='changelogButton' href="#">v0.1</a>`
];

export var Footer = {
    init: function(){
        $(".footer").append(links);
        $("#changelogButton").click(function(){
            console.log("Changelog Clicked.")
        })
    }
}

//TODO Changelog popup