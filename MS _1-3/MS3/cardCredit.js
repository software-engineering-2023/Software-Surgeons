
let set = document.querySelector('.set');
set.addEventListener('click', () => {
    let value = document.querySelector('.options').value;
    let ins = document.querySelector('.status')
    let p=document.createElement('div')
    p.classList.add('notif')
    if(value=="Active"){
        let old = document.querySelector('.notif')
        if(old != null)
        ins.removeChild(old)
        p.textContent="The Card is now Active."
        ins.appendChild(p);
    }
    if(value=="Stolen"){
        let old = document.querySelector('.notif')
        if(old != null)
        ins.removeChild(old)
        p.textContent="We will deactivate this card as soon as possible."
        ins.appendChild(p);
    }
    if(value=="Lost"){
        let old = document.querySelector('.notif')
        if(old != null)
        ins.removeChild(old)
        p.textContent="We will deactivate this card as soon as possible, Would you like to file a request for a replacement?"
        let yes=document.createElement('a')
        yes.setAttribute("href","confirm.html")
        yes.classList.add("yes")
        yes.textContent="Request New Card"
        p.appendChild(yes)
        ins.appendChild(p);
    }
})

