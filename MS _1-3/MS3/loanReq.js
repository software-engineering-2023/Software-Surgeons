let ins = document.querySelector('.add')

let acc = document.querySelector('.acc')
let rej= document.querySelector('.rej')
acc.addEventListener('click',()=> {
    let h = document.createElement('h2')
    h.textContent="Request Accepted"
    h.style.color="green"
    h.style.marginTop="20px"
    h.classList.add('remove')
    curr=document.querySelector('.remove')
    if(curr==null)
        ins.appendChild(h)
    else{
        ins.removeChild(curr)
        ins.appendChild(h)
    }
})


rej.addEventListener('click',()=> {
    let h = document.createElement('h2')
    h.classList.add('remove')
    h.textContent="Request Rejected"
    h.style.color="red"
    h.style.marginTop="20px"
    curr=document.querySelector('.remove')
    if(curr==null)
        ins.appendChild(h)
    else{
        ins.removeChild(curr)
        ins.appendChild(h)
    }
})