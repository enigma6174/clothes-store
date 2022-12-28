import ItemComponent from "../item/item.component";
import "./landing-page.styles.scss";

const LandingPageComponent = ({ categories }) => {
  return (
    <div className="landing-page__container">
      {categories.map((category) => (
        <ItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default LandingPageComponent;
