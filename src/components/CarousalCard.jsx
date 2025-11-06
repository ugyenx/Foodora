import { TbShoppingCartCopy } from "react-icons/tb";
import { RESTO_IMG_URL } from "../constants/constants";

const CarousalCard = (props) => {
  const { restData } = props;
  const { name, areaName, cusines, avgRating, costForTwo, cloudinaryImageId } =
    restData?.info;
  return (
    <section>
      <div>
        <img
          src={RESTO_IMG_URL + cloudinaryImageId}
          alt="resto-img"
          className="w-[100x]"
        />
        <TbShoppingCartCopy />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{cusines}</p>
        <p>{avgRating}</p>
        <p>{areaName}</p>
        <p>{costForTwo}</p>
      </div>
    </section>
  );
};
export default CarousalCard;
