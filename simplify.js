var _ = {}
_.help = function(w){
  if(w === undefined){
    console.log(_)
  }
  else{
    console.log(_[w])
  }
}
