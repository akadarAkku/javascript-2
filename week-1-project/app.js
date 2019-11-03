const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    // write me!
      if ((typeof param === 'string') && (isNaN(param) === false)) {
        return true;
      }
      else {
        return false;
      }
  },
  addString: function (param) {
     // write this early return condition
    if (typeof param !== 'string') return false;

    // write me! (using this.isNumberyString)
    if (this.isNumberyString(param)){
      this.numberyStrings.push(param)
      return true;
    } else{
      this.NaNyStrings.push(param)
      return true;
    }

  },
  allStrings: function (param) {
    // write me!
    
    /*function concat(...items) {
      return items.reduce((acc, arr) => [...acc, ...arr]);
    }
    return concat(this.numberyStrings, this.NaNyStrings)*/

    return [...this.numberyStrings,...this.NaNyStrings];
  },
  evenStrings: function () {
    // write me!
    return this.numberyStrings.filter (item => item % 2 === 0);
  },
  oddStrings: function () {
    // write me!
    return this.numberyStrings.filter (item => Math.abs(item) % 2 === 1);
  },
  negativeStrings: function () {
    // write me!
    return this.numberyStrings.filter(item => Number(item) < 0  );
  },
  positiveStrings: function () {
    // write me!
    return this.numberyStrings.filter(item => Number(item) >= 0  );
  },
  zeroStrings: function () {
    // write me!
    return this.numberyStrings.filter(item => Number(item) === 0  );
  },
  numberyAsNumbers: function () {
    // write me!
    return this.numberyStrings.map(item => Number(item));
  },
  NaNyAsNumbers: function () {
    // write me!
    return this.NaNyStrings.map(item => Number(item));
  },
  sumOfNumbery: function () {
    // write me!
    function sumNumbery(acc, num) {
      return Number(acc) + Number(num);
    }
    return this.numberyStrings.reduce(sumNumbery, 0) ;
  },
  sumOfNaNy: function () {
    // write me!
    function sumNaNy(acc, str) {
      return Number(acc) + Number(str);
    }
    return this.NaNyStrings.reduce(sumNaNy,NaN) ;
  },
};


