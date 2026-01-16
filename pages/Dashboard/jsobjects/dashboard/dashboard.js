export default {
getDashboardMetrics:async () => {
	const Perlevel =await getPerlevel.run();
	const Assessment =await getAssessment.run();
	const Training =await getTraining.run();
	const status =await getStatus.data
	
	return{
		sumtotal:Perlevel.length,
		grade7:Perlevel.filter(c => c.GRADE_LEVEL === "G7" ).length,
		grade8:Perlevel.filter(c => c.GRADE_LEVEL === "G8" ).length,
		grade9:Perlevel.filter(c => c.GRADE_LEVEL === "G9" ).length,
		grade10:Perlevel.filter(c => c.GRADE_LEVEL === "G10" ).length,
		grade11:Perlevel.filter(c => c.GRADE_LEVEL === "G11" ).length,
		grade12:Perlevel.filter(c => c.GRADE_LEVEL === "G12" ).length,
		training:Training.filter(a => a.TYPE === "TRAINING CENTER").length,
		assessment:Assessment.filter(a => a.TYPE === "ASSESSMENT CENTER").length,
		st_assessment:status.filter(g => g.STATUS === "Application").array
	} 
}


}