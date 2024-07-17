import { useState } from 'react'
import { CardProduct } from './components/CardProduct'
import { CartList } from './components/CartList'
import products from './mocks/data.json'
import { useCart } from './hooks/useCart'
import { OrderItem } from './components/OrderItem'
import { OrderModal } from './components/OrderModal'


function App() {
  const [listOfProducts, setProducts] = useState(products)
  const [active, setActive] = useState(false)

  return (
    <>
      <main className="w-[90%] mx-auto max-w-screen-xl py-6 grid gap-5 md:grid-flow-col md:grid-cols-[1fr,340px]">
        <section className=''>
          <h2 className="text-4xl font-bold text-Rose-900">Desserts</h2>
          <section className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              listOfProducts.map((item, index) => (
                <CardProduct 
                  key={index}
                  product={item}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  image={item.image.mobile}
                />
              ))
            }
          </section>
        </section>

        <CartList 
          active={active}
          setActive={setActive}/>
      </main>

      {
        active && <OrderModal 
          active={active}
          setActive={setActive}/>
        
      }

    </>
  )
}

export default App
