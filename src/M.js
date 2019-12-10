const Loader = require('./Loader');

class M{
  constructor(){
    this.__map = {}
  }
  register(get, name, starve){ // get 是获取数据的方法，返回值是一个 promise 其 then 方法接收数据
    this.__map[name] = new Loader(get, starve);
  }
  get(name){
    return this.__map[name].get();
  }
  update(name){
    return this.__map[name].update();
  }
}

module.exports = M;