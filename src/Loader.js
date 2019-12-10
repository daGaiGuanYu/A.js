class Loader{
  constructor(get, starve){
    this.getPromise = get;
    this.loaded = false;
    if(starve)
      this.load(this);
  }
  get(){
    return this.loaded?this.promise:load(this);
  }
  update(){
    return load(this);
  }
}

function load(m){
  m.loaded = false;
  return m.promise = m.getPromise().then( res => {
    m.loaded = true;
    return res;
  })
}

module.exports = Loader;