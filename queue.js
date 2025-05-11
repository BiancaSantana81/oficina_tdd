class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length;
  }

  add(element){
    this.elements.push(element);
  }

  peek(){
    if(this.size() === 0) return undefined;
    return this.elements[0];
  }

  dequeue(){
    if(this.size() === 0) return undefined;
    this.elements.shift();
  }
}

module.exports = Queue