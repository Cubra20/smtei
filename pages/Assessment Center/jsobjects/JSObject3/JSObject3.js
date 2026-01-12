export default {
  generateOP_Landscape_3Vertical() {
    const { jsPDF } = window.jspdf;

    // LANDSCAPE MODE
    const doc = new jsPDF("l", "mm", "A4");

    const BLUE = [0, 51, 153]; // TESDA blue

    // PAGE SIZE (LANDSCAPE)
    const PAGE_WIDTH = 297;
    const PAGE_HEIGHT = 210;

    // OR LAYOUT
    const MARGIN_X = 8;
    const MARGIN_Y = 8;
    const GAP = 6;

    const OR_WIDTH = (PAGE_WIDTH - MARGIN_X * 2 - GAP * 2) / 3; // ≈ 91mm
    const OR_HEIGHT = PAGE_HEIGHT - MARGIN_Y * 2;

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

    data.forEach((r, i) => {
      const col = i % 3;
      if (i > 0 && col === 0) doc.addPage();

      const x = MARGIN_X + col * (OR_WIDTH + GAP);
      let y = MARGIN_Y;

      doc.setTextColor(...BLUE);
      doc.setDrawColor(...BLUE);
      doc.setLineWidth(0.6);

      // ================= BORDER =================
      doc.rect(x, y, OR_WIDTH, OR_HEIGHT);

      y += 10;

      // ================= HEADER =================
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("TESDA CAVITE", x + OR_WIDTH / 2, y, { align: "center" });

      y += 5;
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Agency", x + OR_WIDTH / 2, y, { align: "center" });

      y += 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("ORDER OF PAYMENT", x + OR_WIDTH / 2, y, { align: "center" });

      // Right header
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.text("No: CAC 26- ________", x + OR_WIDTH - 4, y - 18, { align: "right" });
      doc.text("Date: ____________", x + OR_WIDTH - 4, y - 13, { align: "right" });

      y += 10;

      // ================= COLLECTING OFFICER =================
      doc.text("The Collecting Officer", x + 4, y);
      doc.text("Cash Unit", x + 4, y + 4);

      y += 14;

      // ================= NAME =================
      doc.text("Please issue Official Receipt in favor of", x + 4, y);

      y += 7;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(r.NAME.toUpperCase(), x + OR_WIDTH / 2, y, { align: "center" });

      doc.line(x + 4, y + 2, x + OR_WIDTH - 4, y + 2);

      y += 6;
      doc.setFontSize(6);
      doc.setFont("helvetica", "normal");
      doc.text("(name)", x + OR_WIDTH / 2, y, { align: "center" });

      y += 7;
      doc.setFontSize(9);
      doc.text("Adlas, Silang Cavite", x + OR_WIDTH / 2, y, { align: "center" });

      doc.line(x + 4, y + 2, x + OR_WIDTH - 4, y + 2);

      y += 6;
      doc.setFontSize(6);
      doc.text("(address/office)", x + OR_WIDTH / 2, y, { align: "center" });

      y += 10;

      // ================= AMOUNT =================
      doc.setFontSize(7);
      doc.text("In the amount of", x + 4, y);

      doc.setFont("helvetica", "bold");
      doc.text(amountWords, x + OR_WIDTH / 2, y, { align: "center" });
      doc.text(peso, x + OR_WIDTH - 4, y, { align: "right" });

      doc.line(x + 22, y + 2, x + OR_WIDTH - 22, y + 2);

      y += 12;

      // ================= PAYMENT FOR =================
      doc.setFont("helvetica", "normal");
      doc.text("For payment of", x + 4, y);

      y += 7;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(r.QUALIFICATION, x + OR_WIDTH / 2, y, { align: "center" });

      doc.line(x + 4, y + 2, x + OR_WIDTH - 4, y + 2);

      y += 6;
      doc.setFontSize(6);
      doc.setFont("helvetica", "normal");
      doc.text("(Qualification)", x + OR_WIDTH / 2, y, { align: "center" });

      y += 10;

      // ================= BILL =================
      doc.setFontSize(7);
      doc.text("Per Bill No.: N/A", x + 4, y);
      doc.text("Dated: N/A", x + 4, y + 4);

      y += 12;

      // ================= BANK =================
      doc.text("Please deposit the collections under Bank", x + 4, y);
      doc.text("Account/s:", x + 4, y + 4);

      y += 10;
      doc.text("No.", x + 4, y);
      doc.text("Name of Bank", x + OR_WIDTH / 2, y, { align: "center" });
      doc.text("Amount", x + OR_WIDTH - 4, y, { align: "right" });

      doc.line(x + 4, y + 2, x + OR_WIDTH - 4, y + 2);

      y += 7;
      doc.text("2052-1019-08", x + 4, y);
      doc.text(peso, x + OR_WIDTH - 4, y, { align: "right" });

      y += 8;
      doc.text("Total", x + 4, y);
      doc.text(peso, x + OR_WIDTH - 4, y, { align: "right" });

      y += 20;

      // ================= SIGNATURE =================
      doc.line(x + 18, y, x + OR_WIDTH - 18, y);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.text("MARIA EVELYN F. BOSUTROS", x + OR_WIDTH / 2, y + 5, { align: "center" });

      doc.setFontSize(6);
      doc.setFont("helvetica", "normal");
      doc.text("FINANCIAL ANALYST", x + OR_WIDTH / 2, y + 9, { align: "center" });
    });

     return doc.output("datauristring");
  }
};
