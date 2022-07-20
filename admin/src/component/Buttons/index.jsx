import React from "react";
import classnames from "classnames";

export default function Buttons({ children, icon, ...props }) {
  return (
    <div
      className={classnames(
        "buttons",
        `size-${props.size || "full"}`,
        `bg-${props.bgcolor || "main"}`,
        `color-${props.color || "white"}`,
        { radius: !!props.radius },
        { border: !!props.border }
      )}
      onClick={props.onClick}
    >
      {icon ? icon : ""}
      {children}
    </div>
  );
}
