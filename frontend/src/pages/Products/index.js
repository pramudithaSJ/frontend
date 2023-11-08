import React from 'react'
import ProductTable from '../../Components/product-table'
import TopBanner from '../../Components/top-banner'

function Product() {
    return (
        <div>
            <div className='w-full px-10 my-10'>
                <h1 className="text-4xl font-bold text-darkGray text-left">PRODUCTS</h1>
            </div>
            <div className='my-10'>
                <TopBanner />
            </div>
            <div className='w-full'>
                <ProductTable />
            </div>
        </div>
    )
}

export default Product