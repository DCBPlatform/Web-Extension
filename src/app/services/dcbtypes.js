export const dcbtypes = {
    "Address": "AccountId",
    "LookupSource": "AccountId",

    "AccountIdOf": "AccountId",
    "BalanceOf": "Balance",

    "FundInfoOf": "FundInfo",
    "FundInfo": {
      "beneficiary": "AccountId",
      "deposit": "Balance",
      "raised": "Balance",
      "end": "BlockNumber",
      "goal": "Balance"
    },
    "FundIndex": "u32",

    "PairInfoOf": "PairInfo",
    "PairInfo": {
      "base": "TokenIndex",
      "target": "TokenIndex",
      "promoter": "AccountId",
      "active": "u8",
      "created": "BlockNumber"
    },
    "PairIndex": "u128",

    "PairNativeInfoOf": "PairNativeInfo",
    "PairNativeInfo": {
      "base": "AccountId",
      "target": "AccountId",
      "promoter": "AccountId",
      "active": "u8",
      "created": "BlockNumber"
    },
    "PairNativeIndex": "u128",    

    "BuyOrderInfoOf": "BuyOrderInfo",
    "BuyOrderInfo": {
      "order_id": "u128",
      "pair": "u128",
      "taker": "AccountId",
      "volume": "Balance",
      "ratio": "Balance",
      "created": "BlockNumber"
    },
    "BuyOrderIndex": "u32",   

    "BuyOrderNativeInfoOf": "BuyOrderNativeInfo",
    "BuyOrderNativeInfo": {
      "order_id": "u128",
      "pair": "u128",
      "taker": "AccountId",
      "volume": "Balance",
      "ratio": "Balance",
      "created": "BlockNumber"
    },
    "BuyOrderNativeIndex": "u128",       
    
    "SellOrderInfoOf": "SellOrderInfo",
    "SellOrderInfo": {
      "order_id": "u128",
      "pair": "u128",
      "maker": "AccountId",
      "volume": "Balance",
      "ratio": "Balance",
      "created": "BlockNumber"
    },
    "SellOrderIndex": "u128",  
    
    "SellOrderNativeInfoOf": "SellOrderNativeInfo",
    "SellOrderNativeInfo": {
      "order_id": "u128",
      "pair": "u128",
      "maker": "AccountId",
      "volume": "Balance",
      "ratio": "Balance",
      "created": "BlockNumber"
    },
    "SellOrderNativeIndex": "u128",       
        
    
    "TradeInfoOf": "TradeInfo",
    "TradeInfo": {
      "pair_id": "u128",
      "maker": "AccountId",
      "taker": "AccountId",
      "volume": "Balance",
      "ratio": "Balance",
      "created": "BlockNumber"
    },
    "TradeIndex": "u128",

    "TradeNativeInfoOf": "TradeNativeInfo",
    "TradeNativeInfo": {
      "pair_id": "u128",
      "maker": "AccountId",
      "taker": "AccountId",
      "volume": "Balance",
      "ratio": "Balance",
      "created": "BlockNumber"
    },
    "TradeNativeIndex": "u128",    

    "TokenInfoOf": "TokenInfo",
    "TokenInfo": {
      "name": "Vec<u8>",
      "symbol": "Vec<u8>",
      "owner": "AccountId",
      "created": "BlockNumber"
    },
    "TokenIndex": "u32"       
}