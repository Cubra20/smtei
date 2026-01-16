export default {

filteStatus: (data= getStatus.data) => {
	let Status = data;
	{
		Status = Status.filter(g => g.STATUS === "For Assessment");
	}
	
	{
		Status = Status.filter(d => d.QUALIFICATION === List2.triggeredItem.Q_CODE);
	}
	return Status;
	
	
}
 	} 

