function changeno(){
    var noButton = document.getElementById("no")
    if (!noButton) return;
    noButton.style.position = 'relative';
    const dx = Math.floor(Math.random() * 801) - 400;
    noButton.style.left = dx + 'px';
    const dy = Math.floor(Math.random() * 201) - 100;
    noButton.style.top = dy + 'px';
    var yesButton = document.getElementById('yes');
    if (yesButton) {
        var scale = parseFloat(yesButton.dataset.scale) || 1;
        scale = Math.min(scale + 0.4);
        yesButton.dataset.scale = scale;
        yesButton.style.transformOrigin = 'center';
        yesButton.style.transition = 'transform 150ms ease';
        yesButton.style.transform = 'scale(' + scale + ')';
    }
}
function changeyes(){
    window.location.href = '/yes'
}