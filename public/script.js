// Initialize Mermaid
mermaid.initialize({ startOnLoad: true });

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const resultDiv = document.getElementById('result');
    const processFlowDiv = document.getElementById('processFlow');
    const bottlenecksDiv = document.getElementById('bottlenecks');
    const optimizationDiv = document.getElementById('optimization');

    uploadButton.addEventListener('click', uploadFiles);

    async function uploadFiles() {
        const files = fileInput.files;
        if (files.length === 0) {
            alert('Please select one or more files to upload');
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        resultDiv.innerText = 'Uploading and analyzing files...';
        processFlowDiv.innerHTML = '';
        bottlenecksDiv.innerHTML = '';
        optimizationDiv.innerHTML = '';

        try {
            const response = await fetch('http://localhost:3000/upload-and-analyze', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            resultDiv.innerText = 'Analysis complete!';
            visualizeProcess(data.processFlow);
            showBottlenecks(data.bottlenecks);
            showOptimization(data.optimization);
        } catch (error) {
            console.error('Error:', error);
            resultDiv.innerText = 'Error uploading and analyzing files';
        }
    }

    function visualizeProcess(processFlow) {
        const flowchart = `
            graph TD
            ${processFlow.join('\n')}
        `;

        processFlowDiv.innerHTML = '<h2>Process Flowchart</h2>';

        mermaid.render('processFlowChart', flowchart).then(({ svg }) => {
            processFlowDiv.innerHTML += svg;
        });
    }

    function showBottlenecks(bottlenecks) {
        bottlenecksDiv.innerHTML = '<h2>Process Bottlenecks</h2>';
        bottlenecksDiv.innerHTML += '<ul>' + 
            bottlenecks.map(b => `<li>${b}</li>`).join('') + 
            '</ul>';
    }

    function showOptimization(optimization) {
        optimizationDiv.innerHTML = '<h2>Optimized Integration</h2>';
        optimizationDiv.innerHTML += `<p>${optimization}</p>`;
    }
});