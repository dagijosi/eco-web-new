import Card from "./Card";

const CardList = () => (
  <div className="justify-center gap-4 grid grid-cols-1 md:grid-cols-3 mt-4">
    <Card
      imageSrc="/images/Card1.png"
      title="Sign up now and post your vehicle for rent"
    />
    <Card
      imageSrc="/images/Card2.png"
      title="Sign up now and Rent the vehicle of your choice"
    />
    <Card imageSrc="/images/Card1.png" title="Sign up for your Advertising" />
  </div>
);

export default CardList;
