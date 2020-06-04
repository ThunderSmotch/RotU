export var Lang = {
    init: () => init(),
    loadLang: (lang) => loadLang(lang),
    translate: (key) => translate(key),
}

//Available Languages
var langs = ["en", "pt"];

var currentLang = "en";
var langJSON;

//Initializes the Lang class with default parameters
function init(){
    loadLang("en");
}

//Loads a new language file
//TODO: Synchronous requests are deprecated. Handle this.
function loadLang(lang){
    if(langs.includes(lang)){
        $.ajax(`lang/${lang}.lang`,{
            async: false,
            success: (data) => { langJSON = JSON.parse(data); },
            error: () => {console.log("ERROR: Could not load language.")}
        })
    } else {
        console.log(`ERROR: Language ${lang} not detected!`);
    }
}

//Translates a key to string and returns it
function translate(key){
    try {
        return langJSON[key];
    } catch (error) {
        console.log("ERROR: Could not translate key!")
    }
}

