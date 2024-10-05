/** @format */

function checkStock(product) {
	return new Promise((resolve, reject) => {
		console.log(`Checking stock for ${product}`);

		// simulasi mengecek stok (butuh 2 detik)
		setTimeout(() => {
			const stockAvailable = false;

			if (stockAvailable) {
				resolve(`${product} is available in stock`);
			} else {
				reject(`${product} is out of stock`);
			}
		});
	});
}

async function main(){
	try {
		const data = await checkStock("Laptop")
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}

main()


// checkStock('Laptop')
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});
