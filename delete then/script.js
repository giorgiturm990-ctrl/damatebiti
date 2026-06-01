const userIdToDelete = 1;
const API_URL = `https://jsonplaceholder.typicode.com/users/${userIdToDelete}`;

fetch(API_URL, {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("წარმატება: ჩანაწერი წაშლილია (then მეთოდი).");
    } else {
      throw new Error("შეცდომა სტატუსი:" + response.status);
    }
  })
  .catch((error) => {
    console.error("შეცდომა:", error);
  });

/* 
მონდაცემები (body): Delete მოთხოვნისას თითქმის არასდროს ვაგზავნით JSON.stringify()
 რადგან ინდიფიკატორი (ID) უკვე URL-შია.

 სერვერის პასუხი: ბერვი API წარმატებული ნაწილის შემდეგ ცარიელ ობიექტს {}
 ან უბრალოდ სტატუს კოდს აბრუნებს. მაგალითად, jsonPlaceholder გიბრუნებთ
 ცარიელ ობიექტს იმის დასტურად, რომ ოპერაცია შესრულდა.

 უსაფრთხოება: რეალურ აპლიკაციაში წაშლის მოთხოვნას ხშირად
 სჭირდება ავტორიზაციის ტოკენი (tToken), როდესაც header-ში ვამატებთ,
 რათა სერვერმა იცოდეს, რომ გაქვთ წაშლის უფლება.
*/
