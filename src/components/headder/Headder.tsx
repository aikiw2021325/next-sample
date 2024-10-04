import React from "react";

type messageProps = {
  message: string
}

export function Headder(props: messageProps) {

  return (
    <div>
      <h2 className="text-black text-md sm:text-lg font-bold ">{props.message}</h2>
    </div>
  );

}