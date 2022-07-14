/* Clock for Header */
function showTimeHeader(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var session = "am";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "pm";
    }

    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m + " " + session;

    document.getElementById("DigitalCLOCKHeader").innerText = time;
    document.getElementById("DigitalCLOCKHeader").textContent = time;

    setTimeout(showTimeHeader, 1000);

}

/* Clock for Footer */
function showTimeFooter(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var session = "am";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "pm";
    }

    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m + " " + session;

    document.getElementById("DigitalCLOCKFooter").innerText = time;
    document.getElementById("DigitalCLOCKFooter").textContent = time;

    setTimeout(showTimeFooter, 1000);

}

/* Shuffle Hello World text on HomePage  */
function ChangeText(){
    var list = ["Hello, World!", "Բարեւ աշխարհ!", "你好世界!", "Përshendetje Botë!",
		  "Bonjour monde!", "Hallo Welt!", "Γειά σου Κόσμε!", "Helló Világ!",
		  "Ciao mondo!", "こんにちは世界!", "Привет мир!", "¡Hola Mundo!",
		  "Привіт Світ!"];

    var x = document.getElementById('IntroText');
    var i = 1;

    setInterval(function (){
	// change the text using the dictionary
	// i++ go to the next language
	x.innerHTML = list[i++];
	// start over if i === dictionary length
	i = list.length === i ? 0 : i;
    }, 2000);
}

/* Launch functions when DOM content is loaded */
document.addEventListener('DOMContentLoaded', function(event) {
    showTimeHeader();
    showTimeFooter();
    ChangeText();
})
