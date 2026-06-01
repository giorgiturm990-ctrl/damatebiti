const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    try {
        console.log("მონაცემების წამოღება დაიწყო...");
        
    //1. ვაგზავნით მოთხოვნას და ველოდებით პასუხს
        const response = await fetch(API_URL)

    // ვამოწმებთ სტატუსს
    if (!response.ok) {
        throw new Error("ქსელური შეცდომა:" + response.status);
    }

    //2 ველოდებით json იდან გარდაქმანს
    const posts = await response.json();

    //3.  გამოგვაქ შედეგი
    console.log("მონაცემები მირებულია (async/await):");
    console.log(posts.slice(0, 5)) //პირველი 5 პოსტი;
    
    } catch (error) {
        // შეცდომის დამუშავება 
        console.error("შეცდომის მონაცემის მიღებისას:", error); 
    }
}

//ფუნქციის გამოძახება
getPosts();