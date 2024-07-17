import { useCart } from "../hooks/useCart"
import { OrderItem } from "./OrderItem"


export function OrderModal({active, setActive}){
    const {cart, clearCart} = useCart()
    const cartTotal = cart.reduce((total, item) => total + (item.quantity * item.price), 0)
    
    const closeModal = () => {
        setActive(!active)
        clearCart()
    }

    return(
        <div className='fixed inset-0 bg-Rose-900/30 flex justify-center items-end sm:items-center'>
            <article className='w-full sm:max-w-md bg-Rose-50 p-7 rounded-t-xl sm:rounded-xl animate-fade-in-up'>
                <img src='src/assets/images/icon-order-confirmed.svg' className='w-9 mb-4'/>
                <h3 className='text-Rose-900 font-bold text-[40px] leading-10 sm:text-2xl mb-3'>
                Order confirmed
                </h3>
                <span className='text-Rose-300  sm:text-sm font-medium'>We hope you enjoy your food!</span>

                <div className='bg-Rose-100/30 px-5 pb-4 my-9 sm:my-6 rounded-md max-h-64 overflow-hidden overflow-y-scroll'>
                <ul>
                    {
                    cart.map(item => 
                        <OrderItem key={item.id}
                        quantity={item.quantity}
                        price={item.price}
                        name={item.name}
                        item={item}
                        />
                    )
                    }

                </ul>
                <p className='flex justify-between items-center mt-5'>
                    <small className="text-Rose-500 font-medium">Order Total</small>
                    <strong className='text-lg font-extrabold'>${cartTotal}</strong>
                </p>
                </div>

                <button className='inline-block w-full bg-Red text-Rose-50 font-medium text-sm rounded-3xl py-3 px-9'
                    onClick={closeModal}>
                Start New Order
                </button>
                
            </article>
        </div>
    )
}