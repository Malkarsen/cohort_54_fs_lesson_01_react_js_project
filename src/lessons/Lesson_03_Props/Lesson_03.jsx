import "./styles.css";
import SimpsonsCard from "../../components/SimpsonsCard/SimpsonsCard";
import Button from "../../components/Button/Button";

function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };
  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No Job",
    hobby: "coocking",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };
  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skate",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  const getUser = () => {
    console.log("Button works");
  };

  return (
    <div className="lesson03_page_wrapper">
      <SimpsonsCard
        avatarURL={homerSimpson.avatarURL}
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      />
      <SimpsonsCard
        avatarURL={margeSimpson.avatarURL}
        firstName={margeSimpson.firstName}
        lastName={margeSimpson.lastName}
        job={margeSimpson.job}
        hobby={margeSimpson.hobby}
      />
      <SimpsonsCard
        avatarURL={bartSimpson.avatarURL}
        firstName={bartSimpson.firstName}
        lastName={bartSimpson.lastName}
        job={bartSimpson.job}
        hobby={bartSimpson.hobby}
      />
      <div className="buttonContainer">
        <Button buttonName={"Get User"} onClick={getUser} />
        <Button
          buttonName={"Send reques"}
          onClick={() => {
            console.log("Send request");
          }}
        />
        <Button>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/9971/9971680.png"
          ></img>
        </Button>
        {/* <button onClick={getUser}>Get</button> */}
      </div>
    </div>
  );
}

export default Lesson_03;
