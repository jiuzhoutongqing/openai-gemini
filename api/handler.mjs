import worker from "../src/worker.mjs";

export default {
  fetch(request) {
    return worker.fetch(request);
  },
};
