import "./commonResource/style.css";
import data from "./commonResource/data.js";
// import './App.css'
import FoodItem from "./components/FoodItem";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <div className="all-container">
        <Header />

        {/* use direct insert the value of the repititive property */}
        {/* <div className="foods-container">
          <FoodItem
            img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
            title="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
            price={`$5.99`}
            desc="Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice."
          />
          <FoodItem
            img="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
            title="TIBS (ጥብስ)"
            price="$22.99"
            desc="Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain..."
          />
          <FoodItem
            img="https://cdn.tasteatlas.com//images/dishes/d64fe1f3c3754340bfbc7e20510110ef.jpg?w=905&h=510"
            title="GENFO (ገንፎ)"
            price="$20.99"
            desc="Made from the leanest meat, kitfo is viewed as a big treat by ordinary Ethiopians, while its nutritional powers are also praised. Similar to French steak tartare, the meat is minced and warmed in a pan with a little butter, mitmita (a stronger version of berbere)..."
          />
        </div> */}

        {/* method to use external js data for clear understanding */}
        <div className="foods-container">
          {console.log(data)}
          {data?.map((singleValue) => {
            // console.log(singleValue);
            let { id,category, img, title, price, desc } = singleValue; //by using destructure
            return (
              <FoodItem
                key={id}
                img={img}
                // category={category}
                title={title}
                price={price}
                desc={desc}
                category={category}
              />
            );
          })}
        </div>

        {/* method using spread operator */}
        <div className="foods-container">
          {/* {console.log(data)} */}
          {data?.map((singleValue) => {
            // console.log(singleValue);
            return <FoodItem key={singleValue.id} {...singleValue} />;
            
          })}
        </div>

        {/* method using rest operator */}
        {/* <div className="foods-container">
          {data?.map(({ id, ...rest }) => {
            // console.log(rest);
            return <FoodItem key={id} {...rest} />;
          })}
        </div> */}

      </div>
    </>
  );
}

export default App;
