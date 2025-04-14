const btn = document.getElementById('changeColorBtn');
console.log(btn)
const colorDisplay = document.getElementById('colorDisplay');
console.log(colorDisplay)

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', () => {
    const color = generarColorAleatorio();
    document.body.style.backgroundColor = color;
    colorDisplay.textContent = color;
});