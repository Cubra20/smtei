export default {
  getBatchByQualification() {
     const qualification = insert_form.formData.QUALIFICATION;
    const currentYear = new Date().getFullYear();

    if (!qualification || !SelectQuery.data) return 1;

    // Count rows with same qualification AND same year
    const count = SelectQuery.data.filter(row => {
      if (!row.QUALIFICATION || !row.APPLICATION_DATE) return false;

      const rowYear = new Date(row.APPLICATION_DATE).getFullYear();

      return (
        row.QUALIFICATION === qualification &&
        rowYear === currentYear
      );
    }).length;

    // Every 10 applicants = new batch
    return Math.floor(count / 10) + 1;
  }
  };
