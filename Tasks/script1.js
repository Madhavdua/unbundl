const list = [
    {
        imageUrl: "./Images/plane-img.jpg",
        price: "Book at the lowest price",
        headline: "SpiceJet Airlines",
        title: "Explore the world!"
    },
    {
        imageUrl: "./Images/Xiaomi-14.webp",
        price: "Starting at  $499",
        headline: "Xiaomi smartphones",
        title: "Xiaomi 14 5G"
    },
    {
        imageUrl: "./Images/AC-img.avif",
        price: "Starting from  $200",
        headline: "Voltas air conditioners",
        title: "Voltas 3-Star AC"
    },
]


// slider
const len = list.length;
let idx = 0;

//dots
const dots = document.getElementById('dots');
for (i = 0; i < len; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('id', 'dot-' + i);
    dots.appendChild(dot);
}

const changeSlide = () => {

    const currdot = document.getElementById('dot-' + idx);
    currdot.classList.add('curr-dot');

    const productImage = document.getElementById('pd-img');
    productImage.src = list[idx].imageUrl;

    const price = document.getElementsByClassName('price');
    price[0].innerText = list[idx].price;

    const headline = document.getElementsByClassName('headline');
    headline[0].innerText = list[idx].headline;


    const title = document.getElementsByClassName('title');
    title[0].innerText = list[idx].title;

}
changeSlide();
const next = () => {
    const currdot = document.getElementById('dot-' + idx);
    currdot.classList.remove('curr-dot');
    if (idx == len - 1) {
        idx = 0;
    }
    else idx++;
    changeSlide();
}
const prev = () => {
    const currdot = document.getElementById('dot-' + idx);
    currdot.classList.remove('curr-dot');
    if (idx == 0) {
        idx = len - 1;
    }
    else idx--;
    changeSlide();
}
setInterval(() => {
    next();
}, 5000);

