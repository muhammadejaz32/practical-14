// QUESTION NO # 01

const book = {
    title: "web with ejaz",
    author: "ejaz afridi",
    pages: 300, // Replace with the actual number of pages
    read: false,
    summary: function(){
        console.log(`title ${this.title} author ${this.author} ${this.pages} pages` )
    }
};

// console.log(book);

//  QUESTION NO # 02

console.log("boook title: ",book.title)

console.log("book author: ", book.author);

book.read = true;

console.log("read property after the updation", book.read)



// question no #03

console.log(`---------------------book 1 summary------------------------`)
book.summary();


// question no # 04

const book2 = {
    title : "mern stack with ejaz",
    author : "khan",
    read:false,
    pages:250,
    summary:function(){
        console.log(`title ${this.title} author ${this.author} ${this.pages} pages`);
    }
}

const book3 = {
    title: "mobile application",
    author:"samad",
    read:false,
    pages:500,
    summary:function(){
        console.log(`title ${this.title}, author ${this.author}, ${this.pages} pages`)
    }
}
console.log(`\n---------------------book 2 summary------------------------`)
book2.summary();
console.log(`\n---------------------book 3 summary------------------------\n`)
book3.summary();