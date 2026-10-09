// Create the following functions in apiSimulator.ts, ensuring each returns a Promise:

// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
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

// Continue with fetchProductReviews() and fetchSalesReport() functions similarly, adding realistic mock data and a chance for rejection.

// fetchProductReviews(productId: number): Simulates fetching reviews for a product.

export const fetchProductReviews = (productId: number): Promise<{ productId: number; rating: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                // Resolve the Promise with an array of reviews after a 1.5-second delay.
                resolve([
                    { productId, rating: 4 },
                    { productId, rating: 2 },
                ])
            } else {
                // Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
                reject(`Failed to fetch reviews for product ID: ${productId}.`)
            }
        }, 1500)

    });
};


// fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                // Resolve the Promise with a mock sales report after a 1-second delay.
                resolve(
                    { totalSales: 500, unitsSold: 50, averagePrice: 100 }
                )
            } else {
                // Reject randomly with an error message, e.g., "Failed to fetch sales report".
                reject('Failed to fetch sales report')
            }
        }, 1000)

    })
}


