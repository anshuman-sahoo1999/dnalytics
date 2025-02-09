// Include jsPDF from CDN (add this in HTML file inside <head>)
/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
*/

function exportReport() {
    // Get analysis results
    let dnaSequence = document.getElementById("dnaInput").value.toUpperCase();
    let gcContent = document.getElementById("gcContent").innerText;
    let complementaryStrand = document.getElementById("complementaryStrand").innerText;
    let mRNA = document.getElementById("mRNA").innerText;
    let proteinTranslation = document.getElementById("proteinTranslation").innerText;
    let mutations = document.getElementById("mutations").innerText;
    let orfs = document.getElementById("orfs").innerText;

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    // Report Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("DNA Sequence Analysis Report", 20, 20);

    // DNA Sequence
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`DNA Sequence:`, 20, 30);
    doc.setFont("courier", "bold");
    doc.text(dnaSequence, 20, 38);

    // Analysis Results
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`GC Content: ${gcContent}%`, 20, 50);
    doc.text(`Complementary Strand: ${complementaryStrand}`, 20, 60);
    doc.text(`mRNA Sequence: ${mRNA}`, 20, 70);
    doc.text(`Protein Translation: ${proteinTranslation}`, 20, 80);
    doc.text(`Mutations Detected: ${mutations}`, 20, 90);
    doc.text(`Open Reading Frames (ORFs): ${orfs}`, 20, 100);

    // Save as PDF
    doc.save("DNA_Analysis_Report.pdf");
}
