

const CLOUD_NAME = 'dciovdqaf';

export function cld(publicId: string, width = 800): string {
  const id = publicId
    .replace(/^\/+/, '')
    .replace(/\.(png|jpe?g|webp|avif)$/i, '');
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${id}`;
}

export function cldSrcset(publicId: string, widths: number[] = [400, 800]): string {
  return widths.map((w) => `${cld(publicId, w)} ${w}w`).join(', ');
}