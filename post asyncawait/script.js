async function createUser() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  //1. ვქმნიტ ობიექტს, რომლის გაგზავნაც გვსურს
  const newUser = {
    name: "გიორგი ქართველი",
    email: "giorgi@example.com",
  };

  try {
    // 2. გაგზავნის post მოთხოვნას
    const response = await fetch(API_URL, {
      method: "POST", //მივუთითებთ რომ გავგზავნოთ მონაცემები
      headers: {
        "Content-Type": "application/json",
        //სერვერ ვეუბნებით, რომ json-ს ვაწვდით
      },
      body: JSON.stringify(newUser),
      //ობიექტს ვაქცევთ json ტექსტად
    });

    // 3. ვამოწმებთ წარმატებით დასრულდა თუ არამოთხოვნა
    if (!response.ok) {
      throw new Error("შეცდომა მონაცემების გაგზავნისას:" + response.status);
    }

    //4 ვიღებთ სერვერის პასუხს
    const data = await response.json();

    console.log("სერვერიდან დაბრუნებული პასუხი:");
    console.log(data);
    //სეერვერი დააბრუნებ შექმნილ ობიექტს
    // ახალი ID-ით
  } catch (error) {
    console.error("დაფიქსირდა შეცდომა:", error);
  }
}

createUser();
