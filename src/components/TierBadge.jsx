import React from "react";

const tierStyles = {
  Diamond: "bg-blue-400 text-white",
  Platinum: "bg-green-400 text-white",
  Gold: "bg-yellow-400 text-black",
  Silver: "bg-gray-300 text-black",
  Bronze: "bg-orange-500 text-black",
};

function TierBadge({ tier }) {
  return (
    <span className={`px-2 py-1 rounded-full ${tierStyles[tier.slice(0, -2)]}`}>
      {tier.substr(-1)}
    </span>
  );
}

export default TierBadge;
