import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function EcommerceProductFilterPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the product filter.',
          code: `
            <div id="product-container">
              <input type="text" id="searchInput" placeholder="Search products..." />
              <div id="productList"></div>
            </div>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-product-container"><input type="text" placeholder="Search products..." /><div id="demo-productList"></div></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the product filter look good.',
          code: `
            /* CSS code for styling */
            #product-container { text-align: center; }
            #productList { margin-top: 20px; }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-product-container" style="text-align: center;"><input type="text" placeholder="Search products..." /><div id="demo-productList" style="margin-top: 20px;"></div></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (React)',
          description: 'Write React code to filter products based on search input.',
          code: `
            // JavaScript code for product filter functionality using React
            import React, { useState } from 'react';

            function ProductFilter() {
              const [searchTerm, setSearchTerm] = useState('');
              const products = [
                { title: 'Product 1', category: 'Electronics' },
                { title: 'Product 2', category: 'Books' },
                { title: 'Product 3', category: 'Electronics' },
                { title: 'Product 4', category: 'Clothing' },
              ];

              const filteredProducts = products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase())
              );

              return (
                <div id="product-container">
                  <input type="text" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                  <div id="productList">
                    {filteredProducts.map(product => (
                      <div key={product.title}>
                        {product.title} ({product.category})
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-product-container"><input type="text" placeholder="Search products..." /><div id="demo-productList"></div></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <div id="product-container">
              <input type="text" id="searchInput" placeholder="Search products..." />
              <div id="productList"></div>
            </div>

            /* CSS */
            #product-container { text-align: center; }
            #productList { margin-top: 20px; }

            // JavaScript
            import React, { useState } from 'react';

            function ProductFilter() {
              const [searchTerm, setSearchTerm] = useState('');
              const products = [
                { title: 'Product 1', category: 'Electronics' },
                { title: 'Product 2', category: 'Books' },
                { title: 'Product 3', category: 'Electronics' },
                { title: 'Product 4', category: 'Clothing' },
              ];

              const filteredProducts = products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase())
              );

              return (
                <div id="product-container">
                  <input type="text" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                  <div id="productList">
                    {filteredProducts.map(product => (
                      <div key={product.title}>
                        {product.title} ({product.category})
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-product-container"><input type="text" placeholder="Search products..." /><div id="demo-productList"></div></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default EcommerceProductFilterPage;
