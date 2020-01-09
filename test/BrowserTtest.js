fetch("http://localhost/api/test/hellow", {
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


fetch("http://localhost:80/api/test/hellow", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": {
    "asdad": 1,
    "vvxcv": [
      21321,
      21312
    ],
    "ssdc": {
      "dsd": "dsad",
      "dsdw": "dsad"
    }
  }
})
.then(res => res.json())
.then(res => {
    console.log(res);
})
.catch(err => {
  console.log(err);
});