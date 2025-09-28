let darkmode = document.getElementById('draklightmode');
let price = document.getElementById('price');
let catagory = document.getElementById('catagory');
let tax = document.getElementById('tax');
let ads = document.getElementById('ads');
let count = document.getElementById('count');
let title = document.getElementById('title');
let create = document.getElementById('create');
let sreachbytitle = document.getElementById('sreachbytitle');
let searchbycatagory = document.getElementById('searchbycatagory');
let searchBy = document.getElementById('searchBy');
let totale = document.getElementById('totale');
let deleteAll = document.querySelector('.deleteAll');
let temp;



//////////////////////////////////////////////////////////////////



//darkome,lightmode



darkmode.addEventListener('click',()=>{
    document.body.classList.toggle('lightmode');
    if(document.body.classList.contains('lightmode'))
    {
        darkmode.textContent = '🌙';
        darkmode.style.background = '#121b31'
    }
    else{
        darkmode.textContent = '☀️';
        darkmode.style.background = '#97b634'
    }
})


// saveData

let Product;
if(localStorage.saved!=null)
{
    Product = JSON.parse(localStorage.getItem('saved'));
   
}
else{
    Product= [];
}


////////////////////
create.addEventListener('click',function(){
    let data={
        Title:title.value,
        Catagory:catagory.value,
        Price:price.value,
        Taxes:tax.value,
        ADS:ads.value,
        totale:totale.textContent,
        
    }
    if(count.value>1)
    {
    for(i=0;i<count.value;i++)
    {
    Product.push(data);
    }}
    else{
        Product.push(data);

    }
localStorage.setItem('saved',JSON.stringify(Product));
showData();
Clear();
})



///////////////////////////////////////////////




//showTotale
function showtotale() {
    if (price.value !== '') {
        let result = (+price.value) + (+tax.value) + (+ads.value);
        totale.textContent = result; 
        totale.style.background = 'green'
    } else {
        totale.textContent += '';
        totale.style.background = 'red'

    }
}





/////////////////////////////////







//showData


function showData() {
    let table = '';

    for (let i = 0; i < Product.length; i++) {
        table += `
            <tr>
               <td>${i + 1}</td>
               <td>${Product[i].Title}</td>
               <td>${Product[i].Catagory}</td>
               <td>${Product[i].Price}</td>
               <td>${Product[i].Taxes}</td>
               <td>${Product[i].ADS}</td>
               <td>${Product[i].totale}</td>
               <td><button>Update</button></td>
               <td><button onclick="delletitem(${i})">Delete</button></td>
            </tr>`;
    }

    document.getElementById('table').innerHTML = table;

   /////delete all the items by one click;
    deleteAll.innerHTML = ''; 
    if (Product.length > 0) {
        let DeleteAllbtn = document.createElement('button');
        DeleteAllbtn.innerHTML = `Delete All (${Product.length})`;
        deleteAll.appendChild(DeleteAllbtn);

        DeleteAllbtn.addEventListener('click', () => {
            Product.splice(0);
            localStorage.setItem('saved', JSON.stringify(Product));
            showData(); 
        });
    }
}





/////////////////////dleteItem
function delletitem(i)
{
 Product.splice(i,1);
 localStorage.setItem('saved',JSON.stringify(Product));
 showData();
}


//clear Function;


function Clear()
{
    title.value = ''    ;
    price.value = ''    ;
    tax.value = ''    ;
    ads.value = ''    ;
    totale.textContent = ''    ;
    catagory.value = ''    ;
    count.value = ''    ;


}








