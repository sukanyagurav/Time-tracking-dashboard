const options=document.querySelectorAll('.option')
const duration=document.querySelectorAll('.acitivity__duration')
const last=document.querySelectorAll('.last')
async function getData(){
    const res= await fetch('./data.json');
    const data = await res.json()
    return data;
}
function printData(id,data){
    duration.forEach((item,index)=>{
        duration[index].innerHTML = data[index].timeframes[id].current
        last[index].innerHTML = `Last ${id.charAt(0).toUpperCase() + id.slice(1)} - ${data[index].timeframes[id].previous} hrs`;
    })
}
options.forEach(item=>{
    
   item.addEventListener('click',async function(e){
    options.forEach(item=>{
        item.classList.remove('active')
    })
    
        if(e.target.id=='daily'){
            e.target.classList.add('active')
            const {data}= await getData()
            printData(e.target.id,data)
        }
        else if(e.target.id=='weekly'){
            const {data}= await getData()
            e.target.classList.add('active')
            printData(e.target.id,data)
        }
        else if(e.target.id=='monthly'){
            const {data}= await getData()
            e.target.classList.add('active')
            printData(e.target.id,data)
        }
        
   })
})
