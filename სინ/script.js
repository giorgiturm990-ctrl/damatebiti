async function displayPosts() {
  const container = document.getElementById("posts-container");

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if(!response.ok) {
        throw new Error(`სერვერის შეცდომა: ${response.status}`);
    }

    const posts = await response.json();
    container.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.style.border = '1px solid #ccc';
        postElement.style.margin = '10px 0';
        postElement.style.padding = '10px';
        postElement.style.borderRadius = '5px';

        postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>`;

        container.appendChild(postElement);
    });
  
  }catch (error) {
    container.innerHTML = '<p style="color: red;">შეცდომა: ${error.message}</p>' 
  }
}
//ფუნქციის გამოძახება 
displayPosts()
