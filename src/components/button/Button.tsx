import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "Warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant,style, ...rest }: TButton) {
  return (
    <button {...rest} style={{borderRadius:"6px",padding: "6px 12px", ...style, ...checkVariant(variant) }}>
      {children}
    </button>
  );
} 

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "danger") {
    return { backgroundColor: "yellow", color: "black" };
  } else if (variant === "Warning") {
    return { backgroundColor: "red", color: "black" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "black" };
  }
}
