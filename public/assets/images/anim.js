"use client";
import Lot from "lottie-react";
import animData from "./no-result.json";

const LotAnim = () => (
  <div>
    <Lot animationData={animData} loop={false} />
  </div>
);

export default LotAnim;