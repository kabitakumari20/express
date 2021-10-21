const express=require("express");
const app=express();
const fs = require('fs');
app.use(express.json());
app.use(express.text());
app.get('/',(req,res)=>{
	const read = fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read);
	list1=[]
	for (i in convert){
		for (j of convert[i]["submission"]){
			list1.push(j["usersummision"])
		}
	}
	res.send(list1)
})
app.get('/command/:id/:courseid/',(req,res)=>{
	const read=fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read)
	const idVar=req.params.id
	const courseidVar=req.params.courseid
	list1=[]
	list1.push(convert[idVar-1].submission[courseidVar-1])
	res.send(list1)
})
app.get('/command/',(req,res)=>{
	const read =fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read);
	list1=[]
	for (i in convert){
		console.log(i)
		for (j in convert[i].submission){
		
			list1.push(convert[i].submission[j].usersummision)
		}
	}
	res.send(list1)
})
app.get('/:id/',(req,res)=>{
	const read = fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read);
	const idVar=req.params.id
list1=[]
for (i in convert){
	if (convert[i].id==idVar){
		delete convert[i].submission
		list1.push(convert[i])
		console.log(list1)

	}
}
res.send(list1)
})
app.put('/ajith/:id/:courseid',(req,res)=>{
	const read = fs.readFileSync('availableCourses.json');
	const convert = JSON.parse(read);
	const idVar=req.params.id
	const courseidVar=req.params.courseid
	convert[idVar-1].submission[courseidVar-1]["name"]=req.body
	delete convert[idVar-1].submission[courseidVar-1].usersummision
	const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));
	res.send(convert[idVar-1].submission[courseidVar-1])
})

 app.post('/aji/:id',(req,res)=>{
	const read=fs.readFileSync('availableCourses.json');
	const convert =JSON.parse(read);
	const idVar=req.params.id
	const newDict={"name":"qqqq","age":16,"colour":"blue"};
	convert[idVar-1].push(newDict);
	const write=fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));
		res.send(convert[idVar-1])
})

app.listen(8080,()=>{
	console.log("server stated in port 8000")
})
