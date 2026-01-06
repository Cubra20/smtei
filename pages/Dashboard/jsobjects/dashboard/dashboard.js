export default {
getDashboardMetrics:async () => {
	const Perlevel =await getPerlevel.run();
	const Allqualification =await getAllqualification.run();
	
	
	return{
		sumtotal:Perlevel.length,
		grade7:Perlevel.filter(e => e.PROVINCE === "G7" ).length,
		grade8:Perlevel.filter(e => e.PROVINCE === "G8" ).length,
		grade9:Perlevel.filter(e => e.PROVINCE === "G9" ).length,
		grade10:Perlevel.filter(e => e.PROVINCE === "G10" ).length,
		grade11:Perlevel.filter(e => e.PROVINCE === "G11" ).length,
		grade12:Perlevel.filter(e => e.PROVINCE === "G12" ).length,
		training:Allqualification.filter(a => a.TYPE === "TRAINING CENTER").length,
		assessment:Allqualification.filter(a => a.TYPE === "ASSESSMENT CENTER").length
	} 
}

}