import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "김치",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    name: "냉면",
    image: "https://i.ytimg.com/vi/QIgLSko7Kmc/maxresdefault.jpg"
  },
  {
    name: "떡볶이",
    image:
      "http://freshdon.com/wp-content/uploads/2016/11/%EB%96%A1%EB%B3%B6%EC%9D%B4%EC%9D%B4%EB%AF%B8%EC%A7%802-1.jpg"
  },
  {
    name: "치킨",
    image:
      "https://i.pinimg.com/originals/0d/69/8e/0d698e153d448897d7bff67c112776e6.jpg"
  },
  {
    name: "피자",
    image: "http://www.pizzathink.com/modules/muser/img/sub/food_303.png"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
