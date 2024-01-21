import WebGL from "three/examples/jsm/capabilities/WebGL";
import { renderCube } from "./shapes/cube";
import { renderLinesAndCircles } from "./shapes/linesAndCircles";
import { render3DLoader } from "./shapes/3DLoader";

if (WebGL.isWebGLAvailable()) {
  renderCube();
  renderLinesAndCircles();
  render3DLoader();
} else {
  const warnig = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warnig);
}
