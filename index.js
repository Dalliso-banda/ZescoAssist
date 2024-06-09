/*let zesco = {
"schedule": [
{
"time": "22:00-06:00",
"areas": [
"Barlastone Park Area",
"Kasupe Rivonia Farms",
"Rephdim",
"Chunga",
"parts of Lilanda",
"Chingwere Area",
"parts of Great North Road"
]
},
{
"time": "06:00-14:00",
"areas": [
"Part of Matero East",
"Mandevu",
"part of Chaisa",
"part of Emmasdale on Mansa Roads"
]
},
{
"time": "14:00-22:00",
"areas": [
"Part of Matero East",
"Mandevu",
"part of Chaisa",
"part of Emmasdale on Mansa Roads"
]
}
]
}
*/

/*    
  let timeData = new Date();
let realTime= timeData.getHours();

if(realTime==11&& realTime<12){
    alert('good morning')
 
      } 
 else if(time>12&& time<18){
       alert('good afternoon')
    
    }
        
    
console.log(zesco)
*/
 swal('warning','this is just a prototype of what can be developed into a real world application.prototype only supports kabanana chazanga and matero ')

let groupA= {
    time: "22:00-06:00",
    areas:['matero','chazanga','kabanana']
}

let btn = document.querySelector('button')
let input = document.getElementById('area')
checkTime=(event)=>{
 
  
    event.preventDefault();
 
   if(groupA.areas.includes(input.value.toLowerCase().trim()))
{ 
  swal(`malight yambo yenda so ${groupA.time}`,'please note zesco timetabels cannot be trusted')

  
} 
  else{
  
    swal(`${input.value} is not recognized`)
    btn.style.background='red'

}


  
 
 }
 btn.addEventListener('click',checkTime)
 