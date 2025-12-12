export function DecorativeCurves() {
  return (
    <>
      {/* Top right curve */}
      <svg
        className="deco-curve fixed top-20 right-0 w-64 h-96 hidden lg:block"
        viewBox="0 0 200 400"
        preserveAspectRatio="none"
      >
        <path d="M 200 0 Q 50 100 100 200 Q 150 300 200 400" />
      </svg>
      
      {/* Bottom left curve */}
      <svg
        className="deco-curve fixed bottom-0 left-0 w-64 h-96 hidden lg:block"
        viewBox="0 0 200 400"
        preserveAspectRatio="none"
      >
        <path d="M 0 0 Q 150 100 100 200 Q 50 300 0 400" />
      </svg>
    </>
  );
}
