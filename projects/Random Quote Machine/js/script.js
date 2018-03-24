changeQuote = () => {
    let randomColor = "#" + Math.floor(Math.random() * 999999);
    console.log("background color: " + randomColor);
    document.getElementById('body').style.backgroundColor = randomColor;
    let buttons = document.getElementsByClassName('button');
    document.getElementById('quote').style.color = randomColor;
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = randomColor;
    }
}