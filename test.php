// Create a new array object using square bracket notation
var stocks = [];        
stocks['AAPL'] = ['-1', '1', '6.4', '2.9'];
stocks['DELL'] = ['-4.23', '5.4', '3.56', '-2.56'];

// Loop through the elements in the above array
for(i in stocks) {
    console.log("Stock values changes for " + stocks[i]);
    for(j in stocks[i]) {
        console.log(stocks[i][j]);
    }
}