const quotes = [
    {
        quote: "Travel expands the mind and fills the gap1.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap2.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap3.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap4.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap5.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap6.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap7.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap8.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap9.",
        author: "Sheda Savage"
    },
    {
        quote: "Travel expands the mind and fills the gap10.",
        author: "Sheda Savage"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.round(1) // 반올림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;