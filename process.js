import fs from 'fs';

// Read the products.json file
fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data
    const products = JSON.parse(data);

    // Remove duplicates based on the title
    const uniqueProducts = products.filter((product, index, self) =>
        index === self.findIndex((p) => p.title === product.title)
    );

    // Write the unique products back to products.json
    fs.writeFile('products.json', JSON.stringify(uniqueProducts, null, 2), (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('Updated products.json with unique products.');
    });
});