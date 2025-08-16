import { Component } from "react";

export default class FoodItem extends Component {
  render() {
    // console.log(this.props);
    let { img, category, title, price, desc } = this.props;
    return (
      <>
        {/* <!-- by using normal this props method --> */}
        {/* <div className="single-food">
          <div className="img">
            <img src={this.props.img} />
          </div>
          <div className="title-price">
            <h3>{this.props.title}</h3>
            <p>{this.props.price}</p>
          </div>
          <div className="food-desc">{this.props.desc}</div>
        </div> */}

        {/* by using object destrcture */}
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{desc}</div>
          <div className="category">
            {/* <button className="category1">{category}</button> */}
          </div>
        </div>
      </>
    );
  }
}
