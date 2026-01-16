export default {
countStatus:async () => {
	const count =await getStatus.run();
	
	
	return{
		
		Applicant:count.filter(row => row.STATUS === "Application").length,
		Paid:count.filter(c => c.STATUS === "Paid" ).length,
		Schedule:count.filter(ROW => ROW.STATUS === "For Schedule" &&
												 ROW.QUALIFICATION === List2.triggeredItem.Q_CODE).length,
		Assessment:count.filter(row => row.STATUS === "For Assessment" &&
												 row.QUALIFICATION === List2.triggeredItem.Q_CODE).length,
	
	
	} 
	
}


}