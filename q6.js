const book = {
    title: "Your Book Title",
    author: "Author Name",
    pages: 300,
    read: false,
};

const keys = Object.keys(book);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${key}: ${book[key]}`);
}