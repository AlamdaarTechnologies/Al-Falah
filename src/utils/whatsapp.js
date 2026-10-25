import { businessInfo } from '../data/businessInfo';

/**
 * Builds a direct WhatsApp click-to-chat URL with cleanly formatted text.
 * @param {string} text - Message body
 * @returns {string} WhatsApp URL
 */
export function buildWhatsAppLink(text) {
  const cleanNumber = (businessInfo.whatsappNumber || "919876543210").replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates WhatsApp URL for a specific product
 */
export function getProductInquiryUrl(product, selectedSize = null) {
  const text = [
    `*PRODUCT INQUIRY - AL FALAH ENTERPRISE*`,
    `----------------------------------------`,
    `📦 *Product:* ${product.name}`,
    `🏢 *Division:* ${product.divisionName || product.divisionId}`,
    `🏷️ *Category:* ${product.category}`,
    selectedSize ? `📏 *Requested Size/Variant:* ${selectedSize}` : null,
    `----------------------------------------`,
    `Hello Al Falah Enterprise, I would like to get pricing, availability, and technical details for this product. Please share the catalogue & bulk quotation.`
  ].filter(Boolean).join('\n');

  return buildWhatsAppLink(text);
}

/**
 * Generates WhatsApp URL for a specific division
 */
export function getDivisionInquiryUrl(divisionName) {
  const text = [
    `*DIVISION INQUIRY - ${divisionName?.toUpperCase()}*`,
    `----------------------------------------`,
    `Hello Al Falah Enterprise team,`,
    `I am interested in your *${divisionName}* product range and solutions.`,
    `Please connect with me for technical catalogue, site requirement discussion, and pricing.`
  ].join('\n');

  return buildWhatsAppLink(text);
}
