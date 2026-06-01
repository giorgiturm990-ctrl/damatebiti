// ეს მიდგომა ყველაზე მოსახმარებელია რეალურ პროექტში შეცდომების მისამართად

async function deleteUser(userId) {
  const API_URL = `https://jsonplaceholder.typicode.com/users/${userId}`;

  try {
    const response = await fetch(API_URL, {
      method: "DELETE", //მივუთითებთ DELETE მეთოდს
    });

    //სერვერი ხშირად აბრუნებს 200 (ok) ან 204 (No content) წარმატებული წაშლისას
    if (response.ok) {
      console.log(`ჩანაწერი ID-ით ${userId} წარამტებით წაიშალა.`);
    } else {
      throw new Error("წაშლა ვერ მოხერხდა:" + response.status);
    }
  } catch (error) {
    console.error("დაფიქსირდა შეცდომა წაშლისას:", error);
  }
}
//წავშალოთ მომხმარებელის ID რომელიცაა 1
deleteUser(1);
