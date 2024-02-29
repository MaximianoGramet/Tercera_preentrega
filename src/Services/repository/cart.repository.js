export default class CartRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async findCart() {
    return await this.dao.find();
  }

  async findById(_id) {
    return await this.dao.findById(_id);
  }

  async createCart(cart) {
    return await this.dao.create(cart);
  }

  async updateProducts(cid, cart) {
    return await this.dao.findByIdAndUpdate(cid, cart);
  }

  async deleteProductFromCart(cid, pid) {
    try {
      const cart = await this.dao.findById(cid);

      if (!cart) {
        throw new Error('Cart not found');
      }

      const initialProductCount = cart.products.length;

      cart.products = cart.products.filter(p => !p._id.equals(pid));

      if (cart.products.length === initialProductCount) {
        throw new Error('Product not found in cart');
      }

      await cart.save();

      return cart;
    } catch (error) {
      throw error;
    }
  }

  async clearCart(cid) {
    try {
      const cart = await this.dao.findById(cid);

      if (!cart) {
        throw new Error('Cart not found');
      }

      cart.products = [];

      await cart.save();

      return cart;
    } catch (error) {
      throw error;
    }
  }

  async setProductQuantity(cid, pid, quantity) {
    try {
      const cart = await this.dao.findById(cid);

      if (!cart) {
        throw new Error('Cart not found');
      }

      const product = cart.products.find(p => p._id.equals(pid));

      if (!product) {
        throw new Error('Product not found in cart');
      }

      product.quantity = quantity;

      await cart.save();

      return cart;
    } catch (error) {
      throw error;
    }
  }

  async addProductCart(cid, pid) {
    try {
      const cart = await this.dao.findById(cid);

      if (!cart) {
        throw new Error('Cart not found');
      }

      const product = cart.products.find(p => p._id.equals(pid));

      if (product) {
        throw new Error('Product already in cart');
      }

      cart.products.push(pid);

      await cart.save();

      return cart;
    } catch (error) {
      throw error;
    }
  }
}
