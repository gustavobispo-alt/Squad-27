// Offer page functionality
function goBack() {
  window.location.href = "feedback.html"
}

function confirmCancel() {
  if (confirm("Tem certeza que deseja cancelar sua assinatura?")) {
    window.location.href = "cancellation-complete.html"
  }
}

function continueToNext() {
  window.location.href = "final-details.html"
}
