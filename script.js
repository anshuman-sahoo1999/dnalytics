function analyzeDNA() {
    let dnaSequence = document.getElementById("dnaInput").value.toUpperCase().replace(/[^ATCG]/g, '');

    if (!dnaSequence) {
        alert("Please enter a valid DNA sequence!");
        return;
    }

    document.getElementById("gcContent").innerText = calculateGCContent(dnaSequence);
    document.getElementById("complementaryStrand").innerText = getComplementaryStrand(dnaSequence);
    document.getElementById("mRNA").innerText = transcribeToMRNA(dnaSequence);
    document.getElementById("proteinTranslation").innerText = translateProtein(dnaSequence);
    document.getElementById("mutations").innerText = detectMutations(dnaSequence);
    document.getElementById("orfs").innerText = findORFs(dnaSequence);

    drawDNAVisualization(dnaSequence);
}
