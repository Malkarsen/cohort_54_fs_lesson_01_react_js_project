import { useState } from "react";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson_05() {
  let [orders, setOrders] = useState([]);
  const orderList = orders.map((orderItem) => {
    return <li key={v4()} className="order_item">{orderItem}</li>;
  });

  return (
    <div className="lesson_05_page_wrapper">
      <div className="menu_wrapper">
        <h1>Menu:</h1>
        <div className="burron_wrapper">
          <div className="button_control">
            <Button
              buttonName="Burger"
              onClick={() => {
                setOrders(() => {
                  return [...orders, "Burger"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Fries"
              onClick={() => {
                setOrders(() => {
                  return [...orders, "Fries"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Cola"
              onClick={() => {
                setOrders(() => {
                  return [...orders, "Cola"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Salad"
              onClick={() => {
                setOrders(() => {
                  return [...orders, "Salad"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Ketchup"
              onClick={() => {
                setOrders(() => {
                  return [...orders, "Ketchup"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Ice-cream"
              onClick={() => {
                setOrders(() => {
                  return [...orders, "Ice-cream"];
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_titel">Your Order:</p>
        <ol className="order_list">
          {/* <li className="order_item">Burger</li> */}
          {orderList}
        </ol>
      </div>
    </div>
  );
}

export default Lesson_05;
