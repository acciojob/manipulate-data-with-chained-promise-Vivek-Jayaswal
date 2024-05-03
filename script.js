//your JS code here. If required.
//your JS code here. If required.
const output = document.getElementById("output");
function getData (){
	return new Promise((resolve) => {
		setTimeout(()=>{
			resolve([1, 2, 3, 4])
		},3000)
	})
}

getData()
	.then((data) => {
		return new Promise((resolve) => {
			setTimeout(()=>{
				resolve(data.filter((ele)=> ele%2 === 0))
			},1000)
		})
	})
	.then((data) => {
		return new Promise((resolve)=> {
			 setTimeout(() => {
				 resolve(data.map((multipliedNumber) => multipliedNumber*2))
			 },2000)
		})
		
	})
	.then((result) => {
		const output = document.getElementById("output");
		output.innerText = result.join(" ");
	})