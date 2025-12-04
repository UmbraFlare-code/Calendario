const PHONE_NUMBER = "+51926061849" // Agregar número de WhatsApp (ej: "34612345678")

export function sendWhatsAppMessage(title: string, description: string): void {
  const message = encodeURIComponent(
    `*¡Cupón Canjeado!*\n\n`+
    `*${title}*\n` +
    `${description}\n\n`
  );

  const url = PHONE_NUMBER ? `https://wa.me/${PHONE_NUMBER}?text=${message}` : `https://wa.me/?text=${message}`

  window.open(url, "_blank")
}
