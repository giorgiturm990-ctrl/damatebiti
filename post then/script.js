const API_URL = "https://jsonplaceholder.typicode.com/posts";

const newUser = {
  name: "ანი ბერიძე",
  email: "ani@example.com",
};

fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("შეცდომა: " + response.status);
    }
    return response.json();
  })

  .then((data) => {
    console.log("წარმატება! სერვერის პასუხი:", data);
  })
  .catch((error) => {
    console.error("შეცდომა:", error);
  });
