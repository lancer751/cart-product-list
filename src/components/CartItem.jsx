import { useCart } from "../hooks/useCart"


export function CartItem({quantity, price, name, item}){
    const {cart, removeFromCart} = useCart()
    
    return (
        <li className='flex items-center justify-between border-b border-Rose-300 pt-3 pb-4 md:text-sm'>
            <div>
                <strong className='text-Rose-900 block mb-1.5 '>{name}</strong>
                <p className='inline-flex gap-x-3 font-semibold'>
                <span className='text-Red '>{quantity}x</span>
                <span className='text-Rose-400'>@ ${price}</span>
                <span className='text-Rose-500'>${quantity * price}</span>
                </p>
            </div>
            <button className='aspect-square rounded-full border border-Rose-400 p-1' onClick={() => removeFromCart(item)}>
                <img src='src/assets/images/icon-remove-item.svg'/>
            </button>
        </li>
    )
}