// missing element in the squence of array element

let arr = [6,4,7,3,4,5,8,9,11,13,10,4]

// function missingNumber(a){
//   let b =[];
//   for(i=0; i<=a.length;i++){
//     b[i] = 0;
//   }
//   for(i=0; i<a.length; i++){
//     b[a[i] -1] = 1;
//   }
//   let c=0;
//   for(i=0; i<=a.length;i++){
//     if(b[i] == 0){
//       c = i+1;
//     } 
//    }
//    return c;
//   }
// console.log(missingNumber(arr))

function missing(a){
  let m=[];
  //let no = 0;
  for(i=0;i<a.length;i++){
    if(m.indexOf(a[i]) == -1){
      m.push(a[i])
    }
  }
 let k = m.length;
 let j = Math.max(...m);
 let l = Math.min(...m);
  total = Math.floor(((j)*(j+1)/2));
  if(l !== 1){
    total -= ((l-1)*(l)/2);
  }
  for(i=0; i<k; i++){
    total -= m[i]; 
   // no++ ;
  
  }
  return total;
//   console.warn(a.length-no)
//   for(j=1;j<=a.length-no; j++){
//     x+=(x+i)
  }  
console.log(missing(arr))

