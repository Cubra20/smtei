export default {
	
	generatePDF () {
	 const pdf = jspdf.jsPDF();
		pdf.text("hello",10,10);
		
		return pdf.output("dataurlstring")
	}
}