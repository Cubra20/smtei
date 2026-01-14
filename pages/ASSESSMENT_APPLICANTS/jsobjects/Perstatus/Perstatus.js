export default {
		Applicant: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "Application");
	}
	
	return Status;
	
	
},
	Paid: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "Paid");
	}
	
	return Status;
	
	
},	
schedule: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "For Schedule");
	}
	
	return Status;
	
	
},
	Assessment: (data= SelectQuery.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "For Assessment");
	}
	
	return Status;
	
	
}
}