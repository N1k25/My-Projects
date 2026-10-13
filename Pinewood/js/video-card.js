document.querySelectorAll(".house-card").forEach((card) => {
  const playButton = card.querySelector(".house-card__play");
  const video = card.querySelector(".house-card__video");
  const image = card.querySelector(".house-card__image");

  // Запускаємо відео при натисканні на кнопку
  playButton.addEventListener("click", async () => {
    image.hidden = true;
    playButton.hidden = true;
    video.hidden = false;

    try {
      await video.play();
    } catch (error) {
      console.warn("Не удалось запустить видео:", error);
    }
  });

  // Повертаємо обкладинку після завершення відео
  video.addEventListener("ended", () => {
    video.pause();
    video.currentTime = 0;
    video.hidden = true;
    image.hidden = false;
    playButton.hidden = false;
  });
});
