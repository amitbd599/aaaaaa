fetch('https://crud.teamrabbil.com/api/v1/ReadProduct')
	.then(response => response.json())
	.then(x => console.log(x.data[0]))
	.catch(err => console.error(err));
