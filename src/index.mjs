

Array.prototype.myMap = function (callbackfn){
  console.log("originalarr" ,this);//this means thr arr

  let newarr = [];
  for(let i =0 ; i < this.length; i++){
    const currentelement = this[i] //1
    const res = callbackfn(currentelement , i ,this);
    newarr.push(res);
  }
  return newarr;
}

const arr = [1 , 2 , 3];

function callbackfn (element , index ,array){
  return element * 3  //1 *2  = 2 
}


const res = arr.myMap(callbackfn)
console.log("modifiedarr" ,res)