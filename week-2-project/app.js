/*
  many of the exercises have focused on avoiding side effects
  this project is the opposite, you want to modify object.entries
  otherwise how can it save anything!

  You can even think of this week's object as a mini data base
  - there's a store of data in object.entries
  - and users can access & modify that data
*/

const object = {
  entries: {},
  isPrimitive: function (value) {
    // write me!
  if (Object(value) !== value) {return true};
    return false;
},

  hasKey: function (obj, key) {
    // write me!
  return obj != null && hasOwnProperty.call(obj, key);
  },
  hasValue: function (obj, value) {
    //write me!
    let valueList = Object.values(obj);
      if(valueList.length >= 0){
        if(valueList.includes(value)){return true}
        else {return false}

      }
  
  },
  addEntry: function (key, value) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }

    if (this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new Error(`addEntry: key "${key}" already exists`);
    } 

    else {this.entries[key] = value;
          return true;}
    },
  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
     delete this.entries[key];
     return true;
    
  },
  updateEntry: function (key, value) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }
    // write me!
     else {this.entries[key] = value;
     return true;}
  },
  readAll: function () {
    // write me!
    var clonedObj = {...this.entries};
    return clonedObj;
  },
  findByKey: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      console.log('haskey');
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    // write me!
    var newObj = {};
    newObj[key] = this.entries[key];
    return newObj;
   
  },
  findByValue: function (value) {
    if (typeof this !== 'string') { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(value)==this.entries, value) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    // write me! (this one is a bit trickier)
    var datas=this.readAll();
    var find=null;
    for (const [key_obj, value_obj] of Object.entries(datas)) {
      if(value==value_obj){
         find = {'key':key_obj, 'value':value_obj};
      }
    }
    return find;

  },
}
