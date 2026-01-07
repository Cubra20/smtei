export default {

	countFromOtherTable(data_table, Allapplicants) {
    if (!data_table) return 0;

    return {
		competent:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.QUALIFICATION &&
      row.STATUS === "Competent"
    ).length,
		applicant:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.QUALIFICATION &&
      row.STATUS === "Applicant"
    ).length,
		schedule:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.QUALIFICATION &&
      row.STATUS === "Paid"
    ).length,
		assessment:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.QUALIFICATION &&
      row.STATUS === "For schedule"
    ).length
  }
	}
 	} 

