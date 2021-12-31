function changeText() {
    var hyunjin = document.getElementById("hyunjin");

    console.log ("innerHTML is " + hyunjin.innerHTML);

    if (hyunjin.innerHTML === "Hyunjin Jae") {
        console.log ("changed to Korean name");

        hyunjin.style.fontFamily = "'Stylish', sans-serif";
        hyunjin.classList.add = "korean_font";
        hyunjin.innerHTML = "제현진";
        hyunjin.style.letterSpacing = "5px";
        hyunjin.style.fontSize = "40px";
        hyunjin.style.marginBottom = "-15px";
    } else {
        console.log ("changed to English name");
        hyunjin.innerHTML = "Hyunjin Jae";
        hyunjin.style.fontFamily = "'Roboto Mono', monospace";
        hyunjin.style.fontSize = "30px";
        hyunjin.style.marginBottom = "12px";
        hyunjin.style.letterSpacing = "3px";
    }

}