import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/slice/CartSlice';

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart")
  }

  const removeToCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from cart")
  }

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {
          cart.some((p) => p.id == post.id) ? (
            <button onClick={removeToCart}>Remove Item</button>
          ) :
          (
            <button onClick={addToCart}>Add to Cart</button>
          )
        }
      </button>
    </div>
  )
}

export default Product