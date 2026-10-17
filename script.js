let currentSlideNo = 0;
let slides;

function renderContent(textArray){
    let currentText = textArray[currentSlideNo];
    currentText = currentText.replace(/^# (.*$)/gim,'<h1>$1</h1>');
    let element = document.getElementById('preview');
    element.innerHTML(currentText);
}