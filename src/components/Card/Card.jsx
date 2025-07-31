import "./styles.css";
import { user, getListOfHobbies } from "./data.js";

function Card() {
  return (
    <div className="user_card">
      <div className="left_column">
        <img className="avatar_card" src={user.avatar} alt={user.fullName}></img>
      </div>
      <div className="right_column">
        <p className="full_name">{user.fullName}</p>
        <div className="activity_container">
          <p className="activity_title">Type of activity:</p>
          <p className="activity">{user.activity}</p>
        </div>
        <div className="hobby_container">
          <p className="hobby_list_title">Hobbies:</p>
          <ol className="hobbies">
            <li>{user.hobbies[0]}</li>
            <li>{user.hobbies[1]}</li>
            <li>{user.hobbies[2]}</li>
            {/* {getListOfHobbies(user.hobbies)} */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Card;
