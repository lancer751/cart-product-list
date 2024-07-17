

export function OrderItem({quantity, price, name, item}){

    return(
        <li className='flex items-center justify-between gap-2 border-b border-Rose-300/50 pt-3 pb-4 md:text-sm'>

            <div className="flex gap-x-2 items-center">
                <img src={item.image.thumbnail} className="aspect-square rounded-md w-12"/>
                
                <div className="overflow-hidden">
                    <strong className='text-Rose-900 block mb-1.5 truncate'>{name}</strong>
                    <p className='inline-flex gap-x-3 font-semibold'>
                        <span className='text-Red '>{quantity}x</span>
                        <span className='text-Rose-400'>@ ${price}</span>
                    </p>
                </div>
            </div>
            
            <span className='text-Rose-900 font-medium'>${quantity * price}</span>
        </li>
    )
}