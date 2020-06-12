import { NonFunctionKeys } from 'utility-types';

class Pizza {
  slices: number
  name?: string
  readonly sauce: string

  constructor(init: Pick<Pizza, NonFunctionKeys<Pizza>>) {
    Object.assign(this, init)
  }

  // get sauce() {
  //   return 'something';
  // }

}

const pizza = new Pizza({
  slices: 1,
})
console.log(pizza)
console.log(new Pizza({slices: 2}))

