// function ticket(){
//     const ticketSection = document.getElementById('ticket-section')
//     ticketSection.classList.add('hidden')

//     const ticketSuccess = document.getElementById('ticket-success')
//     ticketSuccess.classList.remove('hidden')
// }
const addSeat = document.getElementsByClassName('add-seat')
let count = 8;
let sum = 0;
let sumAmount =0;

for(const allSeat of addSeat){
    allSeat.addEventListener('click',function(e){
        count = count - 1 ;
        if(count < 0 ){
            return
        }
         
        const seatName =e.target.parentNode.childNodes[1].innerText 
        // console.log(e.target.parentNode.childNodes[1].innerText)
        e.target.parentNode.childNodes[1].style.backgroundColor ='green'
        e.target.seatA
        const seatQuality =e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[1].childNodes[7].childNodes[3].childNodes[7].childNodes[3].innerText 

        const seatPrice = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[1].childNodes[7].childNodes[3].childNodes[7].childNodes[5].innerText 
        
        
        const seatEntry = document.getElementById('seat-entry')
        const div =document.createElement('div')
        const p =document.createElement('p')
        p.innerText= seatName;
        const p2 =document.createElement('p2')
        p2.innerHTML=seatQuality
        const p3 =document.createElement('p3')
        p3.innerText=seatPrice

        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)  
        seatEntry.appendChild(div)

       setInnerText('ticket-count',count) 
    })
    allSeat.addEventListener('click',function(e){
        sum = sum + 1;
        setInnerText('seat-add',sum)
         
    })
    allSeat.addEventListener('click',function(e){
        sumAmount = sumAmount + 550;
        setInnerText('ticket-amount',sumAmount)
    })
    if( sum < 8){
        console.log( 'hobe na mama')
     }

     
}

function setInnerText ( id,value){
    document.getElementById(id).innerText= value;
}

function ticket(){
    hiddenElement('ticket-section')
    hiddenElement('ticket-success')
    showElement('ticket-success') 
}