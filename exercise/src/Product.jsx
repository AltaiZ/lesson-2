export const Product = ({ name, id, emoji, price, desc }) => {
  return (
    <div>
      <div>
        <p>{emoji}</p>
        <p>{name}</p>
        <p>{desc}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
