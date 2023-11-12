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

function f(d) {
  const result = [];
  const allowed = ['direction', 'codes', 'title'];
  for (let obj1 of d) {
    result.push(
      obj1.settlements.map((settlement) => settlement.stations
        .filter((obj) => obj.direction)
        .map((item) => Object.keys(item)
          .filter(key => allowed.includes(key))
          .reduce((obj, key) => {
            obj[key] = item[key];
            return obj;
          }, {})
        )
      )
    )
  }
  return makeObjectsGreat(result.flat(2));
}

// module.exports = { f };