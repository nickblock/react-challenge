import React, { useState } from "react";
import { DataAttribute } from "./DataDef";

export type Props = {
  data: DataAttribute[]
}

const BarGraph: React.FC<Props> = (props: Props) => {
  const [selectedBar, setSelectedBar] = useState<number | null>(null);

  const handleBarClick = (index: number) => {
    setSelectedBar(index);
  };

  return (
    <div className="bar-graph-container">
      {props.data.map((bar, index) => {
        const barHeight = bar.value * 2; // Use the actual value for bar height

        return (
          <div
            key={bar.name}
            className={`bar ${selectedBar === index ? "selected" : ""}`}
            style={{
              height: `${selectedBar === index ? barHeight - 4 : barHeight}px`
            }}
            onClick={() => handleBarClick(index)}
          />
        );
      })}
    </div>
  );
};

export default BarGraph;