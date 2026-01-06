export default {

	countFromOtherTable(data_table, Allapplicants) {
    if (!data_table) return 0;

    return Allapplicants.filter(row =>
      row.QUALIFICATION === data_table.Q_CODE &&
      row.STATUS === "Competent"
    ).length;
  }

	} 
;
