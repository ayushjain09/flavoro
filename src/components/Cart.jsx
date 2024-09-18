import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const [activeCart, setActiveCart] = useState(false);

	const cartItems = useSelector((state) => state.cart.cart);

	const totalQty = cartItems.reduce(
		(totalQty, item) => totalQty + item.qty,
		0
	);

	const totalAmount = cartItems.reduce(
		(totalAmount, item) => totalAmount + item.qty * item.price,
		0
	);

	const navigateTo = useNavigate();

	return (
		<>
			<div
				className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 transition-all duration-500 z-50 ${
					activeCart ? "translate-x-0" : "translate-x-full"
				} transition-all duration-500 z-50`}
			>
				<div className="flex justify-between items-center my-3">
					<span className="text-xl font-bold text-gray-800">
						My Order
					</span>
					<IoMdClose
						className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
						onClick={() => setActiveCart(false)}
					/>
				</div>

				<div className="space-y-3">
					{cartItems.map((food) => {
						return (
							<ItemCard
								key={food.id}
								id={food.id}
								name={food.name}
								qty={food.qty}
								price={food.price}
								img={food.img}
							/>
						);
					})}
				</div>

				<div className="absolute bottom-0">
					<h3 className="font-semibold text-gray-800">
						Items : {totalQty}
					</h3>
					<h3 className="font-semibold text-gray-800">
						Total Amount : {totalAmount}
					</h3>
					<hr className="w-[90vw] lg:w-[18vw] my-2" />
					<button
						className={`bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[17vw] mb-5 ${
							totalQty === 0 && "bg-gray-400 cursor-not-allowed"
						}`}
						disabled={totalQty === 0}
						onClick={() => navigateTo("/success")}
					>
						Checkout
					</button>
				</div>
			</div>

			<FaShoppingCart
				className={`bg-white rounded-full p-3 shadow-md fixed bottom-5 right-4 text-5xl cursor-pointer hover:text-red-300 ${
					totalQty > 0 && "animate-bounce delay-500 transition-all"
				}`}
				onClick={() => setActiveCart(true)}
			/>
		</>
	);
};

export default Cart;
