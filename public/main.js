let locoScroll;
locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
new ResizeObserver(() => locoScroll.update()).observe(
  document.querySelector("[data-scroll-container]")
);

