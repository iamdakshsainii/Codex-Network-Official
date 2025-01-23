import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function AgeCalculatorPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the age calculator.',
          code: '<input type="date" id="birthdate" /><button id="calculate">Calculate Age</button><div id="result"></div>',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="date" /><button>Calculate Age</button><div id="demo-result"></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the age calculator look good.',
          code: '/* CSS code for styling */\ninput { padding: 10px; margin-right: 10px; }\nbutton { padding: 10px; }',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="date" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Calculate Age</button><div id="demo-result"></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic',
          description: 'Write JavaScript code to calculate the age.',
          code: `// JavaScript code for age calculation
            function calculateAge() {
              const birthdate = new Date(document.getElementById('birthdate').value);
              const today = new Date();
              let age = today.getFullYear() - birthdate.getFullYear();
              const month = today.getMonth() - birthdate.getMonth();
              if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
                age--;
              }
              document.getElementById('result').textContent = 'Your age is: ' + age;
            }`,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="date" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Calculate Age</button><div id="demo-result"></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <input type="date" id="birthdate" />
            <button id="calculate">Calculate Age</button>
            <div id="result"></div>

            /* CSS */
            input { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }

            // JavaScript
            function calculateAge() {
              const birthdate = new Date(document.getElementById('birthdate').value);
              const today = new Date();
              let age = today.getFullYear() - birthdate.getFullYear();
              const month = today.getMonth() - birthdate.getMonth();
              if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
                age--;
              }
              document.getElementById('result').textContent = 'Your age is: ' + age;
            }
            document.getElementById('calculate').addEventListener('click', calculateAge);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="date" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Calculate Age</button><div id="demo-result"></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default AgeCalculatorPage;
