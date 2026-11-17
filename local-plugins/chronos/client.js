function renderChronos() {
  if (typeof window.ChronosTimeline === "undefined") return

  document.querySelectorAll(".chronos-timeline").forEach((container) => {
    if (container.dataset.rendered === "true") return

    const source = container.dataset.chronos
    if (!source) return

    window.ChronosTimeline.renderChronos(container, source)
    container.dataset.rendered = "true"
  })
}

document.addEventListener("nav", renderChronos)
document.addEventListener("DOMContentLoaded", renderChronos)
renderChronos()
