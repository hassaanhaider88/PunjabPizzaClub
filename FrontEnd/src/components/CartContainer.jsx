import React from 'react'

const CartContainer = ({ isOpenCart, setIsOpenCart }) => {
  return (
    <div className='md:w-1/2 w-full bg-[#141414] bottom-0 right-0 h-full absolute'>
      <button onClick={()=>setIsOpenCart(!isOpenCart)}>CLoss</button>
    </div>
  )
}

export default CartContainer
