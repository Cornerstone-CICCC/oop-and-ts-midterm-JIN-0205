export class CartContext {
  constructor() {
    this.cart = [] 
    this.listeners = [] 
  }

  addItem(item) {
    const prevItem = this.cart.find(cartItem => cartItem.id === item.id)
    if(prevItem) {
      prevItem.quantity++
    } else {
    this.cart.push({ ...item, quantity: 1})

    }
    this.notifyListeners()
  }

    minusItem(item) {
    const prevItem = this.cart.find(cartItem => cartItem.id === item.id)
    if(prevItem) {
      if(prevItem.quantity > 1) {
        prevItem.quantity--
      } else if(prevItem.quantity = 1) {
        const confirmInfo = confirm('Do you want to delete this item form cart?')
        if(confirmInfo) {
          this.deleteItem(item.id)
        } else {return}


      }
    }
    this.notifyListeners()
    // console.log(this.cart[0].quantity)
  }

  getCart() {
    return this.cart
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }



  deleteItem(id) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.notifyListeners()
  }

    notifyListeners() {
    this.listeners.forEach(listener => listener(this.cart))
  }

  updateQuantity(id) {
    const item = this.cart.find(item => item.id === id)
    if(item) {
      if(item.quantity <= 0) {
        this.deleteItem(id)
      }
      else {
        this.notifyListeners()
      }
    }
    
  }
}
