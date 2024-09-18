import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const FoodCard = ({ id, img, name, price, desc, category, rating }) => {
	const dispatch = useDispatch();
	return (
		<div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
			<img
				src={img}
				alt=""
				className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
			/>
			<div className="text-sm flex justify-between">
				<h2>{name}</h2>
				<span className="text-green-500 ">₹{price}</span>
			</div>
			<p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
			<div className="flex justify-between ">
				<span className="flex justify-center items-center">
					<AiFillStar className="mr-1 text-yellow-400" /> {rating}
				</span>
				<button
					className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
					onClick={() => {
						dispatch(
							addToCart({ id, name, price, rating, img, qty: 1 })
						);
						toast.success("Item added!");
					}}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

FoodCard.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	desc: PropTypes.string.isRequired, // This ensures desc is always a string
	category: PropTypes.string,
	rating: PropTypes.number,
};

export default FoodCard;
