import { lazy } from "react";
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";


export function CartList({active, setActive}){
    const {cart} = useCart()
    const cartTotal = cart.reduce((total, item) => total + (item.quantity * item.price), 0)

    const handleOrderConfirm = () =>{
      setActive(!active)
    }

    return(
        <section className='h-max bg-Rose-50 p-6 rounded-xl'>
          <h3 className='text-2xl font-bold text-Red mb-3'>Your Cart {`(${cart?.length})`}</h3>

          {
            cart?.length > 0 ?
            <div>
              <ul className='w-full'>
                {/* <CartItem/> */}
                {
                  cart.map(item => (
                    <CartItem key={item.id}
                      item = {item}
                      price={item.price}
                      name={item.name}
                      quantity={item.quantity}
                    />
                  ))
                }
              </ul>

              <div className='flex justify-between items-center my-7'>
                <span className='text-Rose-400 font-semibold md:text-sm'>Order Total</span>
                <strong className='text-Rose-900 font-extrabold text-2xl md:text-xl'>${cartTotal}</strong>
              </div>

              <div className='bg-Rose-100 flex items-center justify-center px-2 py-3.5 rounded-lg gap-1.5'>
                <img src='src/assets/images/icon-carbon-neutral.svg'/>

                <span className='text-sm md:text-xs text-Rose-500'>This is a <strong className='text-Rose-900'>carboon-neutral</strong> delivery</span>
              </div>

              <button className='w-full bg-Red hover:bg-Red/90 transition-opacity text-Rose-100 text-lg rounded-3xl py-3 mt-6 md:py-2 md:text-base'
                onClick={() => handleOrderConfirm()}>
                Confirm Order
              </button>
            </div>

            :
            <div className='text-center'>
              <img src='src/assets/images/illustration-empty-cart.svg' onLoad={lazy} className='min-w-32 mx-auto'/>
              <span className='text-sm text-Rose-500 font-semibold'>Your added items will appear here</span>
            </div>
          }

        </section>
    )
}