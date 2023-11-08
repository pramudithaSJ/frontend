import React from "react";
import StartIcon from "../Assests/icons/StarIcon";
import SearchIcon from "../Assests/icons/SearchIcon";
import { Link } from "react-router-dom";


const TopBanner = () => (
    <div className="w-full px-20 flex gap-2">
        <div className="flex items-center w-2/3 gap-2">
            <div>
                <input type="text" placeholder="Search for Product" className=" px-5 py-2 rounded-2xl" />
            </div>
            <div className="bg-midBlue text-white rounded-2xl px-10 py-2 flex gap-2">
                <SearchIcon />
                <p>Search</p>
            </div>
        </div>
        <div className="w-1/3 flex gap-5 justify-end">
            <div className="">
                <Link to="/new-product">

                    <button className="bg-midBlue text-white px-5 py-2 rounded-lg">New Product</button>
                </Link>

            </div>
            <div>
                <button className="border-2 text-midBlue px-5 py-2 rounded-lg">
                    <StartIcon />
                </button>
            </div>
        </div>


    </div>
);

export default TopBanner;