/**
 * sortByPrice(htmlEle,"lowToHigh")
 * 
 * This method sorts the objects according to the parameter passed :
 *  lowTohigh
 *  highTolow
 */
 Cypress.Commands.add('sortByPrice', (htmlEle, sortType) => {
    var numPriceArr = []
    var priceArr = [] 
    
    cy.get(htmlEle)
    .then(($els) => Cypress._.map($els, 'innerText').toString())
    .invoke('replaceAll', '$', '')
    .then(($priceStr) =>{
       priceArr = $priceStr.split(',')
        for(var i=0 ; i<priceArr.length; i++){
            numPriceArr.push(parseFloat(priceArr[i]));
        }
       priceArr = numPriceArr.slice();
       if(sortType === 'lowToHigh'){      
        numPriceArr.sort(function(a, b){return a - b})
       }else{
         numPriceArr.sort(function(a, b){return b - a})
       } 

       expect(priceArr).to.deep.equal(numPriceArr);

     })   
 })