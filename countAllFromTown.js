function countAllFromTown(Regnumbers, startString){
    var count =0;
    var theList= Regnumbers.split(',');
    for (var i=0;i<theList.length;i++){
      if(theList[i].trim().startsWith(startString)){
        count=count+1;}
    }
    return count;
  };
  export default countAllFromTown;