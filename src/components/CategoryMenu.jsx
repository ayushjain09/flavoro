import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
	const dispatch = useDispatch();

	const { categories, selectedCategory } = useSelector(
		(state) => state.category
	);

	return (
		<div className="ml-6">
			<h3 className="text-xl font-semibold">Find the best food</h3>
			<div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
				{categories.map((category, index) => {
					return (
						<button
							key={index}
							className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
								selectedCategory === category &&
								"bg-green-500 text-white"
							}`}
							onClick={() =>
								dispatch(setSelectedCategory(category))
							}
						>
							{category}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryMenu;
