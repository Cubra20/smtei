export default {

filteStatus: (data= getStatus.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "Applicantion");
	}
	
	if(Select_quali.selectedOptionValue !== 'All')	{
		Status = Status.filter(d => d.QUALIFICATION === Select_quali.selectedOptionValue);
	}
	return Status;
	
	
}
 	} 

