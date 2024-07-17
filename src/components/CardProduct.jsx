import {useCart} from '../hooks/useCart'


// eslint-disable-next-line react/prop-types
export function CardProduct({name, category, price, image, product}){
    const {cart, addToCart, incrementQuantity, decrementQuantity} = useCart()

    const productIndexCart = cart.findIndex(item => item.id === product.id)
    const isInCart = productIndexCart >= 0 
    
    
    return(
        <article>
        {/*  */}
            <picture className="relative">
                <img className={`mb-6 w-full rounded-md aspect-video md:aspect-square object-cover object-center ${isInCart && "outline-Red outline outline-[3px]"}`} 
                src={
                    window.innerWidth >= 640 ? 
                        product.image.tablet
                    : (window.innerWidth >= 768)?
                        product.image.desktop
                    : product.image.mobile

                }/>

                <div className="absolute -bottom-5 inset-x-0 w-max mx-auto flex items-center">
                    {
                        isInCart?
                       
                        <div className="inline-flex bg-Red gap-x-6 items-center justify-between text-Rose-100  px-6 py-2.5 rounded-3xl">
                            <button className="flex items-center justify-center aspect-square p-0.5 border border-Rose-100 rounded-full" onClick={() => decrementQuantity(product)}>
                                <img src="src/assets/images/icon-decrement-quantity.svg" className=""/>
                            </button>
                            <small>{cart[productIndexCart].quantity}</small>                    
                            <button className="aspect-square p-0.5 border border-Rose-100 rounded-full" onClick={() => incrementQuantity(product)}>
                                <img src="src/assets/images/icon-increment-quantity.svg" className=""/>
                            </button>
                        </div>
                        :
                        <button className="flex bg-Rose-50 gap-x-2 items-center justify-center px-6 py-2.5 rounded-3xl border border-Rose-500  text-Rose-900  hover:border-Red transition-colors hover:text-Red" onClick={() => {
                            addToCart(product)
                        }}>
                            <img src="src/assets/images/icon-add-to-cart.svg"/>
                            <span className="text-sm font-medium">Add to Cart</span>
                        </button>
                    }

                </div>
            </picture>
            
            <div>
                <small className="text-Rose-400 text-sm">{category}</small>
                <h5 className="text-Rose-900 font-medium">{name}</h5>
                <span className="text-Red text-normal font-semibold">${price}</span>
            </div>
        </article>
    )
}