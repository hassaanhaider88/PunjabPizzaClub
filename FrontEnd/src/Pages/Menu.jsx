import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import { useSelector } from 'react-redux';
import SinglePizzaCard from "../Components/SinglePizzaCard"
import FooterComponent from "../Components/FooterComponent"

const Menu = () => {
    const [SearchVal, setSearchVal] = useState('');
    const { items } = useSelector(
        (state) => state.menu
    );
    const [FilteredItems, setFilteredItems] = useState(items);
    const handleSearchItem = (searchVal) => {
        const SearchItems = items.filter(item =>
            item.name.toLowerCase().includes(searchVal.toLowerCase())
        );
        setFilteredItems(SearchItems);
    }
    return (
        <>
            <NavBar />
            <div className='min-h-screen w-full py-5 md:px-10 px-5'>
                {/* Here Search Div show */}
                <div className='w-full flex gap-2 justify-start  items-center'>
                    <input value={SearchVal} onChange={(e) => { handleSearchItem(e.target.value); setSearchVal(e.target.value) }} type="text" className='py-2 px-5 outline-none rounded-3xl border-2 border-[#B84347] w-60 sm:w-100' placeholder='Search Here by Name.....' />

                </div>
                <div className="grid mt-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {FilteredItems.length > 0 ? FilteredItems.map((pizza) => (
                        <SinglePizzaCard key={pizza.id} pizza={pizza} />
                    )) : <div className='w-screen h-screen text-lg flex justify-center items-center'><p>Nothing To Frind </p></div>}
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default Menu