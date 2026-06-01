/*
 განახლება async/await სინტაქსით
 ეს არის ყველაზე სუფთა გზა, რომელიც
 საშულებას გვაძლევს ეტაპობრივად დავინახოთ განახლების პროიცესი
*/

async function updateUserName() {
  // მიმართავთ კონკრეტულ მომხმარებელს ID-ით 1
  const API_URL = "https://jsonplaceholder.typicode.com/users/1";

  //მონაცემები, რომლითაც გვინდა არსებულის ჩანაცვლება
  const updateData = {
    name: "ნიკოლოზ ლომიძე",
    email: "nikoloz@example.com",
  };

  try {
    const response = await fetch(API_URL, {
      method: "PUT", //მივუთითებთ PUT მეთოდს
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error("განახელბა ვერ მოხერხდა:" + response.status);
    }
    const data = await response.json();

    console.log("მონაცემები წარმატებით განახლდა:");
    console.log(data); //გამოჩნდება განახლებული ობიექტი
  } catch (error) {
    console.error("შეცდომა:", error);
  }
}
updateUserName();
