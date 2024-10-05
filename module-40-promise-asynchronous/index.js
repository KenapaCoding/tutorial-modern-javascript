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

checkStock('Laptop')
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.error(error);
	});
