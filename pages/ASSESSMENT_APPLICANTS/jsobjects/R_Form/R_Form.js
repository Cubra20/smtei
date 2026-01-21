export default {
  generateRequestForm() {
    const { jsPDF } = window.jspdf;

    // A4 LANDSCAPE
    const doc = new jsPDF("p", "mm", "A4");

    const PAGE_WIDTH = 210;
		const PAGE_HEIGHT = 10;
    const MARGIN_X = 12;
		
		/* ======================
       FILTER DATA
    ======================= */
    const filteredData = SelectQuery.data.filter(row =>
      row.STATUS === "Paid" &&
      row.QUALIFICATION === Select_Quali.selectedOptionValue &&
      row["BATCH "] === Select_Batch.selectedOptionValue
    )
		
		// GROUP & COUNT COC PER APPLICANTS
   const cocCounts = filteredData.reduce((acc, row) => {
  if (!row.COC) return acc;

  acc[row.COC] = (acc[row.COC] || 0) + 1;
  return acc;
   }, {});
  // FORMAT: COC TITLE – COUNT
  const cocSummaryText = Object.entries(cocCounts)
  .map(([coc, count]) => `${coc} – ${count}`)
  .join(", ");

// count candidates
		const candidateCount = SelectQuery.data.filter(row =>
      row.STATUS === "Paid" &&
      row.QUALIFICATION === Select_Quali.selectedOptionValue &&
      row["BATCH "] === Select_Batch.selectedOptionValue
    ).length;
		
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);

    let y = 15;
		

		
    // ================= HEADER =================
    doc.setFontSize(10);
    doc.text("REPUBLIC OF THE PHILIPPINES", PAGE_WIDTH/2, y, { align: "center" });

    y += 4;
    doc.text("TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY", PAGE_WIDTH / 2, y, { 	     align: "center" });

    y += 4;
    doc.text("PROVINCE OF CAVITE", PAGE_WIDTH / 2, y, { align: "center" });

    y += 6;
    doc.setFontSize(10);
    doc.text("APPLICATION FORM SLIP", PAGE_WIDTH / 2, y, { align: "center" });

    y += 4;
    doc.setFontSize(10);
    doc.text("(ASSESSMENT CENTER)", PAGE_WIDTH / 2, y, { align: "center" });

    y += 14;

    // ================= ROW 1 =================
    doc.setFontSize(10);
    doc.text("NAME OF SCHOOL/TRAINING CENTER:", MARGIN_X, y);
		
		doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(
      "Sisters of Mary School-Adlas, Inc.",
      MARGIN_X + 100,y
    );
    doc.line(MARGIN_X + 70, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 8;

    // ================= ROW 2 =================
		// FULL TEXT (for wrapping)
			const qualificationText = Select_Quali.selectedOptionValue;
		const part2 = cocSummaryText ? ` (${cocSummaryText}). ` : ". ";
		
const fullText = qualificationText + part2 ;

// WRAP TEXT (LEFT ALIGNED)
const wrappedLines = doc.splitTextToSize(fullText,MARGIN_X + 70);

		
// DRAW LINE BY LINE (ALLOW BOLD QUALIFICATION)
wrappedLines.forEach((line, i) => {
  let x = MARGIN_X;
  const lineY = y ;

  if (line.includes(qualificationText)) {
    const before = line.split(qualificationText)[0];
    const after = line.split(qualificationText)[1];
		doc.setFont("helvetica","Bold")
    // NORMAL BEFORE
    doc.setFont("helvetica", "Bold");
    doc.text(before,MARGIN_X + 115, y);
    x += doc.getTextDimensions(before).w;

    // BOLD QUALIFICATION
    doc.setFont("helvetica", "Bold");
    doc.text(qualificationText,MARGIN_X + 115, y);
    x += doc.getTextDimensions(qualificationText).w;
		
    // NORMAL AFTER
		doc.setFontSize(10);
    doc.setFont("helvetica", "Normal");
    doc.text(after,MARGIN_X + 135, y - 4);
  } else {
    doc.setFont("helvetica", "Normal");
    doc.text(line, MARGIN_X + 138, lineY);
  }
});


		
	
		doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Number of Candidates:", MARGIN_X, y);
		doc.setFontSize(12);
		doc.setFont("helvetica", "bold");
		doc.text(String(candidateCount), MARGIN_X + 60, y);
    doc.line(MARGIN_X + 40, y + 1.5, MARGIN_X + 85, y + 1.5);
		
		doc.setFont("helvetica", "normal");
		doc.setFontSize(10);
    doc.text("Qualification:", PAGE_WIDTH / 2, y);
    doc.line(PAGE_WIDTH / 2 + 20, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 8;

    // ================= ROW 3 =================
		doc.setFontSize(10);
		doc.setFont("helvetica", "normal");
    doc.text("TVI's Representative:", MARGIN_X, y);
		
		doc.setFontSize(12)
    doc.setFont("helvetica", "bold");
    doc.text("Aristotle Collado", MARGIN_X + 45, y);
    doc.line(MARGIN_X + 40, y + 1.5, MARGIN_X + 85, y + 1.5);
		
		doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Signature:", MARGIN_X + 93, y);
    doc.line(MARGIN_X + 110, y + 1.5, MARGIN_X + 130, y + 1.5);
		
		doc.setFontSize(10);
    doc.text("Contact Details", MARGIN_X + 130, y);
    doc.text("09171631774", PAGE_WIDTH - MARGIN_X, y, { align: "right" });
    doc.line(MARGIN_X + 155, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 8;

    // ================= ROW 4 =================
    doc.text("Nature of Scholarship:", MARGIN_X, y);

    doc.setFont("helvetica", "bold");
		doc.setFontSize(12);
    doc.text("Regular", MARGIN_X + 55, y);
    doc.line(MARGIN_X + 40, y + 1.5, MARGIN_X + 85, y + 1.5);
		
		doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Trainer", PAGE_WIDTH / 2, y);
    doc.line(PAGE_WIDTH / 2 + 17, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 8;

    // ================= ROW 5 =================
    doc.text("Date and Time:", MARGIN_X, y);
    doc.line(MARGIN_X + 40, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 8;

    // ================= ROW 6 =================
    doc.text("Remarks:", MARGIN_X, y);
    doc.line(MARGIN_X + 40, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 8;

    // ================= ROW 7 =================
    doc.text("Assessment Center:", MARGIN_X, y);
		
		doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("SMTEI Cavite,Inc. - Boystown", MARGIN_X + 50, y);
    doc.line(MARGIN_X + 40, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 10;

    // ================= ROW 8 =================
		doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Date of Assessment:", MARGIN_X, y);
    doc.line(MARGIN_X + 40, y + 1.5, PAGE_WIDTH / 2 + 15, y + 1.5);

    doc.text("Received By:", PAGE_WIDTH / 2 + 20, y);
		doc.text("Name/Signature/Date", PAGE_WIDTH / 2 + 50, y+7);
    doc.line(PAGE_WIDTH / 2 + 40, y + 1.5, PAGE_WIDTH - MARGIN_X, y + 1.5);

    y += 8;

    // ================= ROW 9 =================
    doc.text("Assessor:", MARGIN_X, y);
    doc.line(MARGIN_X + 40, y + 1.5, PAGE_WIDTH / 2 + 15,y + 1.5);

    y += 8;

    // ================= ROW 10 =================
    doc.text("TESDA Representative:", MARGIN_X, y);
    doc.line(MARGIN_X + 40, y + 1.5, PAGE_WIDTH / 2 + 15, y + 1.5);

   return doc.output("datauristring");
  }
};
