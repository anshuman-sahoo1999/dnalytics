// Calculate GC Content
function calculateGCContent(dna) {
    let gcCount = (dna.match(/[GC]/g) || []).length;
    return ((gcCount / dna.length) * 100).toFixed(2);
}

// Get Complementary DNA Strand
function getComplementaryStrand(dna) {
    return dna.replace(/A/g, 'X')
              .replace(/T/g, 'A')
              .replace(/X/g, 'T')
              .replace(/C/g, 'Y')
              .replace(/G/g, 'C')
              .replace(/Y/g, 'G');
}

// Transcribe DNA to mRNA
function transcribeToMRNA(dna) {
    return dna.replace(/T/g, 'U');
}

// Translate mRNA to Protein (Simple)
function translateProtein(dna) {
    const codonTable = {
        'ATG': 'Methionine', 'TAA': 'STOP', 'TAG': 'STOP', 'TGA': 'STOP'
    };
    let protein = [];
    for (let i = 0; i < dna.length; i += 3) {
        let codon = dna.substr(i, 3);
        if (codonTable[codon]) protein.push(codonTable[codon]);
    }
    return protein.join('-');
}

// Detect Mutations (Example: SNPs)
function detectMutations(dna) {
    const reference = "ATCGGATCGA"; // Example reference
    let mutations = [];
    for (let i = 0; i < Math.min(dna.length, reference.length); i++) {
        if (dna[i] !== reference[i]) mutations.push(`Mutation at ${i + 1}: ${reference[i]} → ${dna[i]}`);
    }
    return mutations.join(', ') || "No Mutations Found";
}

// Find Open Reading Frames (ORFs)
function findORFs(dna) {
    let orfs = [];
    let startCodon = "ATG";
    let stopCodons = ["TAA", "TAG", "TGA"];
    
    for (let i = 0; i < dna.length; i++) {
        if (dna.substr(i, 3) === startCodon) {
            for (let j = i + 3; j < dna.length; j += 3) {
                if (stopCodons.includes(dna.substr(j, 3))) {
                    orfs.push(dna.substring(i, j + 3));
                    break;
                }
            }
        }
    }
    return orfs.length > 0 ? orfs.join(', ') : "No ORFs Found";
}
