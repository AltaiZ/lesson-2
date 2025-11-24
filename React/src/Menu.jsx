import React from "react";

const Menu = () => {
  const ItemsData = [{ name: "Espresso", desc: "Rich and bold", price: ""}]
  return (
    <div className="w-full h-[calc(100vh-60)] max-xl:pt-20 bg-[#f4e4bc] flex flex-col justify-center items-center gap-5">
      <h1 className="text-[#8b4513] text-4xl font-bold">Our Menu</h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 xl:gap-20">
          <div className="bg-white h-[362.703px] p-10 w-[477px] rounded-[10px]">
           <h1 className="text-2xl font-bold text-[#8b4513] border-b-[2px] border-[#d4af37] ">Hot Beverages</h1>
            <MenuItem
              name={"Espresso"}
              desc={"Rich and bold"}
              price={"$2.50"}
            />
            <MenuItem
              name={"Cappuccino"}
              desc={"Rich and Espresso with steamed milk foam"}
              price={"$4.25"}
            />
            <MenuItem
              name={"Latte"}
              desc={"Smooth espresso with steamed milk"}
              price={"$4.75"}
            />
          </div>
          <div className="bg-white h-[362.703px] p-10 w-[477px] rounded-[10px]">
           <h1 class="text-2xl font-bold text-[#8b4513] border-b-[2px] border-[#d4af37] ">Cold Beverages</h1>
            <MenuItem
              name={"Iced Coffee"}
              desc={"Cold brew over ice"}
              price={"$3.50"}
            />
            <MenuItem
              name={"Frappé"}
              desc={"Blended iced coffee drink"}
              price={"$5.25"}
            />
            <MenuItem
              name={"Cold Brew"}
              desc={"Smooth, less acidic coffee"}
              price={"$4.00"}
            />
          </div>
          <div className="bg-white h-[362.703px] p-10 w-[477px] rounded-[10px]">
           <h1 class="text-2xl font-bold text-[#8b4513] border-b-[2px] border-[#d4af37] ">Hot Beverages</h1>
            <MenuItem
              name={"Croissant"}
              desc={"Buttery, flaky pastry"}
              price={"$3.00"}
            />
            <MenuItem
              name={"Blueberry Muffin"}
              desc={"Fresh baked with real blueberries"}
              price={"$2.75"}
            />
            <MenuItem
              name={"Chocolate Chip Cookie"}
              desc={"Warm and gooey"}
              price={"$2.25"}
            />
          </div>
         
      </div>
    </div>
  );
};

export default Menu;

export const MenuItem = ({ name, desc, price }) => {
  return (
    <div>
      <div className="flex  items-center justify-between border-b duration-300 ease-in hover:scale-95 border-[#f0f0f0]">
       
        <div>
          <p className="text-xl font-bold pt-[20px]">{name}</p>
          <p className="text-[#666666]">{desc}</p>
        </div>
        <div>
          <p className="text-[#d4af37] text-xl font-bold ">{price}</p>
        </div>
      </div>
    </div>
  );
};
