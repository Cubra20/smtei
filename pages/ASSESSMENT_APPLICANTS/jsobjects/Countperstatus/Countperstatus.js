export default {
countStatus:async () => {
	const count =await SelectQuery.run();
	
	
	return{
		
		Applicant:count.filter(row => row.STATUS === "Application").length,
		Paid:count.filter(c => c.STATUS === "Paid" ).length,
		Schedule:count.filter(c => c.STATUS === "For Schedule" ).length,
		Assessment:count.filter(c => c.STATUS === "For Assessment" ).length,
	
	
	} 
	
}


}