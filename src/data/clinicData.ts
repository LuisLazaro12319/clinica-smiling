/**
 * Clínica Dental Smiling - datos de la clínica y de sus sucursales.
 * Fuente: Instagram @clinicadentalsmiling_srl (publicación de turnos y sucursales) y ficha de Google Maps
 * "Clínica Dental Smiling - Monserrat". Todo lo que se muestra en la web sale de acá.
 */

export const CLINIC = {
  name: 'Clínica Dental Smiling',
  initials: 'CS',
  professional: 'nuestro equipo de odontólogos',
  street: 'México 1520',
  // Resumen de las sucursales para el inicio, el menú y el pie.
  streets: '5 sucursales en CABA y Laferrere',
  locality: 'CABA y Laferrere',
  province: 'Buenos Aires',
  fullAddress: 'México 1520, C1097ABF Ciudad Autónoma de Buenos Aires',
  since: 0,
  // Teléfono fijo que publican en su Instagram.
  phone: '011 4727-2910',
  // Número "SÓLO TURNOS" de la publicación de sucursales.
  whatsappNumber: '5491165720515',
  whatsappDisplay: '11 6572-0515',
  instagramHandle: '@clinicadentalsmiling_srl',
  instagramUrl: 'https://www.instagram.com/clinicadentalsmiling_srl/',
  mapsUrl: 'https://maps.app.goo.gl/FGMGh3uahToHnEY5A',
  coordinates: { lat: -34.6156182, lng: -58.3877469 },
  // Calificación visible en la ficha de Google Maps de la sucursal Monserrat.
  googleRating: '4.6',
  googleReviews: 88,
  googleNote: 'Opiniones en Google · sucursal Monserrat',
  googleScope: ' en la sucursal Monserrat',
  photo: null as string | null,
  servicesSummary: 'ortodoncia, prótesis, implantes, estudios RX, caries, estética dental y extracciones',
  paymentMethods: [] as string[],
  hoursSummary: 'Sucursal Monserrat: lunes a sábado de 9 a 18 hs',
  headline: 'Tu sonrisa,',
  headlineHighlight: 'cerca de tu casa',
  locationLabel: 'CABA y Laferrere',
};

export interface Branch {
  id: string;
  /** Calle y altura, como figura en su publicación. */
  label: string;
  /** Barrio o localidad. */
  zone: string;
  fullAddress: string;
  /** Enlace para llegar con Google Maps. */
  mapsUrl: string;
  /** Texto para ubicar el punto en el mapa incrustado. */
  mapQuery: string;
  /** WhatsApp de turnos de la sucursal (formato internacional, sin signos). */
  whatsapp: string;
  whatsappDisplay: string;
  /** Foto de la fachada o del interior (ruta dentro de /public); null muestra un recuadro reservado. */
  photo: string | null;
  /** Si es true se muestran los horarios de SCHEDULE; si no, se invita a consultarlos por WhatsApp. */
  showSchedule: boolean;
}

