/** @format */

// get method

fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then((res) => {
		if (!res.ok) {
			throw new Error('Network response not ok');
		}
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(`error : ${error}`);
	});

// post method

const postData = {
	title: 'New Post',
	body: 'This is the body of the new post',
	userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Content-type': 'application/json',
	},
	body: JSON.stringify(postData),
})
	.then((response) => response.json())
	.then((data) => console.log('Data posted: ', data))
    .catch(error => {
        console.error("Error posting data: ", error)
    })
