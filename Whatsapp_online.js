// ==UserScript==
// @name         Whatsapp-Tool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.whatsapp.com

// ==/UserScript==
// Test Geschäftstelefon: Mobile Daten an, WLAN aus sonst gibt es manchmal unterbrüche.
// Klassen und id Namen werden manchmal geändert.
// interessant: https://greasyfork.org/en/scripts/38527-whatsapp-web-spammer/code
// interessant: https://github.com/varunon9/whatsapp-auto-messenger


/*
// Array which holds all the messages which we are going to send
var wishes = [
    "Hallo",
    "Bis gli",
    "Grüetzi",
    "Wie gats",
    "Tschüss"
];

var index = 0;
var length = wishes.length;
*/
var invokeUntilChatsLoaded = window.setInterval(function() {
    if (document.getElementById("pane-side") == null) {
        return;
    }
    clearInterval(invokeUntilChatsLoaded);
    document.getElementById("pane-side").style.display = "none"; //<div class="_1qDvT _3R02z" id="pane-side" style=""> div mit Anzeige aller Chats
    document.querySelector("#side > header").style.display = "none"; // <header class="_1QUKR" style="">  div mit Profil-bild mit funktionen
    document.querySelector("#app > div > div > div._1-iDe.Wu52Z").style.display = "none"; //<div class="_1-iDe Wu52Z" style=""><div id="main" class="_2WG1s">
    document.querySelector("#side > div._2EoyP > div > label > div > div._3FRCZ.copyable-text.selectable-text").style.display = "none"; //<div class="_3FRCZ copyable-text selectable-text" contenteditable="true" data-tab="3" dir="ltr"></div> Such eingabefeld
    Loaded();
}, 100);

// doppelklick auf Lupe Funktion
function Loaded() {
    document.querySelector("#side > div._2EoyP > div > button").addEventListener("dblclick", hid, false); //<button class="_3e4VU"> / Lupe

    function hid() {
        if (document.getElementById("pane-side").style.display == "none") {
            document.querySelector("#app > div > div > div._1-iDe.Wu52Z").style.display = ""; //<div class="_1-iDe Wu52Z" style=""><div id="main" class="_2WG1s">
            document.querySelector("#side > header").style.display = "";
            document.getElementById("pane-side").style.display = "";
            document.querySelector("#side > div._2EoyP > div > label > div > div._3FRCZ.copyable-text.selectable-text").style.display = "";
            return;
        }
        document.querySelector("#side > header").style.display = "none";
        document.querySelector("#app > div > div > div._1-iDe.Wu52Z").style.display = "none";
        document.getElementById("pane-side").style.display = "none";
        document.querySelector("#side > div._2EoyP > div > label > div > div._3FRCZ.copyable-text.selectable-text").style.display = "none";
    }
}
// End - doppelklick auf Lupe Funktion


var on = 0;
var x;
var start;
var time;
var zeit;
var name = "";
var verb;
let message = '';

var onlx;

setInterval(function() {
    if (document.querySelector("#side > span > div > div > div._1H4e5 > div.aaIq_")) { //<div class="aaIq_">Telefon nicht verbunden</div>
        if (verb != 0) {
            setTime();
            console.log(zeit + " | Verbindungsunterbruch");
            window.open('https://api.telegram.org/bot1357933263:AAGNmf_dvmWx61yAUzbp0UIQELwTYiaorxY/sendMessage?chat_id=1063742273&text=' + zeit + '%20|%20Verbindungsunterbruch');
            verb = 0;
        }
    } else {
        if (verb != 1) {
            setTime();
            console.log(zeit + " | Verbunden");
            window.open('https://api.telegram.org/bot1357933263:AAGNmf_dvmWx61yAUzbp0UIQELwTYiaorxY/sendMessage?chat_id=1063742273&text=' + zeit + '%20|%20Verbunden');
            verb = 1;
        }
    }

    if (document.querySelector("#main > header > div._33QME > div._2ruUq._3xjAz > span")) { //<span title="online" class="_3-cMa _3Whw5">online</span>
        x = document.querySelector("#main > header > div._33QME > div._2ruUq._3xjAz > span").innerText; //<span title="online" class="_3-cMa _3Whw5">online</span>
        name = document.querySelector("#main > header > div._33QME > div > div > span").innerText; //<span dir="auto" title="Hans" class="_3ko75 _5h6Y_ _3Whw5">Hans</span>
        if ((x == "online") || (x == "schreibt …")) {


            if (on != 1) {
                start = performance.now();
                //console.log("online: " + new Date());
                setTime();
                //window.open('http://rainer.li.185-178-193-233.161.hosttech.eu/1_spezial/whatonline.php');
                //window.open('https://rainer.li/1_spezial/whatonline.php');
                //window.open('http://balabala.xxx');
                window.open('https://api.telegram.org/bot1357933263:AAGNmf_dvmWx61yAUzbp0UIQELwTYiaorxY/sendMessage?chat_id=1063742273&text=' + name + '%20-%20jetzt%20online');
                on = 1;

                /*
                // Nachricht wenn wieder offline
                var wish = wishes[index++];
                if (index == length) {
                    index = 0;
                }
                */
                function sendMessage() {
                    //let input = document.querySelector('._3uMse ._3FRCZ');
                    let input = getInput();
                    let evt = new Event('input', {
                        bubbles: true
                    });
                    message = input.innerHTML;
                    //input.innerHTML = message; // Eingegebene Nachricht im Inputfeld. (Wird nur einmal gesendet)
                    if (onlx) {
                        input.innerHTML = 'Am ' + zeit + ' bisch du ' + onlx + 's online gsi 😀'; // 'Nachricht im Inputfeld schreiben und kopieren 👍' Vorgegebene Nachricht. (Wird mehrmals gesendet!!!)
                    }
                    //zeit + " " + name + " Onlinedauer: " + onl + "s"


                    input.dispatchEvent(evt);
                    // *** Video oder nur Text? Auswahl ein oder auskomentieren ***
                    document.getElementsByClassName('_1U1xa')[0].click(); // click send button  // Nur Text
                    //document.getElementsByClassName('_3y5oW')[0].click(); // click send button  // Mit Anhang (Video) (Anhang muss aus der Festplatte hineingeschoben werden)
                };
                sendMessage()
                    ++zahl;
            }
        } else {
            if (on != 0) {
                OfflineInfo();
            }
        }
    } else {
        if (on != 0) {
            OfflineInfo();
        }
    }
}, 1000);

function setTime() {
    let now = new Date(); //create a new Date
    let year = now.getFullYear();
    let mm = now.getMonth() + 1;
    let dd = now.getDate();
    let hour = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
    let min = now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
    let sec = now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();

    zeit = dd + "." + mm + "." + year + " " + hour + ":" + min + ":" + sec;
}

function getInput() {
    var input = document.querySelector('._3uMse ._3FRCZ');
    if (!input) {
        return false;
    } else {
        return input;
    }
}

function OfflineInfo() {
    time = performance.now();

    //online dauer min sek berechnen
    var onl = Math.round((time - start) / 1000);
    var minn = Math.floor(onl / 60);
    var sekk = onl % 60;
    onl = minn + "m " + sekk
    onlx = onl;
    console.log(
        zeit +
        " | " +
        name +
        " - Onlinedauer: " +
        onl +
        "s\n\n"
    );
    window.open('https://api.telegram.org/bot1357933263:AAGNmf_dvmWx61yAUzbp0UIQELwTYiaorxY/sendMessage?chat_id=1063742273&text=' + zeit + ' ' + name + ' Onlinedauer: ' + onl + 's');
    on = 0;
}