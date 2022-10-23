var _ = {}
//-------//
//ARRAYS-//
//-------//
_.arr = {};
//toArr()
_.arr.toArr = function(w){
  return w.split(",");
}
//toStr()
_.arr.toStr = function(...w){
  return w.toString();
}





//help
_.help = function(w){
  if(w === undefined){
    console.log(_)
  }
  else{
    console.log(_[w])
  }
}
