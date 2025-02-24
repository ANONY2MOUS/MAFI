document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const startButton = document.getElementById("startButton");

  // Try to play music automatically
  audio.play().catch(error => {
      console.log("Autoplay blocked. Waiting for user interaction.");
      startButton.style.display = "block"; // Show button if autoplay fails
  });

  // Button to manually start music if autoplay is blocked
  startButton.addEventListener("click", function () {
      if (audio.paused) {
          audio.play()
              .then(() => {
                  startButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change to pause icon
              })
              .catch(error => console.error("Audio play error:", error));
      } else {
          audio.pause();
          startButton.innerHTML = '<i class="fa-solid fa-music"></i>'; // Change back to music icon
      }
  });
});
