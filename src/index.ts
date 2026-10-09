// Create the main logic of your application.

// Use fetchProductCatalog() to fetch product details and display them.
import { fetchProductCatalog } from './apiSimulator.js'

// For each product, fetch the reviews using fetchProductReviews(productId).
import { fetchProductReviews } from './apiSimulator.js'

// After fetching products and reviews, retrieve the sales report using fetchSalesReport().
import { fetchSalesReport } from './apiSimulator.js'

//Write a Function to Handle API Calls and Display Data:
function displayData() {
    return fetchProductCatalog()
        .then((products) => {
            console.log('Product Catalog:', products);

            return Promise.all(
                products.map((product) => {
                    return fetchProductReviews(product.id);
                })
            );
        })
        .then((reviews) => {
            // Fetch reviews
            console.log('Product Reviews:', reviews);
            return fetchSalesReport();
        })
        .then((salesReport) => {
            // Fetch sales report
            console.log('Sales Report:', salesReport);
        })
        .catch((error) => {
            // Display error
            console.error('Failed to call API:', error);
})
        .finally(() => {
            console.log('All API calls have been done.');
});

    }

displayData();