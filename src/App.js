import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "냉면",
    image: "https://i.ytimg.com/vi/QIgLSko7Kmc/maxresdefault.jpg",
    rating: 2
  },
  {
    id: 3,
    name: "떡볶이",
    image:
      "http://freshdon.com/wp-content/uploads/2016/11/%EB%96%A1%EB%B3%B6%EC%9D%B4%EC%9D%B4%EB%AF%B8%EC%A7%802-1.jpg",
    rating: 3
  },
  {
    id: 4,
    name: "치킨",
    image:
      "https://i.pinimg.com/originals/0d/69/8e/0d698e153d448897d7bff67c112776e6.jpg",
    rating: 4.9
  },
  {
    id: 5,
    name: "피자",
    image: "http://www.pizzathink.com/modules/muser/img/sub/food_303.png",
    rating: 3.9
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
