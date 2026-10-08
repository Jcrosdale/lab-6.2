// Create the following functions in apiSimulator.ts, ensuring each returns a Promise:

// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
function fetchProductCatalog() {
    return new Promise ((resolve, reject) => {
        // Resolve the Promise with an array of mock products after a 1-second delay.
        setTimeout(() => {
            // Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: 'Laptop', price: 500 },
                    { id: 2, name: 'Tripod', price: 20 },
                ])
            } else {
                reject('Failed to fetch product catalog.');
            }

        }, 1000)
    });
};

