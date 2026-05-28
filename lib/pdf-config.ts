/**
 * PDF.js Configuration
 * Handles worker setup and error handling for PDF.js in Next.js
 */

import { pdfjs } from 'react-pdf';

export const configurePDFWorker = () => {
  // Only configure on client side
  if (typeof window === 'undefined') return;

  // Disable fake worker to prevent errors
  pdfjs.GlobalWorkerOptions.workerSrc = '';

  // Configure worker with multiple fallbacks
  const workerSources = [
    '/pdf.worker.min.js', // Local fallback
    'https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.worker.min.js', // Unpkg CDN
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.js', // Cloudflare CDN
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.min.js' // Jsdelivr CDN
  ];

  let workerConfigured = false;

  for (const workerSrc of workerSources) {
    try {
      pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
      console.log('PDF worker configured:', workerSrc);
      workerConfigured = true;
      break;
    } catch (error) {
      console.warn(`Failed to configure PDF worker with ${workerSrc}:`, error);
      continue;
    }
  }

  if (!workerConfigured) {
    console.error('Failed to configure PDF worker with any source');
    // Set empty worker src to prevent further errors
    pdfjs.GlobalWorkerOptions.workerSrc = '';
  }
};

// Export for use in components
export { pdfjs };
