export const Product = ({ name, id, emoji, price, desc, count, setCount }) => {
  return (
    <div className="h-90 w-60 bg-white rounded-xl">
      <div className="bg-gray-100 h-48 text-6xl justify-center flex items-center rounded-xl ">
        <p>{emoji}</p>
      </div>
      <p className="font-bold text-xl">{name}</p>
      <p className="text-gray-400 pt-2">{desc}</p>
      <div className="flex gap-2 p-2 justify-center pt-5">
        <p className="font-bold text-xl">${price}</p>
        <button className="bg-blue-200 text-blue-600 p-2 rounded-xl">
          Details
        </button>
        <button
          className="bg-blue-600 text-white rounded-xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
