import { openModal } from "./modal.js";
import { sendLikeNotification } from "./notifications.js";

function setupStoryCards() {
  document.querySelectorAll(".card").forEach((card) => {
    const image = card.querySelector(".card__image");
    const title = card.querySelector(".card__title");
    const likeButton = card.querySelector(".card__like-button");
    const deleteButton = card.querySelector(".card__delete-button");

    likeButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      const isLiked = likeButton.classList.toggle("card__like-button_active");
      likeButton.textContent = isLiked ? "♥" : "♡";

      if (isLiked) {
        card.classList.add("card_liked");
        sendLikeNotification(title?.textContent || "Unknown Card");
      } else {
        card.classList.remove("card_liked");
      }
    });

    deleteButton?.addEventListener("click", () => card.remove());

    image?.addEventListener("click", () => {
      const previewModal = document.querySelector("#preview-modal");
      const previewImage = previewModal?.querySelector(".modal__image");
      const previewCaption = previewModal?.querySelector(".modal__caption");

      if (!previewModal || !previewImage || !previewCaption) return;

      previewImage.src = image.src;
      previewImage.alt = image.alt;
      previewCaption.textContent = title?.textContent || "";
      openModal(previewModal);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupStoryCards);
} else {
  setupStoryCards();
}
