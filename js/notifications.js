export function sendLikeNotification(cardTitle) {
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
