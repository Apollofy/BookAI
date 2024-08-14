document.getElementById('generateApiKey').addEventListener('click', function() {
    fetch('/generate-api-key', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        const apiKeyDisplay = document.getElementById('apiKeyDisplay');
        apiKeyDisplay.innerHTML = `Your API Key: <strong>${data.api_key}</strong>`;
        apiKeyDisplay.style.opacity = '0';
        setTimeout(() => {
            apiKeyDisplay.style.opacity = '1';
        }, 100);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('apiKeyDisplay').innerHTML = 'Error generating API key';
    });
});

document.getElementById('theme-toggle-icon').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});
