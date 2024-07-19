document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('objective', document.getElementById('objective').value);
    formData.append('photo', document.getElementById('photo').files[0]);

    fetch('https://your-backend-server.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('status').innerText = 'Submission successful!';
    })
    .catch(error => {
        document.getElementById('status').innerText = 'Submission failed!';
    });
});
