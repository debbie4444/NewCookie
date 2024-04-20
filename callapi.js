
document.getElementById('imageButton1').addEventListener('click', function() {
    
    console.log('第一张图片被点击');
    

    const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '415a51e001mshe3f09cc1351e34bp126426jsn8937fa849140',
            'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
        }
    };

    fetch(url,options)
        .then(response => {
         
            if (!response.ok) {
                throw new Error('网络请求失败');
            }
            return response.json(); 
        })
        .then(data => {
            
            const textContent = data.text;  

            localStorage.setItem('apiData', textContent);
            
            window.location.href = 'result.html';

        })
        .catch(error => {
            
            document.getElementById('result').textContent = '错误: ' + error.message;
        });
});

document.getElementById('imageButton2').addEventListener('click', function() {
    
    console.log('第二张图片被点击');
    const url = 'https://fortunecookie.p.rapidapi.com/api/v1/fortune';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '415a51e001mshe3f09cc1351e34bp126426jsn8937fa849140',
            'X-RapidAPI-Host': 'fortunecookie.p.rapidapi.com'
        }
    };

    fetch(url,options)
        .then(response => {
            
            if (!response.ok) {
                throw new Error('网络请求失败');
            }
            return response.json(); 
        })
        .then(data => {
           
            const textContent = data.message;  
            
            localStorage.setItem('apiData', textContent);
            
            window.location.href = 'result.html';

        })
        .catch(error => {
            
            document.getElementById('result').textContent = '错误: ' + error.message;
        });
});

document.getElementById('imageButton3').addEventListener('click', function() {
    
    console.log('第三张图片被点击');
    
    const url = 'https://api.adviceslip.com/advice';
    const options = {
        method: 'GET',
       
    };

    fetch(url)
        .then(response => {
            
            if (!response.ok) {
                throw new Error('网络请求失败');
            }
            return response.json(); 
        })
        .then(data => {
            
            const textContent = data.slip.advice;  
            
            localStorage.setItem('apiData', textContent);
            
            window.location.href = 'result.html';

            
        })
        .catch(error => {
           
            document.getElementById('result').textContent = '错误: ' + error.message;
        });
});