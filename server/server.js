const http = require('node:http');
const data = require('./yadata.json');

const hostname = '127.0.0.1';
const port = 3001;

const lines = ['Ленинградское', 'Ярославское', 'Казанское', 'Горьковское', 'Курское', 'Павелецкое', 'Киевское', 'Смоленское', 'Савёловское', 'Рижское', 'МЦД-2', 'МЦД-1'];

function makeObjectsGreat(arr) {
  const preresult = {};

  for (let obj of arr) {
    if(!preresult[obj.direction]) {
      preresult[obj.direction] = [];
    }
    preresult[obj.direction].push({codes: obj.codes, title: obj.title})
  }
  
  const result = [];
  
  for (let key in preresult) {
    const resultInner = {};
    if (!resultInner.direction) {
      resultInner.direction = key;
    }
    if (!resultInner.stations) {
      resultInner.stations = preresult[key]
    }
    result.push(resultInner)
  }
  return result;
}



// todo разрешить 3000 сюда заходить 8)
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Accept-Encoding', 'gzip');
  res.setHeader('Cache-Control', 'public, max-age=31557600');

res.end(JSON.stringify(makeObjectsGreat(data.countries
  .find((obj) => obj.title === 'Россия').regions
  .map((obj) => obj.settlements)
  .flat()
  
  .map((item) => Object.keys(item)
  .filter(key => key === 'stations')
  .reduce((obj, key) => {
    obj[key] = item[key];
    return obj;
  }, {}))

  .map((s) => s.stations.filter(s => s.direction))
  .flat()
  .filter((obj) => lines.includes(obj.direction))

  .map((item) => Object.keys(item)
  .filter(key => ['direction', 'codes', 'title'].includes(key))
  .reduce((obj, key) => {
    obj[key] = item[key];
    return obj;
    }, {})
  )
  
  )));

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});