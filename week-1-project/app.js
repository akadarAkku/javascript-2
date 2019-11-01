const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    // write me!
      if ((typeof param === 'string') && (isNaN(param) === false)) {
        return true;
      //if it is string and if it doesn't cast NaN (this is string but legal number like '6')
      }
      else {
        return false;
      }
  },
  addString: function (param) {
    if (typeof param !== "string") return false;
    else  {
      if (isNaN(param)){
         this.NaNyStrings.push(param);
        }else {
            this.numberyStrings.push(param);
    }
    return true;
    }

  },
  allStrings: function () {
    if (this.NaNyStrings.length === 0) return this.numberyStrings;
    else if (this.numberyStrings.length === 0) return this.NaNyStrings;
    else return this.numberyStrings.concat(this.NaNyStrings);
  },
  evenStrings: function () {
   if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
    return this.numberyStrings;
   }else if (this.numberyStrings.length !== 0 && this.NaNyStrings.length === 0){
     return this.numberyStrings.filter(akku =>akku % 2 ===0  );
   }else if (this.numberyStrings.length !== 0 && this.NaNyStrings !== 0){
     return this.numberyStrings.filter(akku =>akku % 2 ===0  );
   }
  },
  oddStrings: function () {
    if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
      return this.numberyStrings;
     }else if (this.numberyStrings.length !== 0 && this.NaNyStrings.length === 0){
       return this.numberyStrings.filter(akku =>akku % 2 !==0  );
     }else if (this.numberyStrings.length !== 0 && this.NaNyStrings !== 0){
       return this.numberyStrings.filter(akku =>akku % 2 !==0  );
     }
  },
  negativeStrings: function () {
    if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
      return this.numberyStrings;
    }else if (this.numberyStrings.length !== 0 && this.NaNyStrings.length === 0){
      return this.numberyStrings.filter(akku =>akku < 0  );
    }else if (this.numberyStrings.length !== 0 && this.NaNyStrings !== 0){
      return this.numberyStrings.filter(akku =>akku < 0  );
    }
  },
  positiveStrings: function () {
    if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
      return this.numberyStrings;
    }else if (this.numberyStrings.length !== 0 && this.NaNyStrings.length === 0){
      return this.numberyStrings.filter(akku =>akku > 0  );
    }else if (this.numberyStrings.length !== 0 && this.NaNyStrings !== 0){
      return this.numberyStrings.filter(akku =>akku > 0 || akku === ""  );
    }
  },
  zeroStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
    return this.numberyStrings;
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function checkZero(num) {return (num == 0)}
      return this.numberyStrings.filter(checkZero);
    }else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
        function checkZero(num) {return (num == 0)}
        return this.numberyStrings.filter(checkZero);
    }
  },
  numberyAsNumbers: function () {
    return this.numberyStrings.map(akku => Number(akku));
  },
  NaNyAsNumbers: function () {
    return this.NaNyStrings.map(akku => Number(akku));
  },
  sumOfNumbery: function () {
      const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
      return this.numberyStrings.reduce(reducer,0);
    
  },
  sumOfNaNy: function () {
    return NaN;
  },
};