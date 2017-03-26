function iterativeLog(array){
  array.forEach((n,m) => console.log(`${m}: ${n}`))
}


function iterate(callback){
  var array = [1,2,3]
  callback = array.forEach(callback)
  return array
}

function doToArray(array, callback){
  callback = array.forEach(callback)
}