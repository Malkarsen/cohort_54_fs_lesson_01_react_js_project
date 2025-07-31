import "./styles.css";

export default function Button({
  buttonName = "Send",
  onClick = () => {},
  children,
}) {
  return (
    <button className="button_component" onClick={onClick}>
      {/* {children ? "" : buttonName} */}
      {/* Условный рендеринг */}
      {!children && buttonName}
      {children}
    </button>
  );
}

// export default Button;
