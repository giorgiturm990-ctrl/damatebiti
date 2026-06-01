async function showRawJson() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await res.json();


//JSON.stringify-ს მესამე პარამეტრი (2) ალამაზებს ტექსტს და აკეტებს დასორებას
document.getElementById('status').innerText = JSON.stringify(data, null, 2);    
}
showRawJson();