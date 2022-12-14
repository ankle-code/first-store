import "./style.css";
import Card from "../Card";
import { isMetaProperty } from "typescript";

type ListingCardsProps = {
  data:
    | Array<{
        id: number;
        name: string;
        price: number;
        rating: number;
        image: string;
        amount: number;
      }>
    | undefined;
  cart?: boolean | undefined;
};

const ListingCards = (props: ListingCardsProps) => {
  console.log(props.data);

  console.log(props.data, "listing");

  const listCards = () => {
    if (props.data) {
      return props.data.map((item) => (
        <Card
          id={item.id}
          name={item.name}
          price={item.price}
          rating={item.rating}
          image={item.image}
          amount={item.amount}
          cart={props.cart}
        />
      ));
    }
  };

  return <div className="ListingCards">{listCards()}</div>;
};

export default ListingCards;
