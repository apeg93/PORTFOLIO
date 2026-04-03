// Form validation module

const modalConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const contactConfig = {
  formSelector: ".reservation__form",
  inputSelector: ".form__input",
  submitButtonSelector: "#contact-submit-btn",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

// Display validation error
const showInputError = (formEl, inputEl, msg, cfg) => {
  const errEl = formEl.querySelector(`#${inputEl.id}-error`);
  if (errEl) {
    errEl.textContent = msg;
    errEl.classList.add(cfg.errorClass);
  }
  inputEl.classList.add(cfg.inputErrorClass);
};

// Hide validation error
const hideInputError = (formEl, inputEl, cfg) => {
  const errEl = formEl.querySelector(`#${inputEl.id}-error`);
  if (errEl) {
    errEl.textContent = "";
    errEl.classList.remove(cfg.errorClass);
  }
  inputEl.classList.remove(cfg.inputErrorClass);
};

// Check input validity
const checkInputValidity = (formEl, inputEl, cfg) => {
  inputEl.validity.valid
    ? hideInputError(formEl, inputEl, cfg)
    : showInputError(formEl, inputEl, inputEl.validationMessage, cfg);
};

// Check for invalid inputs
const hasInvalidInput = (inputList) => inputList.some((i) => !i.validity.valid);

// Toggle button state
const toggleButtonState = (inputList, btn, cfg) => {
  hasInvalidInput(inputList) ? disableButton(btn, cfg) : enableButton(btn, cfg);
};

// Disable button
const disableButton = (btn, cfg) => {
  btn.disabled = true;
  btn.classList.add(cfg.inactiveButtonClass);
};

// Enable button
const enableButton = (btn, cfg) => {
  btn.disabled = false;
  btn.classList.remove(cfg.inactiveButtonClass);
};

// Attach form listeners
const setEventListeners = (formEl, cfg) => {
  const inputs = Array.from(formEl.querySelectorAll(cfg.inputSelector));
  const btn = formEl.querySelector(cfg.submitButtonSelector);
  if (!btn) return;
  toggleButtonState(inputs, btn, cfg);
  inputs.forEach((inp) => {
    inp.addEventListener("input", () => {
      checkInputValidity(formEl, inp, cfg);
      toggleButtonState(inputs, btn, cfg);
    });
  });
};

// Initialize validation for modal forms on page load
document.addEventListener("DOMContentLoaded", () => {
  const modalForms = document.querySelectorAll(modalConfig.formSelector);
  modalForms.forEach((form) => setEventListeners(form, modalConfig));

  const contactForm = document.querySelector(contactConfig.formSelector);
  if (contactForm) {
    setEventListeners(contactForm, contactConfig);
    // Handle contact form submission via AJAX
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = Array.from(
        contactForm.querySelectorAll(contactConfig.inputSelector),
      );

      if (hasInvalidInput(inputs)) {
        inputs.forEach((inp) =>
          checkInputValidity(contactForm, inp, contactConfig),
        );
        return;
      }

      // Disable button during submission
      const btn = contactForm.querySelector(contactConfig.submitButtonSelector);
      btn.disabled = true;
      btn.textContent = "Sending...";

      // Prepare form data
      const formData = new FormData(contactForm);

      // Send via AJAX using FormSubmit.co
      fetch("https://formsubmit.co/angel.peguero14@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            // Show success message with animation
            const successMessage = document.getElementById(
              "form-success-message",
            );
            successMessage.classList.add("form__success_visible");

            // Reset form
            contactForm.reset();

            // Revert button text to original
            btn.textContent = "Send Message";

            // Re-check button state after reset
            toggleButtonState(inputs, btn, contactConfig);

            // Hide success message after 5 seconds
            setTimeout(() => {
              successMessage.classList.remove("form__success_visible");
            }, 5000);
          } else {
            alert("Error sending message. Please try again.");
            btn.disabled = false;
            btn.textContent = "Send Message";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error sending message. Please try again.");
          btn.disabled = false;
          btn.textContent = "Send Message";
        });
    });
  }
});
