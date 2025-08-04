import "./styles.css";

export default function Button({
  buttonName = "Send",
  typy = "button",
  onClick = () => {},
  children,
}) {
  return (
    <button className="button_component" type={typy} onClick={onClick}>
      {/* {children ? "" : buttonName} */}
      
      {/* Условный рендеринг */}
      {!children && buttonName}
      {children}
    </button>
  );
}

// export default Button;
