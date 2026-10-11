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
 * Generates formatted text for general inquiries form
 */
export function generateFormInquiryMessage({ name, phone, division, product, message, customNote }) {
  const parts = [
    `*NEW WEBSITE INQUIRY - AL FALAH HARDWARE & SANITARY*`,
    `----------------------------------------`,
    `👤 *Name:* ${name || 'Prospective Customer'}`,
    `📞 *Phone:* ${phone || 'Not provided'}`,
    `🏢 *Interested Division:* ${division || 'General Inquiry'}`,
  ];

  if (product) {
    parts.push(`📦 *Product / Requirement:* ${product}`);
  }

  if (message) {
    parts.push(`💬 *Customer Note / Message:* ${message}`);
  }

  if (customNote) {
    parts.push(`ℹ️ *Details:* ${customNote}`);
  }

  parts.push(`----------------------------------------`);
  parts.push(`Sent via Website Inquiry Portal`);

  return parts.join('\n');
}

/**
 * Generates WhatsApp URL for a specific product
 */
export function getProductInquiryUrl(product, selectedSize = null) {
  const text = [
    `*PRODUCT INQUIRY - AL FALAH HARDWARE & SANITARY*`,
    `----------------------------------------`,
    `📦 *Product:* ${product.name}`,
    `🏢 *Division:* ${product.divisionName || product.divisionId}`,
    `🏷️ *Category:* ${product.category}`,
    selectedSize ? `📏 *Requested Size/Variant:* ${selectedSize}` : null,
    `----------------------------------------`,
    `Hello Al Falah Team, I would like to get pricing, availability, and technical details for this product. Please share the catalogue & bulk quotation.`
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
    `Hello Al Falah Hardware & Sanitary team,`,
    `I am interested in your *${divisionName}* product range and solutions.`,
    `Please connect with me for technical catalogue, site requirement discussion, and pricing.`
  ].join('\n');

  return buildWhatsAppLink(text);
}

/**
 * Generates WhatsApp URL for requesting a brochure
 */
export function getBrochureRequestUrl(brochureTitle) {
  const text = [
    `*BROCHURE & CATALOGUE REQUEST*`,
    `----------------------------------------`,
    `Hello Al Falah Team,`,
    `I would like to request the digital copy / latest rate sheet for:`,
    `📄 *${brochureTitle}*`,
    `Please share the PDF file on WhatsApp. Thank you!`
  ].join('\n');

  return buildWhatsAppLink(text);
}
