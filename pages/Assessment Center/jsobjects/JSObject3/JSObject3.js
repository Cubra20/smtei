export default {
  generateOP_3PerPage() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "A4");

    // TESDA Blue
    const BLUE = [0, 51, 153];

    const data = GetApplicants.data.filter(r =>
      r.STATUS === "Paid" &&
      r.QUALIFICATION === ac_table.selectedRow.Q_CODE &&
      r["BATCH "] === "1"
    );

    if (!data.length) {
      showAlert("No records found", "warning");
      return;
    }

    const peso = "₱ 35.00";
    const amountWords = "THIRTY-FIVE PESOS ONLY";

    // OR height block (A4 = 297mm)
    const OR_HEIGHT = 95;
    const START_Y = 10;

    data.forEach((r, index) => {
      const pos = index % 3;
      if (index > 0 && pos === 0) doc.addPage();

      let y = START_Y + pos * OR_HEIGHT;

      doc.setTextColor(...BLUE);

      // ================= BORDER =================
      doc.setLineWidth(0.6);
      doc.rect(8, y, 194, OR_HEIGHT - 5);

      y += 8;

      // ================= HEADER =================
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("TESDA CAVITE", 105, y, { align: "center" });

      y += 4;
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Agency", 105, y, { align: "center" });

      y += 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("ORDER OF PAYMENT", 105, y, { align: "center" });

      // Right info
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.text("No: CAC 26- ________", 150, y - 8);
      doc.text("Date: ____________", 150, y - 4);

      y += 6;

      // ================= COLLECTING =================
      doc.text("The Collecting Officer", 15, y);
      doc.text("Cash Unit", 15, y + 4);

      y += 10;

      // ================= NAME =================
      doc.text("Please issue Official Receipt in favor of", 15, y);

      y += 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(r.NAME.toUpperCase(), 105, y, { align: "center" });

      doc.line(25, y + 1.5, 185, y + 1.5);

      y += 5;
      doc.setFontSize(6);
      doc.setFont("helvetica", "normal");
      doc.text("(name)", 105, y, { align: "center" });

      y += 5;
      doc.setFontSize(9);
      doc.text("Adlas, Silang Cavite", 105, y, { align: "center" });

      doc.line(25, y + 1.5, 185, y + 1.5);

      y += 4;
      doc.setFontSize(6);
      doc.text("(address/office)", 105, y, { align: "center" });

      y += 6;

      // ================= AMOUNT =================
      doc.setFontSize(7);
      doc.text("In the amount of", 15, y);

      doc.setFont("helvetica", "bold");
      doc.text(amountWords, 55, y);
      doc.text(peso, 155, y);

      doc.line(55, y + 1.5, 135, y + 1.5);
      doc.line(150, y + 1.5, 185, y + 1.5);

      y += 8;

      // ================= PAYMENT FOR =================
      doc.setFont("helvetica", "normal");
      doc.text("For payment of", 15, y);

      y += 5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(r.QUALIFICATION, 105, y, { align: "center" });

      doc.line(25, y + 1.5, 185, y + 1.5);

      y += 4;
      doc.setFontSize(6);
      doc.setFont("helvetica", "normal");
      doc.text("(Qualification)", 105, y, { align: "center" });

      y += 6;

      // ================= BANK =================
      doc.setFontSize(7);
      doc.text("Please deposit the collections under Bank Account/s:", 15, y);

      y += 6;
      doc.text("No.", 15, y);
      doc.text("Name of Bank", 75, y);
      doc.text("Amount", 155, y);

      doc.line(15, y + 1.5, 185, y + 1.5);

      y += 5;
      doc.text("2052-1019-08", 15, y);
      doc.line(45, y + 1, 135, y + 1);
      doc.text(peso, 155, y);

      y += 6;
      doc.text("Total", 15, y);
      doc.text(peso, 155, y);

      y += 10;

      // ================= SIGNATURE =================
      doc.line(70, y, 140, y);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.text("MARIA EVELYN F. BOSUTROS", 105, y + 4, { align: "center" });

      doc.setFontSize(6);
      doc.setFont("helvetica", "normal");
      doc.text("FINANCIAL ANALYST", 105, y + 7, { align: "center" });
    });

   return doc.output("datauristring");
  }
};
