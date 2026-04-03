// Main portfolio application

/* Initial cards data */
const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant Terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An Outdoor Cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A Very Long Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
];

/* ============================================================
   ELEMENT REFERENCES
   ============================================================ */
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  ?.content.querySelector(".card");

const previewModal = document.querySelector("#preview-modal");
const previewCloseBtn = previewModal?.querySelector(".modal__preview-btn");
const previewModalImage = previewModal?.querySelector(".modal__image");
const previewModalCaption = previewModal?.querySelector(".modal__caption");

/* ============================================================
   MODAL MANAGEMENT
   ============================================================ */

// Close modal on Escape key
function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const opened = document.querySelector(".modal_is-opened");
    if (opened) closeModal(opened);
  }
}

// Open modal
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscapeKey);
}

// Close modal
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

// Close modal on backdrop click
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) closeModal(modal);
  });
});

/* ============================================================
   CARD FACTORY & MANAGEMENT
   ============================================================ */

/* ============================================================
   CARD FACTORY & MANAGEMENT
   ============================================================ */

/* ============================================================
   CARD FACTORY & MANAGEMENT
   ============================================================ */

// Create card element from data
function getCardElement(data) {
  const card = cardTemplate.cloneNode(true);
  const titleEl = card.querySelector(".card__title");
  const imageEl = card.querySelector(".card__image");
  const likeBtn = card.querySelector(".card__like-button");
  const deleteBtn = card.querySelector(".card__delete-button");

  imageEl.src = data.link;
  imageEl.alt = data.name;
  titleEl.textContent = data.name;

  // Like button toggle with email notification
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isLiked = likeBtn.classList.toggle("card__like-button_active");
    likeBtn.textContent = isLiked ? "♥" : "♡";

    if (isLiked) {
      card.classList.add("card_liked");
      sendLikeNotification(data.name);
    } else {
      card.classList.remove("card_liked");
    }
  });

  // Delete button
  deleteBtn.addEventListener("click", () => card.remove());

  // Preview on image click
  imageEl.addEventListener("click", () => {
    previewModalImage.src = data.link;
    previewModalImage.alt = data.name;
    previewModalCaption.textContent = data.name;
    openModal(previewModal);
  });

  return card;
}

// Set up event listeners for static cards
function setupStaticCards() {
  document.querySelectorAll(".card").forEach((card) => {
    const img = card.querySelector(".card__image");
    const title = card.querySelector(".card__title");
    const likeBtn = card.querySelector(".card__like-button");
    const delBtn = card.querySelector(".card__delete-button");

    // Like button toggle
    if (likeBtn) {
      likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isLiked = likeBtn.classList.toggle("card__like-button_active");
        likeBtn.textContent = isLiked ? "♥" : "♡";

        if (isLiked) {
          card.classList.add("card_liked");
          sendLikeNotification(title ? title.textContent : "Unknown Card");
        } else {
          card.classList.remove("card_liked");
        }
      });
    }

    // Delete button functionality (if it exists)
    if (delBtn) {
      delBtn.addEventListener("click", () => card.remove());
    }

    // Image preview functionality
    if (img) {
      img.addEventListener("click", () => {
        previewModalImage.src = img.src;
        previewModalImage.alt = img.alt;
        previewModalCaption.textContent = title ? title.textContent : "";
        openModal(previewModal);
      });
    }
  });
}

/* ============================================================
   PREVIEW MODAL
   ============================================================ */

if (previewCloseBtn) {
  previewCloseBtn.addEventListener("click", () => closeModal(previewModal));
}

/* ============================================================
   LIKE NOTIFICATION
   ============================================================ */

// Send like notification email
function sendLikeNotification(cardTitle) {
  const formData = new FormData();
  formData.append("_subject", `Someone liked your card: ${cardTitle}`);
  formData.append("_autoresponse", "Thank you for your interest!");
  formData.append("card_title", cardTitle);
  formData.append("message", `A visitor liked your story card: "${cardTitle}"`);
  formData.append("timestamp", new Date().toLocaleString());

  fetch("https://formsubmit.co/angel.peguero14@gmail.com", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).catch((error) => console.error("Like notification failed:", error));
}

/* ============================================================
   INITIALIZATION
   ============================================================ */

// Initialize the application
function init() {
  setupStaticCards();
}

// Run initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
