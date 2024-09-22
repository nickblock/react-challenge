import React, { FC, useState } from "react";

type Props = {
  numItems: number,
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const RangeSlider: FC<Props> = (props: Props) => {

  const [value, setValue] = useState(0)

  return (
    <div>
      <input
        type="range"
        min="0"
        max={props.numItems}
        step="1"
        value={value}
        onChange={(e) => {
          props.setValue(+e.target.value)
          setValue(+e.target.value)
        }}
        className="slider"
      />
    </div>
  );
};

export default RangeSlider;