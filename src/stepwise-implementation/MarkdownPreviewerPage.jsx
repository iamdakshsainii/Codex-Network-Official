import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function MarkdownPreviewerPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the Markdown previewer.',
          code: '<!-- HTML code for Markdown previewer -->\n<textarea id="markdownInput"></textarea><div id="previewOutput"></div>',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><textarea placeholder="Enter Markdown"></textarea><div id="previewOutput"></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the Markdown previewer look good.',
          code: '/* CSS code for styling */\ntextarea { width: 50%; height: 300px; }\n#previewOutput { width: 50%; height: 300px; border: 1px solid #ccc; }',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><textarea placeholder="Enter Markdown" style="width: 50%; height: 300px;"></textarea><div id="previewOutput" style="width: 50%; height: 300px; border: 1px solid #ccc;"></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic',
          description: 'Write JavaScript code to convert Markdown to HTML.',
          code: `// JavaScript code for Markdown previewer functionality
            function updatePreview() {
              const markdownInput = document.getElementById('markdownInput').value;
              const htmlOutput = marked.parse(markdownInput);
              document.getElementById('previewOutput').innerHTML = htmlOutput;
            }`,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><textarea placeholder="Enter Markdown" style="width: 50%; height: 300px;"></textarea><div id="previewOutput" style="width: 50%; height: 300px; border: 1px solid #ccc;"></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <textarea id="markdownInput"></textarea>
            <div id="previewOutput"></div>

            /* CSS */
            textarea { width: 50%; height: 300px; }
            #previewOutput { width: 50%; height: 300px; border: 1px solid #ccc; }

            // JavaScript
            function updatePreview() {
              const markdownInput = document.getElementById('markdownInput').value;
              const htmlOutput = marked.parse(markdownInput);
              document.getElementById('previewOutput').innerHTML = htmlOutput;
            }
            document.getElementById('markdownInput').addEventListener('input', updatePreview);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><textarea placeholder="Enter Markdown" style="width: 50%; height: 300px;"></textarea><div id="previewOutput" style="width: 50%; height: 300px; border: 1px solid #ccc;"></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default MarkdownPreviewerPage;
