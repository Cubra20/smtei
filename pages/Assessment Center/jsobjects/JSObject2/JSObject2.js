export default {
  generatePDF () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "A4");

    /* ======================
       DATE (AUTO-GENERATED)
    ======================= */
    const today = new Date();
    const year = today.getFullYear();
    const dateStr = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    /* ======================
       DYNAMIC VALUES
    ======================= */
  

    const fileName = `Assessment_${ac_table.selectedRow.Q_CODE.replace(/\s+/g, "_")}_Batch_${year}.pdf`;

    /* ======================
       FILTER DATA
    ======================= */
    const filteredData = GetApplicants.data.filter(row =>
      row.STATUS === "Paid" &&
      row.QUALIFICATION === ac_table.selectedRow.Q_CODE &&
      row["BATCH "] === Select_Batch.selectedOptionValue
    );

    /* ======================
       HEADER
    ======================= */
    doc.setFont("Times", "Bold");
    doc.setFontSize(12);
    doc.text("SISTERS OF MARY TECHNICAL EDUCATION INSTITUTE CAVITE, INC.", 105, 20, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("Times", "Normal");
    doc.text("Adlas, Silang 4118, Cavite, Philippines", 105, 26, { align: "center" });
    doc.text("☎ 046-865-2546 / (02)529-8318", 105, 31, { align: "center" });
    doc.text("✉ smsadlas@thesistersofmaryschools.edu.ph", 105, 36, { align: "center" });

    /* ======================
       DATE
    ======================= */
    doc.text(dateStr, 20, 50);

    /* ======================
       ADDRESS
    ======================= */
    let y = 60;
    doc.text("DIR. GERARDO R. MARASIGAN, PhD", 20, y); y += 5;
    doc.text("Provincial Director", 20, y); y += 5;
    doc.text("TESDA-CAVITE Provincial Office", 20, y); y += 5;
    doc.text("Capitol Compound, Brgy. San Agustin,", 20, y); y += 5;
    doc.text("Trece Martirez City, Cavite", 20, y);

    /* ======================
       BODY
    ======================= */
    y += 10;
    doc.text("Dear Dir. Marasigan,", 20, y);

    y += 8;
    doc.text("Let us serve the Lord with joy!", 20, y);

    y += 10;
    doc.text(
      "We would like to request approval for the assessment in Machining NC I. The following are the candidates to be assessed.",
      20,
      y,
      { maxWidth: 170 }
    );

    /* ======================
       TABLE HEADER
    ======================= */
    y += 15;
    doc.setFont("Times", "Bold");
    doc.text("Name", 20, y);
    doc.text("Name of Institution/Company", 120, y);

    doc.setFont("Times", "Normal");

    /* ======================
       TABLE DATA
    ======================= */
    filteredData.forEach((row, index) => {
      y += 7;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      doc.text(`${index + 1}. ${row.NAME}`, 20, y);
      doc.text(row.Institution || "Sisters of Mary School-Adlas, Inc.", 120, y);
    });

    /* ======================
       FOOTER
    ======================= */
    y += 15;
    doc.text(
      "Enclosed herewith are the application form and self-assessment guide for your referral.",
      20,
      y,
      { maxWidth: 170 }
    );

    y += 15;
    doc.text("Thank you and God Bless!", 20, y);

    y += 15;
    doc.text("Very truly yours,", 20, y);

    y += 20;
    doc.setFont("Times", "Bold");
    doc.text("SR. IMELDA B. INSALADA, SM", 20, y);

    doc.setFont("Times", "Normal");
    y += 6;
    doc.text("CAC Manager, SMTEI, Cavite Inc.", 20, y);

    /* ======================
       RETURN BASE64 PDF
    ======================= */
    return doc.output("datauristring");
  }
};
