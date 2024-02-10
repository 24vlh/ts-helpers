/**
 * Saves the document as a new file with the specified file path.
 *
 * @param {string} filePath - The file path where the document will be saved.
 * @param {Document} document - The document object to be saved.
 * @param {string} [forceDownloadAndSetName] - Optional parameter to force download the file and set the downloaded file name.
 *
 * @return {void}
 */
export function SaveAs(
  filePath: string,
  document: Document,
  forceDownloadAndSetName?: string
) {
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = filePath;
  link.target = '_blank';
  if (forceDownloadAndSetName) {
    link.download = forceDownloadAndSetName;
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Saves the document as a primitive file with the given file path.
 * Optionally, force downloads the file and sets a custom name for the download.
 *
 * @param {string} filePath - The path where the file should be saved.
 * @param {Document} document - The document to be saved.
 * @param {string} [forceDownloadAndSetName] - Optional. The name of the file when force downloading.
 * @returns {void}
 */
export function SaveAsPrimitive(
  filePath: string,
  document: Document,
  forceDownloadAndSetName?: string | undefined
): void {
  const c = new Date().getTime();
  const d: Record<string, HTMLAnchorElement> = {};
  d[c] = document.createElement('a');
  d[c].href = filePath;
  d[c].target = '_blank';
  if (forceDownloadAndSetName) {
    d[c].download = forceDownloadAndSetName;
  }
  document.body.appendChild(d[c]);
  d[c].click();
  document.body.removeChild(d[c]);
}

/**
 * Save the given Blob as a file by creating a temporary URL and invoking the SaveAs function.
 * @param {Blob} blob - The Blob to save as a file.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional parameter to force the file download and set a custom file name.
 * @return {void}
 */
export function SaveAsBlob(
  blob: Blob,
  document: Document,
  forceDownloadAndSetName?: string
) {
  const url: string = URL.createObjectURL(blob);
  SaveAs(url, document, forceDownloadAndSetName);
  URL.revokeObjectURL(url);
}

/**
 * Saves the given text as a text file.
 *
 * @param {string} text - The text to save.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional parameter specifying the name for the saved file.
 * @return {undefined}
 */
export function SaveAsText(
  text: string,
  document: Document,
  forceDownloadAndSetName?: string
): undefined {
  const blob: Blob = new Blob([text], { type: 'text/plain' });
  SaveAsBlob(blob, document, forceDownloadAndSetName);
}

/**
 * Saves the given JSON object as a file.
 *
 * @param {unknown} json - The JSON object to be saved.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional parameter to force download and set the name of the file.
 * @return {void}
 */
export function SaveAsJson(
  json: unknown,
  document: Document,
  forceDownloadAndSetName?: string
) {
  const text: string = JSON.stringify(json, null, 2);
  SaveAsText(text, document, forceDownloadAndSetName);
}

/**
 * Saves the given data as a CSV file.
 *
 * @param {unknown[][]} data The data to be saved as a CSV file.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] Optional. The name to be used for the downloaded CSV file.
 * @return {void}
 */
export function SaveAsCsv(
  data: unknown[][],
  document: Document,
  forceDownloadAndSetName?: string
) {
  const csv: string = data.map((row) => row.join(',')).join('\n');
  SaveAsText(csv, document, forceDownloadAndSetName);
}

/**
 * Saves the given XML content as a file. Optionally, allows forcing the download and setting a specific filename.
 *
 * @param {string} xml - The XML content to save as a file.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional. The filename to use for the downloaded file.
 *
 * @return {void}
 */
export function SaveAsXml(
  xml: string,
  document: Document,
  forceDownloadAndSetName?: string
) {
  const blob: Blob = new Blob([xml], { type: 'application/xml' });
  SaveAsBlob(blob, document, forceDownloadAndSetName);
}

/**
 * Saves the given HTML content as an HTML file.
 *
 * @param {string} html - The HTML content to be saved.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional. Specifies the name of the file to be downloaded.
 *                                              If not provided, the default name will be used.
 * @return {void}
 */
export function SaveAsHtml(
  html: string,
  document: Document,
  forceDownloadAndSetName?: string
) {
  const blob: Blob = new Blob([html], { type: 'text/html' });
  SaveAsBlob(blob, document, forceDownloadAndSetName);
}

/**
 * Saves the given image as a downloadable file.
 *
 * @param {HTMLImageElement} image - The image element to be saved.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - (Optional) The desired name for the downloaded file.
 * @returns {void}
 */
export function SaveAsImage(
  image: HTMLImageElement,
  document: Document,
  forceDownloadAndSetName?: string
) {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
  context.drawImage(image, 0, 0);
  canvas.toBlob((blob) => {
    SaveAsBlob(blob!, document, forceDownloadAndSetName);
  });
}

/**
 * Saves the content of the given canvas element as an image file.
 *
 * @param {HTMLCanvasElement} canvas - The canvas element to save.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional. The name of the file to force download and set.
 *                                              If not provided, the browser will use a default name.
 * @return {void}
 */
export function SaveAsCanvas(
  canvas: HTMLCanvasElement,
  document: Document,
  forceDownloadAndSetName?: string
) {
  canvas.toBlob((blob) => {
    SaveAsBlob(blob!, document, forceDownloadAndSetName);
  });
}

/**
 * Saves the given PDF as a file.
 *
 * @param {Blob} pdf - The PDF to be saved.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional parameter to force the download and specify a custom name for the file.
 */
export function SaveAsPdf(
  pdf: Blob,
  document: Document,
  forceDownloadAndSetName?: string
) {
  SaveAsBlob(pdf, document, forceDownloadAndSetName);
}

/**
 * Saves the given audio as a file.
 *
 * @param {HTMLAudioElement} audio - The audio element to save.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - The name to force the download as.
 * @param {BlobPropertyBag} [options] - The options to pass to the Blob constructor.
 * @return {void}
 */
export function SaveAsAudio(
  audio: HTMLAudioElement,
  document: Document,
  forceDownloadAndSetName?: string,
  options?: BlobPropertyBag
) {
  const blob: Blob = new Blob([audio.src], options);
  SaveAsBlob(blob, document, forceDownloadAndSetName);
}

/**
 * Saves the given HTML video element as a video file.
 *
 * @param {HTMLVideoElement} video - The HTML video element to be saved.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - The name to be used for the downloaded video file. If not provided, the original video file name will be used.
 * @param {BlobPropertyBag} [options] - The options for creating the Blob object.
 * @return {void}
 */
export function SaveAsVideo(
  video: HTMLVideoElement,
  document: Document,
  forceDownloadAndSetName?: string,
  options?: BlobPropertyBag
) {
  const blob: Blob = new Blob([video.src], options);
  SaveAsBlob(blob, document, forceDownloadAndSetName);
}

/**
 * Saves the given file as a file on the client-side.
 * @param {Document} document - The current Document object.
 * If a new name is provided, it forces the download with the new name.
 *
 * @param {File} file - The file to be saved.
 * @param {string} [forceDownloadAndSetName] - Optional. The new name for the downloaded file.
 *
 * @return {void}
 */
export function SaveAsFile(
  file: File,
  document: Document,
  forceDownloadAndSetName?: string
) {
  SaveAsBlob(file, document, forceDownloadAndSetName);
}

/**
 * Saves the given ArrayBuffer as a file.
 *
 * @param {ArrayBuffer} buffer - The ArrayBuffer to be saved as a file.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional parameter to force download and set the name of the file.
 * @return {void}
 */
export function SaveAsArrayBuffer(
  buffer: ArrayBuffer,
  document: Document,
  forceDownloadAndSetName?: string
) {
  const blob: Blob = new Blob([buffer], { type: 'application/octet-stream' });
  SaveAsBlob(blob, document, forceDownloadAndSetName);
}

/**
 * Saves the given array of BlobParts as a Blob and triggers the download of the Blob.
 *
 * @param {BlobPart[]} parts - The array of BlobParts to be saved.
 * @param {Document} document - The current Document object.
 * @param {string} [forceDownloadAndSetName] - Optional parameter to force a specific download name.
 *
 * @return {void}
 */
export function SaveAsBlobParts(
  parts: BlobPart[],
  document: Document,
  forceDownloadAndSetName?: string
) {
  const blob: Blob = new Blob(parts);
  SaveAsBlob(blob, document, forceDownloadAndSetName);
}
