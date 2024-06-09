function draw() {
    const canvas = document.getElementById('rainBow');
    const context = canvas.getContext('2d');

    // Get color values from color pickers
    const colors = [
        document.getElementById('red').value,
        document.getElementById('orange').value,
        document.getElementById('yellow').value,
        document.getElementById('green').value,
        document.getElementById('blue').value,
        document.getElementById('indigo').value,
        document.getElementById('violet').value
    ];

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height;

    // Draw rainbow arcs
    for (let i = 0; i < colors.length; i++) {
        context.beginPath();
        context.fillStyle = colors[i];
        context.arc(centerX, centerY, (colors.length - i) * 30, Math.PI, 2 * Math.PI);
        context.fill();
    }
}
