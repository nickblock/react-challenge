import React, { useState } from "react";
import { DataAttribute } from "./DataDef";

export type Props = {
  data: DataAttribute[]
}

const BarGraph: React.FC<Props> = (props: Props) => {

  return (
    <div className="bar-graph-container">
      {props.data.map((bar, index) => {
        const barLength = bar.value * 20; // Use the actual value for bar height

        return (
          <div
            key={bar.name}
            className="bar"
            style={{
              width: `${barLength}px`
            }}
          />
        );
      })}
    </div>
  );
};

export default BarGraph;