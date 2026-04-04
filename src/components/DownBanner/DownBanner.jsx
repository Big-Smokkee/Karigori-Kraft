import { Package, RotateCcw, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

const DownBanner = () => {
    return (
        <div className='bg-[#C4612A] flex justify-between py-6 px-14'>
            <div className='flex gap-6 items-center'>
                <span className='font-semibold'>
                    <Truck></Truck>
                </span>
                <div>
                    <h4 className='font-bold'>Free Delivery</h4>
                    <p className='font-light'>Orders above ৳999</p>
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <span className='font-bold'>
                    <Package></Package>
                </span>
                <div>
                    <h4 className='font-bold'>Authentic Products</h4>
                    <p className='font-light'>Handpicked quality</p>
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <span className='font-bold'>
                    <RotateCcw></RotateCcw>
                </span>
                <div>
                    <h4 className='font-bold'>Easy Returns</h4>
                    <p className='font-light'>7-day return policy</p>
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <span className='font-bold'>
                    <ShieldCheck></ShieldCheck>
                </span>
                <div>
                    <h4 className='font-bold'>Secure Payment</h4>
                    <p className='font-light'>100% safe checkout</p>
                </div>
            </div>
        </div>
    );
};

export default DownBanner;