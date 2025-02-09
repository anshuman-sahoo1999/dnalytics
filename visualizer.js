function drawDNAVisualization(dna) {
    let canvas = document.getElementById("dnaCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < dna.length; i++) {
        ctx.fillStyle = dna[i] === 'A' ? "red" :
                        dna[i] === 'T' ? "blue" :
                        dna[i] === 'C' ? "green" :
                        "yellow";
        ctx.fillRect(i * 10, 10, 8, 30);
    }
}
