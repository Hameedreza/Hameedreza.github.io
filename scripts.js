let clicked = false;
let list = ['.first','.secend','third'];
const line = document.querySelectorAll('.line');
console.log(list);
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

// for(let i = 0; i < line.length; i++){
//   let part = document.querySelector(list[i]);
//   line[i].addEventListener('click',()=>{
//     openAndClose(line[i],part);
//   })
//   console.log(part);
// }
