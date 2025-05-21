import React from "react";

import { MdHome } from "react-icons/md";
import * as AllIcons from "react-icons/md";
import randomcolor from "randomcolor";

const AllIconComponents = Object.values(AllIcons);
console.log(AllIconComponents);

console.log(randomcolor());

export default function Day14ReactIcons() {
  return (
    <div>
      <h1>Icons Demo</h1>

      {AllIconComponents.map((Icon, index) => {
        return <Icon key={index} color={randomcolor()} size={50} />;
      })}
    </div>
  );
}
