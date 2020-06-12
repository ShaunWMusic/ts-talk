import { NonFunctionKeys } from 'utility-types';

class Pizza {
  slices: number
  name?: string

  constructor(init: Pick<Pizza, NonFunctionKeys<Pizza>>) {
    Object.assign(this, init)
  }

}

const pizza = new Pizza({
  slices: 9,
  name: 'Margherita',
})
console.log(pizza)
console.log(new Pizza({slices: 2}))
