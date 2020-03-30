// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'



let pyramid = (n, row=0, column=0, level='') =>{
    let midpoint = Math.floor((2*n-1)/2);
    
    if (n===row){
        return;
    }
    debugger

    if (2*n-1===level.length){
        console.log(level);
        return pyramid(n,row+1, column = 0, level ='');
    }

    if(midpoint-row <=column && midpoint +row >=column){
        level+= '#';
        return pyramid(n,row,column+1,level)
    }else{
        level += ' ';
        return pyramid(n,row,column+1,level)
    }
}

module.exports = pyramid;
