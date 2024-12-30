import React from "react";

export default function Card(props: {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`p-4 bg-container-default rounded-lg shadow-md border border-border-normal ${props.className}`}
    >
      {props.title ? (
        <h3 className="text-lg font-semibold">{props.title} </h3>
      ) : null}
      {props.children}
    </div>
  );
}
