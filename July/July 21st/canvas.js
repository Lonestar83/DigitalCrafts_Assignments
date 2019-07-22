let btnColor = document.getElementById("btnColor");

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

btnColor.addEventListener('click', () => {
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 100; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var randomHex = Math.random().toString(16).substr(-6);
        c.fillStyle = '#' + randomHex;
        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.fill();
}
})