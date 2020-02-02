pragma solidity ^0.5.12;

contract Oracle{
    
    struct stock {
        uint price;
        uint volume;
    }
    
    mapping (bytes4 => stock)  stockQuote;
    
    address oracleOwner;
        
    
    
    function setStock(bytes4 symbol, uint price, uint volume)public returns (uint){
        stockQuote[symbol].price = price;
        stockQuote[symbol].volume = volume;
    }
    function getStockPrice(bytes4 symbol) public view returns(uint) {
       return stockQuote[symbol].price;

        
    }
    function getStockVolume(uint volume, bytes4 symbol) public view returns (uint){
       return stockQuote[symbol].volume;
    }
    
    
    
    
}