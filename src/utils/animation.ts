// useTransition props for a cross-fade between full-screen layers. The incoming
// layer fades in while the outgoing one stays fully opaque underneath and only
// drops out on the frame the incoming layer becomes opaque, so whatever sits
// behind both never shows through. Render the current item on top (z-index).
export const crossFade = (duration: number) => ({
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: {
    opacity: 0,
    // Runs on the same frame clock as `enter`, unlike `delay` which uses
    // wall-clock time and drifts apart from the fade when frames are dropped.
    config: { duration, easing: (t: number) => (t < 1 ? 0 : 1) },
  },
  config: { duration },
});
