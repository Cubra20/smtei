export default {
		Applicant: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "Application");
	}
		if(Select1.selectedOptionValue !== 'All')	{
		Status = Status.filter(d => d.QUALIFICATION === Select1.selectedOptionValue);
	}
	return Status;
},
	Paid: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "Paid");
	}
	if(Select1.selectedOptionValue !== 'All')	{
		Status = Status.filter(d => d.QUALIFICATION === Select1.selectedOptionValue);
	}
	return Status;
},	
schedule: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "For Schedule");
	}
	if(Select1.selectedOptionValue !== 'All')	{
		Status = Status.filter(d => d.QUALIFICATION === Select1.selectedOptionValue);
	}
	return Status;
},
	Assessment: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "For Assessment");
	}
	if(Select1.selectedOptionValue !== 'All')	{
		Status = Status.filter(d => d.QUALIFICATION === Select1.selectedOptionValue);
	}
	return Status;
}
}