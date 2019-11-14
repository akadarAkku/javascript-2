const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== 'string') { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!this.entries.hasOwnProperty(key)) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }
   // write me!
    this.currentKey = key;
    
  },
  
    // write me!
    get currentEntry() {
  

  },
  likedKeys: [],
  get likedEntries() {
    // write me!
    
    

  },
  likeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('likeEntry: key should be a string');
    }
    if (!this.hasKey) { // write the early return condition
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (this.hasKey(this.likeEntry, key)) { // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }
    // write me!
  },
  unlikeEntry: function (key) {
    if (key !== 'string') {
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (!this.hasKey(this.this.likedKeys, key)) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }

    // write me!
  },
  entries: {},
  isPrimitive: function (value) {
    // write me!
    if (Object(value) !== value) {return true};
    return false;
  },
  hasKey: function (obj, key) {
    // write me!
    return (obj.hasOwnProperty(key));
  },
  hasValue: function (obj, value) {
    // write me!
    const valueArray = Object.values(obj);
    if (this.hasKey) {
      return(valueArray.includes(value));
    } else {
      return false;
    }
  },
  addEntry: function (key, value) {
    // write me!
    if (typeof key !== 'string') { 
      // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { 
      return new TypeError('addEntry: value should be a primitive');
    } else if (this.hasKey(this.entries, key))  { 
      return new Error(`addEntry: key "${key}" already exists`);
    } else {this.entries[key] = value;
      return true;}
  
  },
  removeEntry: function (key) {
    // write me!
    if (typeof key !== 'string') {
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
     delete this.entries[key];
     return true;

  },

  updateEntry: function (key, value) {
    // write me!
    if (typeof key !== 'string') { 
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value))  {
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }  else {this.entries[key] = value;
      return true;}
  },
  readAll: function () {
    // write me!
    let clonedObj = {...this.entries};
    return clonedObj;
  },
  findByKey: function (key) {
    // write me!
    if (typeof key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }

    // write me!
    let newObj = {};
    newObj[key] = this.entries[key];
    return newObj;
  
  },

  findByValue: function (value) {
    // write me!
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value))  { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }
    const newObj = {};
    if (this.hasValue(this.entries, value)){
      const keyArray = Object.keys(this.entries);
      for (let i = 0; i < keyArray.length; i++) {
        if (this.entries[keyArray[i]] === value) {
          newObj[keyArray[i]] = value;
        }
      }
      return newObj;
    }else
    {
      return newObj;
    }


  },
}

