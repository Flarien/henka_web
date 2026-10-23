

const CLOUD_NAME = 'dciovdqaf';

export function cld(publicId: string, width = 800): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

export function cldSrcset(publicId: string, widths: number[] = [400, 800]): string {
  return widths.map((w) => `${cld(publicId, w)} ${w}w`).join(', ');
}