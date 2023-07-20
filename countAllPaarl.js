
function countAllPaarl(paraString){
    var myArray=[];
   var theList =paraString.split(', ');
    for(var i=0;i<theList.length;i++){
      if(theList[i].startsWith('CJ')){
        myArray.push(theList[i]);}
    }
    return myArray.length;
    };
   export default countAllPaarl;