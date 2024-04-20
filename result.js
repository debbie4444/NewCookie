
document.addEventListener('DOMContentLoaded', () => {
    const apiData = localStorage.getItem('apiData');
    

    document.getElementById('result').textContent = apiData;
});