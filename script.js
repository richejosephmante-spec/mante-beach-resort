// Small booking helper: opens the visitor's email app with the selected room prefilled.
document.querySelectorAll(".room-book-link").forEach((link) => {
  const roomName = link.dataset.room || "Room";
  const subject = encodeURIComponent(`Booking inquiry - ${roomName}`);
  const body = encodeURIComponent(
    `Hello Mante Beach Resort,\n\nI would like to ask about availability and booking for the ${roomName}.\n\nName:\nPreferred date:\nNumber of guests:\n\nThank you!`
  );

  link.href = `mailto:mantebeachresort@gmail.com?subject=${subject}&body=${body}`;
});

// Keep in-page navigation smooth and accessible.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
