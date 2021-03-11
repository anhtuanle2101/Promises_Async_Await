//Number Fact

const NumberFactURL ='http://numbersapi.com'
const content = document.querySelector('.content');
axios.get(`${NumberFactURL}/21?JSON`)
.then(res=>{
    const newP = document.createElement('p');
    newP.textContent = res.data;
    content.append(newP);
})
.catch(err=>console.log(err));

const multipleNumbers = document.querySelector('.multiple-numbers');
axios.get(`${NumberFactURL}/10..20?JSON`)
.then(res=>{
    Object.keys(res.data).forEach(key=>{
        const newP = document.createElement('p');
        newP.textContent = res.data[key];
        multipleNumbers.append(newP);
    })
    
})
.catch(err=>console.log(err));

