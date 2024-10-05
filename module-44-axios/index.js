/** @format */

// get method

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((error) => {
// 		console.error(`error : ${error}`);
// 	});

async function getPost(){
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
		console.log(res.data)

	} catch (error) {
		console.error(`error : ${error}`);
	}
}

getPost()





















// post method

// const postData = {
// 	title: 'New Post',
// 	body: 'This is the body of the new post',
// 	userId: 1,
// };

// fetch('https://jsonplaceholder.typicode.com/posts', {
// 	method: 'POST',
// 	headers: {
// 		'Content-type': 'application/json',
// 	},
// 	body: JSON.stringify(postData),
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log('Data posted: ', data))
//     .catch(error => {
//         console.error("Error posting data: ", error)
//     })
