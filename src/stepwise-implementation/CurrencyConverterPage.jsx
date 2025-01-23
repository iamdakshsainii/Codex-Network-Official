import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function CurrencyConverterPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the currency converter.',
          code: `
            <div id="converter-container">
              <input type="number" id="amount" placeholder="Enter amount" />
              <select id="fromCurrency"></select>
              <select id="toCurrency"></select>
              <button id="convertBtn">Convert</button>
              <div id="result"></div>
            </div>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-converter-container"><input type="number" placeholder="Enter amount" /><select></select><select></select><button>Convert</button><div id="demo-result"></div></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the currency converter look good.',
          code: `
            /* CSS code for styling */
            #converter-container { text-align: center; }
            input, select { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-converter-container" style="text-align: center;"><input type="number" placeholder="Enter amount" style="padding: 10px; margin-right: 10px;" /><select style="padding: 10px; margin-right: 10px;"></select><select style="padding: 10px; margin-right: 10px;"></select><button style="padding: 10px;">Convert</button><div id="demo-result"></div></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (API)',
          description: 'Write JavaScript code to convert currencies using an API.',
          code: `
            // JavaScript code for currency converter functionality using API
            async function convertCurrency() {
              const amount = document.getElementById('amount').value;
              const fromCurrency = document.getElementById('fromCurrency').value;
              const toCurrency = document.getElementById('toCurrency').value;
              const response = await fetch('https://api.exchangerate-api.com/v4/latest/' + fromCurrency);
              const data = await response.json();
              const rate = data.rates[toCurrency];
              const result = amount * rate;
              document.getElementById('result').textContent = \`\${result.toFixed(2)} \${toCurrency}\`;
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-converter-container"><input type="number" placeholder="Enter amount" style="padding: 10px; margin-right: 10px;" /><select style="padding: 10px; margin-right: 10px;"></select><select style="padding: 10px; margin-right: 10px;"></select><button style="padding: 10px;">Convert</button><div id="demo-result"></div></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <div id="converter-container">
              <input type="number" id="amount" placeholder="Enter amount" />
              <select id="fromCurrency"></select>
              <select id="toCurrency"></select>
              <button id="convertBtn">Convert</button>
              <div id="result"></div>
            </div>

            /* CSS */
            #converter-container { text-align: center; }
            input, select { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }

            // JavaScript
            async function convertCurrency() {
              const amount = document.getElementById('amount').value;
              const fromCurrency = document.getElementById('fromCurrency').value;
              const toCurrency = document.getElementById('toCurrency').value;
              const response = await fetch('https://api.exchangerate-api.com/v4/latest/' + fromCurrency);
              const data = await response.json();
              const rate = data.rates[toCurrency];
              const result = amount * rate;
              document.getElementById('result').textContent = \`\${result.toFixed(2)} \${toCurrency}\`;
            }
            const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];
            const fromSelect = document.getElementById('fromCurrency');
            const toSelect = document.getElementById('toCurrency');
            currencies.forEach(currency => {
              const option1 = document.createElement('option');
              option1.value = currency;
              option1.textContent = currency;
              fromSelect.appendChild(option1);
              const option2 = document.createElement('option');
              option2.value = currency;
              option2.textContent = currency;
              toSelect.appendChild(option2);
            });
            document.getElementById('convertBtn').addEventListener('click', convertCurrency);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-converter-container"><input type="number" placeholder="Enter amount" style="padding: 10px; margin-right: 10px;" /><select style="padding: 10px; margin-right: 10px;"></select><select style="padding: 10px; margin-right: 10px;"></select><button style="padding: 10px;">Convert</button><div id="demo-result"></div></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default CurrencyConverterPage;
