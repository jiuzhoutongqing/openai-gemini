import worker from "../src/worker.mjs";

export default worker.fetch;

export const config = {
  runtime: "edge",
  regions: [
    "hnd1", // 东京
    "kix1", // 大阪
    "icn1", // 首尔
    "sin1", // 新加坡
    "sfo1", // 旧金山
    "pdx1", // 波特兰
    "iad1", // 华盛顿
  ],
};
