fetch("http://localhost:8080/", {
	method: "POST" ,
	headers:{
		"Content-Type":"application/json",
	},
	// body:JSON.stringify({
	// 	test:'12',
	// 	test2:['213',{s:'das'},12]
	// })
})
.then(res => res.json())
.then(res => {
    console.log(res);
});

fetch("http://localhost:8080/api/test/hellow?1312=12", {
	method: "POST" ,
	// headers:{
	// 	"Content-Type":"application/json",
	// },
	// body:JSON.stringify({
	// 	test:'12',
	// 	test2:['213',{s:'das'},12]
	// })
})
.then(res => res.json())
.then(res => {
    console.log(res);
});
