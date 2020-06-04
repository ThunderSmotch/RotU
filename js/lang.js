export var Lang = {
    init: () => init(),
    loadLang: (lang) => loadLang(lang),
    translate: (key) => translate(key),
    getLang: (lang) => getLang()
}

//Available Languages
export var langs = {
    "en":"English",
    "pt":"Português"    
}

var currentLang = "en";
var langJSON;
var enJSON;

//Initializes the Lang class with default parameters
function init(){
    //Load English as fallback lang
    loadLang('en');
    enJSON = langJSON;
    //Load current lang
    loadLang(getLang());
}

//Loads a new language file
//TODO: Synchronous requests are deprecated. Handle this.
function loadLang(lang){
    if(langs.hasOwnProperty(lang)){
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
//If key does not exist then return the english text as fallback
function translate(key){
    try {
        var val = langJSON[key];
        if(val == undefined) val = enJSON[key];
        return val;
    } catch (error) {
        console.log("ERROR: Could not translate key!")
    }
}

//Returns current language ('en' by default)
function getLang(){
        //Load language stored
        var langStored = localStorage.getItem('lang');
        if(langStored == 'null'){
            return 'en';
        } else{
            return langStored;
        }
}

