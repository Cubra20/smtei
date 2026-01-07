export default {

	countFromOtherTable(data_table, Allapplicants) {
    if (!data_table) return 0;

    return {
		competent:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.Q_CODE &&
      row.STATUS === "Competent"
    ).length,
		applicant:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.Q_CODE &&
      row.STATUS === "Applicant"
    ).length,
		schedule:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.Q_CODE &&
      row.STATUS === "Paid"
    ).length,
		assessment:Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.Q_CODE &&
      row.STATUS === "For schedule"
    ).length
  }
	}
 	} 

