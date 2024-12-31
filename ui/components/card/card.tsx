import React, { ReactNode } from "react";

export default function Card(props: {
  children?: React.ReactNode;
  title?: string;
  toolbar?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-4 bg-container-default rounded-lg shadow-md border border-border-normal ${props.className}`}
    >
      {props.title ? (
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          { props.toolbar ?? null }
        </div>
      ) : null}
      {props.children}
    </div>
  );
}
