export default function GlobalBackground() {
  return (
    <>
      <div
        className="pc-blob-1"
        style={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: 0,
          opacity: 0.6,
          width: 500,
          height: 500,
          background: "rgba(230,57,70,0.3)",
          top: -100,
          left: -100,
          pointerEvents: "none",
        }}
      />
      <div
        className="pc-blob-2"
        style={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: 0,
          opacity: 0.6,
          width: 600,
          height: 600,
          background: "rgba(10,37,89,0.8)",
          bottom: -200,
          right: -100,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
