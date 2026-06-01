// 1. ვქმნით promise-ს  (იგივე ლოგიკა)
   const myPromise = new Promise ((resolve) => {
    setTimeout(() => {
        resolve ("მონაცემები მიღებულია")
    }, 2000);
   });  

   // 2. ვქმნით ასინქრონულ ფუნქციას დამუსავებისთვის
   async function handleData () {
    try {
       console.log("პროცესი დაიწყო (ველოდებით 2 წამი)...");
      
       // პროგრამა აქ გაჩერდება, სანამ 2 წამი არ გავა   
       const result = await myPromise;
       
       // ეს ხაზი მხოლოდ მას შემდეგ გაეშვება, რაც result შეივსება
       console.log("შედეგი (async/await):", result);     
    } catch (error) {
        console.error("შეცდომა:", error);      
    }
   };
handleData();   