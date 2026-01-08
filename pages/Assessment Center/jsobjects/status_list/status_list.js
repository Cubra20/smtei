export default {

Newapplicants: (data= getAllapplicants.data) => {
	let Status = data;
  
  {
		Status = Status.filter(d => d.STATUS === Text18CopyCopy.text);
	}
	
	{
		Status = Status.filter(d => d.QUALIFICATION ===ac_table.selectedRow.Q_CODE);
	}

	return Status;
},
	Waiting: (data= getAllapplicants.data) => {
	let Status = data;
  
  {
		Status = Status.filter(d => d.STATUS === Text18Copy.valueOf());
	}
	
	{
		Status = Status.filter(d => d.QUALIFICATION ===ac_table.selectedRow.Q_CODE);
	}

	return Status;

	
}
 
}
