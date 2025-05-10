export default function ARViewer() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
    <model-viewer
      src="/models/backpack.glb"
      ios-src="/models/backpack.usdz"
      ar
      ar-modes="scene-viewer webxr quick-look"
      auto-rotate
      camera-controls
      style={{ width: "100%", height: "70%" }}
    ></model-viewer>
  </div>
  );
}
