'use strict'

function spongibobu(str) {
    str = String(str);
    if (!str.length) {
        return '';
    }
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (!!(Math.random() >= 0.5)) {
            res = res.concat(str[i].toUpperCase());
            if (!!(i + 1 < str.length)) {
                res = res.concat(str[++i].toLowerCase());
            }
        } else {
            res = res.concat(str[i].toLowerCase());
        }
    }
    return res;
}

window.addEventListener('input',
    () => {
        document.getElementById("textOutput").innerHTML = spongibobu(document.getElementById("textInput").value);
    }
)
