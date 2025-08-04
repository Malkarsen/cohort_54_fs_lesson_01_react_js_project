import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  // Trigger onClick
  // 1 пример: функция прописана заранее
  const testFunction = () => {
    console.log("Click on button. Test works");
  };

  const login = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Login started");
  };

  return (
    <form className="login_form" onSubmit={login}>
      <p className="form_title">Login form</p>
      <div className="form_container">
        <Input
          name={"email"}
          type={"email"}
          placeholder={"Enter your email"}
          label={"Email"}
        />
        <Input
          name={"password"}
          type={"password"}
          placeholder={"Enter your password"}
          label={"Password"}
        />
      </div>
      <Button buttonName="Login" typy="submit" />
      {/* 1 пример: функция прописана заранее */}
      <button type="button" onClick={testFunction}>
        Test
      </button>
      {/* 2 пример: функция прописана непосредственно в фигурных скобках в onClick (анонимная функция) */}
      <button
        type="button"
        onClick={() => {
          console.log("Click on button. Test works");
        }}
      >
        Test
      </button>
    </form>
  );
}

export default LoginForm;
