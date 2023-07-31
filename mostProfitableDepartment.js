function mostProfitableDepartment(SalesData){
    //Iam going to first create an empty object thatiam going to fill up with the
    //diffrent department and assign the departments with a value of 0
    var departMap={};
    for (var i=0; i<SalesData.length;i++){
      var departData=SalesData[i];
      //Iam now going to assingn each depatment with a value of 0
      departMap[departData.department]=0;}
    //the first loop was used to assing the available departments a value of zero.
    //now iam going to use as second loop to assign each departments its sales and
    //store this in the map.
    for (i=0;i<SalesData.length; i++){
      var departData= SalesData[i];
      var currentDepartSales=departMap[departData.department];
      currentDepartSales= currentDepartSales+ departData.sales;
      departMap[departData.department]=currentDepartSales;}
    var highestSales=0;
    var highestSalesDep= '';
    for (var item in departMap){
      if(departMap[item]>highestSales){
        highestSales= departMap[item];
         highestSalesDep= item;}
  }
   return (highestSalesDep);
  };

  export default mostProfitableDepartment;

  