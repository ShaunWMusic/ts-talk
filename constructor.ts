class Pizza {
  slices: number
  name: string
  
  constructor(init) {
    Object.assign(this, init)
  }
}

const pizza = new Pizza({
  slices: 8,
  name: 'Margherita',
})