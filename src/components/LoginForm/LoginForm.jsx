import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  return (
    <form className="login_form">
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
    </form>
  );
}

export default LoginForm;
