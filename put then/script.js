const API_URL = "https://jsonplaceholder.typicode.com/users/1";

const updateData = {
  name: "ლაშა გიორგაძე",
  email: "lasha@example.com",
};

fetch(API_URL, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("შეცდომა: " + response.status);
    }
    return response.json();
  })
  .then((result) => {
    console.log("განახლებული პასუხი(then):", result);
  })
  .catch((error) => {
    console.error("შეცდომა:", error);
  });

  /* 
  URL-ის სტრუქტურა: fetch-ში აუცილებლად
  უნდა ეწეროს კონკრეტული ID (მაგ:/user/1),
  წინააღმდეგ შემთხვევაში სერვერმა არ იცის,
  რომელი ჩანაწერი გაანახლოს.
  
  PUT vs PATCH
   
  PUT: გამოიყენება სრული ჩანაცვლებისთვის.
  თუ თქვენ მხოლოდ სახელს გააგზავნით და ელფოსტას გამოტოვებთ
  ზოგიერთმა სერვერმა შეიძლება ელფოსტა წაშალოს ან ცარიელი დატოვოს.
  
  PATCH: გამოიყენება მონაცემის ნაწილობრივი განახლებისთვის
  (მაგალითად, მხოლოდ სახელის შესაცვლელად).

  სერვერის პასუხი: წარმატებული PUT მოთხოვნის შემდეგ,
  სერვერი ჩვეულებრივ აბრუნებს განახლებულ ობიექტს ან სტატუს 
  კოდს 200 ok. ---
  */
