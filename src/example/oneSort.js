const sortUtil = require('../index');

const tickerList = [
  {
    tickerSymbol: 'AAA',
    price: '8482.841203894663',
    volume: '18662010744.4',
    marketcap: '154494119510',
  },
  {
    tickerSymbol: 'BBB',
    price: '0.0118',
    volume: '221345.2567',
    marketcap: '5773034.12991',
  },
  {
    tickerSymbol: 'CCC',
    price: '0.09367042236368922',
    volume: '2859.217',
    marketcap: '94731204.0923',
  },
  {
    tickerSymbol: 'DDD',
    price: '0.09367042236368922',
    volume: '28597592.217',
    marketcap: '5773034.12991',
  }, {
    tickerSymbol: 'EEE',
    price: '0.09367042236368922',
    volume: '28597592.217',
    marketcap: '94731204.0923',
  }];

console.log(sortUtil.sortUtil(tickerList, [{ attr: 'marketcap', asc: false }]));