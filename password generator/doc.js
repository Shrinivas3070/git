document.addEventListener('DOMContentLoaded', (event) => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    const uploadButton = document.getElementById('upload-button');
    const uploadStatus = document.getElementById('upload-status');

    let filesToUpload = [];

    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropZone.classList.add('drop-zone--over');
    });

    dropZone.addEventListener('dragleave', (event) => {
        event.preventDefault();
        dropZone.classList.remove('drop-zone--over');
    });

    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropZone.classList.remove('drop-zone--over');
        const files = event.dataTransfer.files;
        handleFiles(files);
    });

    dropZone.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const files = fileInput.files;
        handleFiles(files);
    });

    uploadButton.addEventListener('click', () => {
        uploadFiles(filesToUpload);
    });

    function handleFiles(files) {
        filesToUpload = Array.from(files);
        fileList.innerHTML = '';
        filesToUpload.forEach(file => {
            const listItem = document.createElement('div');
            listItem.textContent = file.name;
            fileList.appendChild(listItem);
        });
    }

    function uploadFiles(files) {
        if (files.length === 0) {
            uploadStatus.textContent = 'No files to upload.';
            return;
        }

        uploadStatus.textContent = 'Uploading...';

        // Simulate file upload
        setTimeout(() => {
            uploadStatus.textContent = 'Files uploaded successfully!';
        }, 2000);

        // Actual implementation to upload files would use fetch or XMLHttpRequest
        // Example:
        // const formData = new FormData();
        // files.forEach(file => formData.append('files[]', file));
        // fetch('/upload', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     uploadStatus.textContent = 'Files uploaded successfully!';
        // })
        // .catch(error => {
        //     uploadStatus.textContent = 'Failed to upload files.';
        // });
    }
});