const dirUrl = (direccion: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccion)}`;

// Sucursales de la publicación de turnos del Instagram. Horarios: solo Monserrat figura en Google; A CONFIRMAR el resto.
export const BRANCHES: Branch[] = [
  {
    id: 'monserrat',
    label: 'México 1520',
    zone: 'Monserrat',
    fullAddress: 'México 1520, Monserrat, Ciudad de Buenos Aires',
    mapsUrl: 'https://maps.app.goo.gl/FGMGh3uahToHnEY5A',
    mapQuery: '-34.6156182,-58.3877469',
    whatsapp: '5491155239918',
    whatsappDisplay: '11 5523-9918',
    photo: null,
    showSchedule: true,
  },
  {
    id: 'congreso',
    label: 'Solís 283',
    zone: 'Congreso',
    fullAddress: 'Solís 283, Congreso, Ciudad de Buenos Aires',
    mapsUrl: dirUrl('Solís 283, Ciudad de Buenos Aires'),
    mapQuery: 'Solís 283, Ciudad de Buenos Aires',
    whatsapp: '5491167523939',
    whatsappDisplay: '11 6752-3939',
    photo: null,
    showSchedule: false,
  },
  {
    id: 'balvanera',
    label: 'Matheu 29',
    zone: 'Balvanera',
    fullAddress: 'Matheu 29, Balvanera, Ciudad de Buenos Aires',
    mapsUrl: dirUrl('Matheu 29, Ciudad de Buenos Aires'),
    mapQuery: 'Matheu 29, Ciudad de Buenos Aires',
    whatsapp: '5491171129824',
    whatsappDisplay: '11 7112-9824',
    photo: null,
    showSchedule: false,
  },
  {
    id: 'flores',
    label: 'Rivadavia 7034',
    zone: 'Flores',
    fullAddress: 'Av. Rivadavia 7034, Flores, Ciudad de Buenos Aires',
    mapsUrl: dirUrl('Av. Rivadavia 7034, Ciudad de Buenos Aires'),
    mapQuery: 'Av. Rivadavia 7034, Ciudad de Buenos Aires',
    whatsapp: '5491125461766',
    whatsappDisplay: '11 2546-1766',
    photo: null,
    showSchedule: false,
  },
  {
    id: 'laferrere',
    label: 'Esteban Echeverría 6196',
    zone: 'Laferrere (1º piso)',
    fullAddress: 'Esteban Echeverría 6196, 1º piso, Laferrere, Provincia de Buenos Aires',
    mapsUrl: dirUrl('Esteban Echeverría 6196, Laferrere, Buenos Aires'),
    mapQuery: 'Esteban Echeverría 6196, Laferrere, Buenos Aires',
    whatsapp: '5491158515849',
    whatsappDisplay: '11 5851-5849',
    photo: null,
    showSchedule: false,
  },
];

export interface Highlight {
  icon: 'star' | 'heart' | 'calendar' | 'users' | 'pin';
  title: string;
  text: string;
}

// Las tres cajitas debajo del inicio: salen de lo que publican (sucursales, promos) y de lo que
// destacan las opiniones de Google (precios accesibles).
export const HIGHLIGHTS: Highlight[] = [
  { icon: 'pin', title: '5 sucursales', text: 'En CABA y Laferrere, elegí la más cercana' },
  { icon: 'heart', title: 'Precios accesibles', text: 'Y promociones, según destacan sus pacientes' },
  { icon: 'calendar', title: 'Turnos por WhatsApp', text: 'Cada sucursal tiene su número' },
];

export interface Review {
  /** Nombre y inicial tal como figura en Google; null si el extracto no muestra autor. */
  author: string | null;
  text: string;
}

// Extractos textuales de opiniones públicas de la ficha de Google Maps (sucursal Monserrat).
export const REVIEWS: Review[] = [
  {
    author: 'Oscar S.',
    text: 'Excelente atención y calidad de servicio, buenos precios y promociones.El Dr.Bobarin es meticuloso y exigente con la entrega final ...un servicio para recomendar....',
  },
  { author: null, text: 'Precios accesibles, te arreglan bien y te tratan bien.' },
  {
    author: 'Milanyela S.',
    text: 'Hola. Puedo decir que el trabajo que recibí por parte de la clínica a sido excelente, muy agradecida de clínica Dental Smiling por su atención ...',
  },
  { author: null, text: 'Excelente atención , cumplen con los hablado Muy recomendable' },
  {
    author: 'DGS',
    text: 'Me lleva mí tratamiento de Ortodoncia el Dr Jainer Contreras. Muy buen Ortodoncista amable, comprensivo y sobre todo paciente. La verdad buenos resultados y cambio totalmente  lo más importante de mí. ( La sonrisa).',
  },
];

export interface DentalService {
  id: string;
  name: string;
  description: string;
  icon: 'stethoscope' | 'sparkles' | 'layers' | 'shield' | 'activity' | 'smile' | 'crown' | 'anchor' | 'gem';
}

// Tratamientos que publican en los destacados de su Instagram.
export const SERVICES: DentalService[] = [
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    description: 'Corrección de la posición de los dientes y de la mordida, con seguimiento en cada control.',
    icon: 'sparkles',
  },
  {
    id: 'protesis',
    name: 'Prótesis',
    description: 'Reposición de piezas dentales, fijas o removibles, para recuperar la masticación y la sonrisa.',
    icon: 'layers',
  },
  {
    id: 'implantes',
    name: 'Implantes',
    description: 'Reposición de piezas dentales con implantes para recuperar la función y la estética.',
    icon: 'gem',
  },
  {
    id: 'rx',
    name: 'Estudios RX',
    description: 'Radiografías para diagnosticar y planificar tu tratamiento.',
    icon: 'activity',
  },
  {
    id: 'caries',
    name: 'Caries',
    description: 'Arreglo de caries y restauraciones para devolverle forma y función a tus dientes.',
    icon: 'stethoscope',
  },
  {
    id: 'estetica',
    name: 'Estética dental',
    description: 'Tratamientos para mejorar el color, la forma y la armonía de tu sonrisa.',
    icon: 'smile',
  },
  {
    id: 'placas',
    name: 'Placas',
    description: 'Placas dentales a medida para cuidar tus dientes.',
    icon: 'shield',
  },
  {
    id: 'extracciones',
    name: 'Extracciones',
    description: 'Extracción de piezas dentales cuando es necesaria, con indicaciones claras para el después.',
    icon: 'crown',
  },
];

export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = domingo ... 6 = sábado
  open: string | null;
  close: string | null;
}

// Horarios de la sucursal Monserrat (ficha de Google Maps).
export const SCHEDULE: ScheduleDay[] = [
  { dayName: 'Lunes', dayIndex: 1, open: '09:00', close: '18:00' },
  { dayName: 'Martes', dayIndex: 2, open: '09:00', close: '18:00' },
  { dayName: 'Miércoles', dayIndex: 3, open: '09:00', close: '18:00' },
  { dayName: 'Jueves', dayIndex: 4, open: '09:00', close: '18:00' },
  { dayName: 'Viernes', dayIndex: 5, open: '09:00', close: '18:00' },
  { dayName: 'Sábado', dayIndex: 6, open: '09:00', close: '18:00' },
  { dayName: 'Domingo', dayIndex: 0, open: null, close: null },
];

const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export interface ClinicStatus {
  isOpen: boolean;
  badge: string;
  detail: string;
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function getClinicStatus(now: Date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = (parts.find((p) => p.type === 'weekday')?.value || '').toLowerCase().slice(0, 3);
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const dayMap: Record<string, number> = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  const today = dayMap[weekday] ?? now.getDay();
  const minutes = hour * 60 + minute;

  const day = SCHEDULE.find((d) => d.dayIndex === today);
  if (day?.open && day.close) {
    if (minutes >= toMinutes(day.open) && minutes < toMinutes(day.close)) {
      return { isOpen: true, badge: 'Abierto ahora', detail: `Cierra a las ${day.close} hs` };
    }
    if (minutes < toMinutes(day.open)) {
      return { isOpen: false, badge: 'Cerrado ahora', detail: `Abre hoy a las ${day.open} hs` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = SCHEDULE.find((d) => d.dayIndex === (today + i) % 7);
    if (next?.open) {
      const cuando = i === 1 ? 'mañana' : `el ${next.dayName.toLowerCase()}`;
      return { isOpen: false, badge: 'Cerrado por hoy', detail: `Abre ${cuando} a las ${next.open} hs` };
    }
  }
  return { isOpen: false, badge: 'Cerrado ahora', detail: '' };
}

/** Enlace de WhatsApp con el mensaje armado; sin número usa el de turnos general. */
export function whatsappUrl(message: string, number: string = CLINIC.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
