import product1 from "../images/meal-1.jpg";
import product2 from "../images/meal-2.jpg";
import product3 from "../images/meal-3.jpg";
import product4 from "../images/meal-4.jpg";
import product5 from "../images/meal-5.jpg";
import product6 from "../images/meal-6.jpg";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-wrapper">
        <div className="products-heading">
          <h1 className="heading-secondary center">Our dishes</h1>
        </div>

        <div className="card-columns-container grid grid-cols-3">
          <div className="card">
            <img src={product1} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Entree Platter</div>
                <div className="card-price">$6.99</div>
              </div>

              <p className="card-description">
                Fresh grapes, berries, apple slices, cured meats, cheeses, nuts,
                fresh herbs. Served with extra sides of fruits and crackers.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={product2} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Lunch Special</div>
                <div className="card-price">$9.99</div>
              </div>

              <p className="card-description">
                Roast beef sandwich with cheddar and swiss cheese, onions, bell
                peppers, olive oil, salt and pepper, mayonnaise, mustard,
                lettuce.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={product3} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Breakfast Special</div>
                <div className="card-price">$12.00</div>
              </div>

              <p className="card-description">
                Salmon sandwich, side salad, eggs, sliced avocado, toast,
                mushrooms, tomatoes, anchovies.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={product4} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Fruit Toast</div>
                <div className="card-price">$9.00</div>
              </div>

              <p className="card-description">
                Toasted artisan bread, sliced kiwi, bananas, blueberries,
                tomatoes, sunflower seeds, fresh herbs.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={product5} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Shrimp Rolls</div>
                <div className="card-price">$12.00</div>
              </div>

              <p className="card-description">
                Shrimp, carrots, fresh spinach, herbs, butter, olive oil, salt
                and pepper. Sauce: mayonnaise, lemon juice, dijon mustard and
                parsley .
              </p>
            </div>
          </div>

          <div className="card">
            <img src={product6} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Pita Salad Bowl</div>
                <div className="card-price">$17.00</div>
              </div>

              <p className="card-description">
                Sliced pita, cucumbers, feta cheese, kalamata olives, chickpeas,
                parsley, tomatoes, lettuce, spinach, arugula, red onions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
