import { useEffect } from "react";
import FoodCard from "./FoodCard";
import foodData from "../data/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { initialiseCategories } from "../redux/slices/CategorySlice.js";

const FoodItems = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initialiseCategories(foodData));
	}, []);

	const selectedCategory = useSelector(
		(state) => state.category.selectedCategory
	);
	const searchTerm = useSelector((state) => state.search.searchTerm);

	const itemsToShow = foodData.filter(
		(item) =>
			(selectedCategory === "All" ||
				item.category === selectedCategory) &&
			(searchTerm === "" ||
				item.name.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	return (
		<div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
			{itemsToShow.map((food) => (
				<FoodCard
					id={food.id}
					key={food.id}
					name={food.name}
					price={food.price}
					desc={food.desc}
					rating={food.rating}
					img={food.img}
				/>
			))}
		</div>
	);
};

export default FoodItems;
