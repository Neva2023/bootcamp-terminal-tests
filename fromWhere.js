function fromWhere(Regnr) {
if (Regnr.startsWith('CY')){
    return 'Bellville';}
  else if (Regnr.startsWith('CJ')){
    return 'Paarl';}
  else if(Regnr.startsWith('CA')){
    return 'Cape Town';}
  else{
    return 'Some other place!'}
}
export default fromWhere;