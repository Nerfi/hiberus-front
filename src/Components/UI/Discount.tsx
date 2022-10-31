import React from "react";

interface DiscountProps {
  price: number;
  discount?: number;
}

const Discount: React.FC<DiscountProps> = ({
  price,
  discount,
}: DiscountProps) => {
  const calculatePriceAfterDiscount = (
    price: number,
    discount?: number
  ): number => {
    const realPrice = Number(price) - Number(discount);
    return Number(realPrice.toFixed(2));
  };
  return (
    <>
      <div style={{ display: "flex", gap: ".5rem" }}>
        Antes:
        <div style={{ textDecoration: "line-through" }}>{price} / $</div>
      </div>

      <div
        style={{
          backgroundColor: "red",
          minWidth: "80px",
          width: "80px",
        }}
      >
        En Oferta
      </div>

      <div>Ahora: {calculatePriceAfterDiscount(price, discount)} /$</div>
    </>
  );
};

export default Discount;
