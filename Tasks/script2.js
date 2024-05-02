let sum = 0;
let taken = 0;

const total = document.getElementById('total');
total.innerText = "Count: " + taken + "  $ " + sum;


const list = [
    {
        imageUrl: "./Images/chcolates/5star1.jpg",
        price: 90,
        name: "5 Star (pack of 5)",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/amul1.webp",
        price: 80,
        name: "Amul Dark",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/amul2.jpg",
        price: 90,
        name: "Fruit and Nut",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/amul3.webp",
        price: 100,
        name: "Amul Bitter",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/bornville.webp",
        price: 110,
        name: "Bournville",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/cacoa1.jpg",
        price: 90,
        name: "Amul CaoCao",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/crispelo1.jpg",
        price: 40,
        name: "Crispello",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/gems1.webp",
        price: 50,
        name: "Gems (pack of 5)",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/kitkat.jpg",
        price: 45,
        name: "Kitkat (pack of 3)",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/milk-bites1.webp",
        price: 80,
        name: "Dairy Milk Bites",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/silk1.jpg",
        price: 85,
        name: "Dairy Milk Silk",
        count: 0,
    },
    {
        imageUrl: "./Images/chcolates/snickers1.jpg",
        price: 90,
        name: "Snickers (pack of 5)",
        count: 0,
    },
]


const add = (e) => {
    if(taken==8){
        alert("Limit of 8 already reached");
        return;
    }
    let id = e.target.id;
    let i = Number(id.substring(5, id.length));
    sum += list[i].price;
    list[i].count++;
    if(list[i].count==1){
        document.getElementById('btn2-'+i).classList.remove('disable');
        document.getElementById('count-'+i).classList.remove('disable');
    }
    taken++;
    update(i);
}
const remove = (e) => {
    let id = e.target.id;
    let i = Number(id.substring(5, id.length));
    sum -= list[i].price;
    list[i].count--;
    if(list[i].count==0){
        document.getElementById('btn2-'+i).classList.add('disable');
        document.getElementById('count-'+i).classList.add('disable');
    }
    taken--;
    update(i);
}

const update = (i) => {
    const total = document.getElementById('total');
    total.innerText = "Count: " + taken + "  $ " + sum;
    
    const curr=document.getElementById('count-'+i);
    curr.innerText=list[i].count;
}

//card items
const shop = document.getElementsByClassName('shop')[0];
for (let i = 0; i < list.length; i++) {
    const choc = document.createElement('div');
    choc.classList.add('choc');
    
    const img = document.createElement('img');
    img.src = list[i].imageUrl;

    const choc_body = document.createElement('div');
    choc_body.classList.add('choc-body');

    const choc_title = document.createElement('h2');
    choc_title.innerText = list[i].name;
    choc_title.classList.add('choc-title');

    const choc_price = document.createElement('div');
    choc_price.innerText = "$ " + list[i].price;
    choc_price.classList.add('choc-price');

    const getBtn = document.createElement('div');
    getBtn.classList.add('get-btn');
    const btn1 = document.createElement('button');
    btn1.innerText = '+';
    btn1.classList.add('add');
    btn1.id = 'btn1-' + i;
    btn1.addEventListener("click", add);
    
    
    const btn2 = document.createElement('button');
    btn2.innerText = '-';
    btn2.classList.add('remove');
    btn2.classList.add('disable');
    btn2.id = 'btn2-' + i;
    btn2.addEventListener("click",remove);
    
    const count = document.createElement('p');
    count.id='count-'+i;
    count.classList.add('disable');
    count.classList.add('count');
    count.innerText = list[i].count;
    getBtn.appendChild(btn1);
    getBtn.appendChild(count);
    getBtn.appendChild(btn2);

    choc_body.appendChild(choc_title);
    choc_body.appendChild(choc_price);
    choc_body.appendChild(getBtn);

    choc.appendChild(img);
    choc.appendChild(choc_body);

    shop.appendChild(choc);
}


