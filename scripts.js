let clicked = false;
let hButton = false;
let list = ['.first','.secend','third'];
const line = document.querySelectorAll('.line');
const button = document.querySelector('.button');
const hOne = document.querySelector('.one');
const hTwo = document.querySelector('.two');
const navCol = document.querySelector('.nav-collapse');


line[0].addEventListener('click',(e)=>{
  let partOne = document.querySelector('.first');
  openAndClose(line[0],partOne);
})
line[1].addEventListener('click',(e)=>{
  let partTwo = document.querySelector('.second');
  openAndClose(line[1],partTwo);
})
line[2].addEventListener('click',(e)=>{
  let partThree = document.querySelector('.third');
  openAndClose(line[2],partThree);
})
line[3].addEventListener('click',(e)=>{
  let partThree = document.querySelector('.fourth');
  openAndClose(line[3],partThree);
})

const openAndClose = (line, part)=>{
  if(clicked){
    part.style.display = 'block'
    part.style.height = '100%';
    line.style.width = '60%';
    line.style.backgroundColor = '#6D7072';
    clicked = false;
  }else{
    part.style.display = 'none';
    line.style.marginTop = '5rem';
    line.style.backgroundColor = '#FA6122';
    line.style.width = '30%';
    part.style.height = '0%';
    clicked = true;
  }
  console.log(clicked);
}

button.addEventListener('click', ()=>{
  if(!hButton){
    hOne.style.transform =  'rotate(45deg) translate(6px,8px)';
    hOne.style.transition = 'all .4s ease';
    hTwo.style.transform = 'rotate(-45deg) translate(4px,-7px)';   
    hTwo.style.transition = 'all .4s ease';
    button.style.boxShadow = '5px 10px #000;'
    navCol.style.left = '0'
    hButton = true;
  }else{
    hOne.style.transform =  'none';
    hOne.style.transition = 'all .4s ease';
    hTwo.style.transform = 'none';    
    hTwo.style.transition = 'all .4s ease';
    navCol.style.left = '-80rem'
    hButton = false;
  }

})