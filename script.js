const color = document.querySelector('.color');
const colorMode = document.querySelector('.color-mode');
const randomColor = document.querySelector('.random-color');
const remove = document.querySelector('.remove');
const clear = document.querySelector('.clear');
const textOfRange = document.querySelector('.text-of-range');
const range = document.querySelector('.range');
const gridBox = document.querySelector('.grid-box');
const buttons = document.querySelectorAll('#btn');
const levi = document.querySelector('.Levitation-mode')


//Levitation mode
levi.addEventListener('click',leviFunc);

// function getGrey(){
//   const color = ["#cccccc","#b8b8b8","#adadad","#999999","#8f8f8f","#7a7a7a","#666666","#525252","#3d3d3d","#333333"];

//    for(let i =0; i<color.length;i++){
//     return color[i]
//    }
// }
// getGrey()

function leviFunc(){
  const cubes = document.querySelectorAll('.cube');
  let op = 0.01;
  cubes.forEach((cube) =>{
    cube.addEventListener('mouseover',function(){
      cube.style.backgroundColor = `rgb(0,0,0,${op}`;
      op+=0.001;
    })
    
  })
}


//color mode
colorMode.addEventListener('click',defColor);
function defColor(){
  const color = "black";
  const cubes = document.querySelectorAll('.cube');
  cubes.forEach((cube) =>{
    cube.addEventListener('mouseover',function(){
      cube.style.backgroundColor = color;
    })
  })
}



// clear
clear.addEventListener('click', removeAll);

function removeAll(){
  const cubes = document.querySelectorAll('.cube');
  const color = "white";

  cubes.forEach((cube) =>{
    cube.style.backgroundColor = color;
  })
}

//remove
remove.addEventListener('click',removeOneBlock);
function removeOneBlock(){
  const cubes = document.querySelectorAll('.cube');

  cubes.forEach((cube) =>{
    cube.addEventListener('mouseover',function(){
      const color = "white";
      cube.style.backgroundColor = color;
    })
  })
}


//update size
range.addEventListener('input', updateSize);

function updateSize(){
  const value = range.value;
  textOfRange.textContent = `${value} x ${value}`;
  gridBox.innerHTML = '';

  for(let i = 0; i<value*value;i++){
    const cube = document.createElement('div');
    cube.classList.add('cube');
    gridBox.appendChild(cube);

    gridBox.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    gridBox.style.gridTemplateRows = `repeat(${value}, 1fr)`
  }
}


// color picker
color.addEventListener('input',(e)=>{
  const chooseColor = e.target.value;
  paint(chooseColor);
});

function paint(color){
  const cubes = document.querySelectorAll('.cube');

  cubes.forEach((cube) =>{
    cube.addEventListener('mouseover',function(){
      cube.style.backgroundColor = color;
    })
  })
}



// random color
randomColor.addEventListener('click',random);

function random(){
  const cubes = document.querySelectorAll('.cube');

  cubes.forEach((cube)=>{
    cube.addEventListener('mouseover', function(){
      cube.style.backgroundColor = getColor();
    })
  })
}


function getColor(){
  const letters = "0123456789ABCDEF";
  let color = '#';

  for(let i = 0; i<6;i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}




updateSize();


