const Queue = require('./queue')

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  })

  it('Deve criar uma fila', () => {

    expect(queue).toEqual({ elements: []});
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    expect(queue.size()).toEqual(0);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    queue.add(42);
    expect(queue.size()).toBe(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    queue.add(42);
    expect(queue.peek()).toEqual(42);
  })
  /* Teste extra para escolher o primeiro item de fila vazia */
  it('Deve retornar undefined ao fazer peek em fila vazia', () => {
    expect(queue.peek()).toBeUndefined();
  });
  it('Deve remover o primeiro item da fila', () => {
    queue.add(42);
    queue.dequeue();
    expect(queue.size()).toEqual(0);
  })
  /* Teste extra para não tentar remover item em fila vazia */
  it('Deve retornar undefined ao remover de fila vazia', () => {
    expect(queue.dequeue()).toBeUndefined();
  });
  
})