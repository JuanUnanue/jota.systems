// Mock data para el demo de la veterinaria a domicilio (M. Ángeles Martínez).
// Todos los datos son ficticios. La fecha de referencia ("hoy") es 2026-04-30.

export type Especie = 'perro' | 'gato';
export type Sexo = 'macho' | 'hembra';
export type EstadoMascota = 'activo' | 'inactivo';
export type EstadoSanitario = 'al-dia' | 'proxima' | 'vencida' | 'no-aplica';
export type EstadoVisita = 'confirmado' | 'finalizado' | 'cancelado' | 'en-curso';

export type TipoVisita =
  | 'Control'
  | 'Vacunación'
  | 'Antiparasitario'
  | 'Urgencia'
  | 'Cirugía'
  | 'Castración'
  | 'Limpieza dental'
  | 'Control + vacuna';

export type CategoriaInsumo =
  | 'Vacuna canina'
  | 'Vacuna felina'
  | 'Antiparasitario'
  | 'Quirúrgico'
  | 'Consumible';

export interface RegistroVacuna {
  nombre: string; // 'Antirrábica', 'Óctuple', 'Triple felina', etc.
  ultimaAplicacion: string; // ISO YYYY-MM-DD, '' si nunca
  proximaAplicacion: string; // ISO
  estado: EstadoSanitario;
  observaciones?: string;
}

export interface RegistroAntiparasitario {
  nombre: string; // 'Bravecto', 'NexGard', 'Endogard', 'Drontal Plus'
  via: 'interno' | 'externo';
  ultimaAplicacion: string;
  proximaAplicacion: string;
  estado: EstadoSanitario;
}

export interface EntradaHistoria {
  fecha: string;
  titulo: string;
  detalle: string;
  pesoKg?: number; // si en esa visita se tomó peso
}

export interface Dueno {
  id: string;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  direccion: string;
  zona: string; // 'Plaza Mitre', 'Centro', etc.
}

export interface Mascota {
  slug: string;
  nombre: string;
  especie: Especie;
  raza: string;
  edad: number; // años
  sexo: Sexo;
  pesoKg: number;
  castrado: boolean;
  microchip?: string;
  alergias: string[];
  observaciones?: string;
  duenoId: string;
  fechaAlta: string; // primer visita
  ultimoControl: string;
  proximaVisita?: string;
  estado: EstadoMascota;
  historia: EntradaHistoria[];
  vacunas: RegistroVacuna[];
  antiparasitarios: RegistroAntiparasitario[];
}

export interface Visita {
  id: string;
  fecha: string;
  hora: string; // "10:30"
  duracionMin: number;
  duenoId: string;
  mascotaSlugs: string[]; // 1+ mascotas del mismo dueño
  procedimiento: string; // texto libre que resume todo lo que se hace en la visita
  tipo: TipoVisita;
  estado: EstadoVisita;
  notas?: string;
}

export interface Insumo {
  id: string;
  nombre: string;
  categoria: CategoriaInsumo;
  unidad: string; // "dosis", "unidad", "ml", "paquete"
  cantidad: number;
  minimo: number;
  ultimaCarga: string; // ISO
}

// =====================================================================
// DUEÑOS (37) — algunos con varias mascotas
// =====================================================================

export const duenos: Dueno[] = [
  // Multi-mascota (12 dueños)
  { id: 'd-rios', nombre: 'Carolina', apellido: 'Rios', telefono: '+54 9 223 415-2287', email: 'caro.rios@gmail.com', direccion: 'Castelli 2890', zona: 'Plaza Mitre' },
  { id: 'd-morales', nombre: 'Diego', apellido: 'Morales', telefono: '+54 9 223 477-3389', email: 'dmorales@gmail.com', direccion: 'Buenos Aires 3150', zona: 'Centro' },
  { id: 'd-fernandez-l', nombre: 'Lucía', apellido: 'Fernández', telefono: '+54 9 223 502-1144', email: 'luci.fernandez@gmail.com', direccion: 'Falucho 2455', zona: 'La Perla' },
  { id: 'd-suarez', nombre: 'Florencia', apellido: 'Suárez', telefono: '+54 9 223 488-2210', email: 'flor.suarez@hotmail.com', direccion: 'Alvarado 1820', zona: 'Stella Maris' },
  { id: 'd-vidal', nombre: 'Tomás', apellido: 'Vidal', telefono: '+54 9 223 466-7733', email: 'tomi.vidal@gmail.com', direccion: 'Independencia 4200', zona: 'Punta Mogotes' },
  { id: 'd-paz', nombre: 'Mariana', apellido: 'Paz', telefono: '+54 9 223 419-2244', email: 'mari.paz@gmail.com', direccion: 'Olavarría 2845', zona: 'Centro' },
  { id: 'd-iglesias', nombre: 'Pablo', apellido: 'Iglesias', telefono: '+54 9 223 415-9988', email: 'pablo.iglesias@outlook.com', direccion: 'Av. Colón 4521', zona: 'Centro' },
  { id: 'd-cabrera', nombre: 'Romina', apellido: 'Cabrera', telefono: '+54 9 223 488-7711', email: 'ro.cabrera@gmail.com', direccion: 'Bolívar 3210', zona: 'Centro' },
  { id: 'd-luna', nombre: 'Sebastián', apellido: 'Luna', telefono: '+54 9 223 502-8841', email: 'seba.luna@gmail.com', direccion: 'Garay 1822', zona: 'Centro' },
  { id: 'd-acosta', nombre: 'Valeria', apellido: 'Acosta', telefono: '+54 9 223 466-1199', email: 'vale.acosta@hotmail.com', direccion: 'Brown 2980', zona: 'La Perla' },
  { id: 'd-mendez', nombre: 'Hernán', apellido: 'Méndez', telefono: '+54 9 223 488-0011', email: 'hmendez@gmail.com', direccion: 'Mitre 2580', zona: 'Centro' },
  { id: 'd-gimenez', nombre: 'Julieta', apellido: 'Gimenez', telefono: '+54 9 223 477-2200', email: 'juli.gimenez@gmail.com', direccion: 'San Luis 2104', zona: 'Centro' },

  // Mono-mascota (25 dueños)
  { id: 'd-aguilar', nombre: 'Sofía', apellido: 'Aguilar', telefono: '+54 9 223 411-0928', email: 'sofi.aguilar@gmail.com', direccion: 'Bolívar 3520', zona: 'Centro' },
  { id: 'd-rossi', nombre: 'Martín', apellido: 'Rossi', telefono: '+54 9 223 411-3344', email: 'mrossi@gmail.com', direccion: 'San Martín 3892', zona: 'Centro' },
  { id: 'd-perez', nombre: 'Valentina', apellido: 'Pérez', telefono: '+54 9 223 478-2210', email: 'valen.perez@gmail.com', direccion: 'Falucho 1156', zona: 'La Perla' },
  { id: 'd-castro', nombre: 'Federico', apellido: 'Castro', telefono: '+54 9 223 401-9988', email: 'fcastro@hotmail.com', direccion: 'Alvear 3345', zona: 'Los Troncos' },
  { id: 'd-ibarra', nombre: 'Tomás', apellido: 'Ibarra', telefono: '+54 9 223 488-0088', email: 'tomas.ibarra@gmail.com', direccion: 'Brown 1455', zona: 'La Perla' },
  { id: 'd-ruiz', nombre: 'Carla', apellido: 'Ruiz', telefono: '+54 9 223 477-4422', email: 'carla.ruiz@gmail.com', direccion: 'Rivadavia 4218', zona: 'Centro' },
  { id: 'd-romero', nombre: 'Lucas', apellido: 'Romero', telefono: '+54 9 223 411-8822', email: 'lucas.romero@gmail.com', direccion: 'Belgrano 1455', zona: 'Centro' },
  { id: 'd-dominguez', nombre: 'Mariela', apellido: 'Domínguez', telefono: '+54 9 223 401-2233', email: 'mariela.dom@gmail.com', direccion: 'Av. Independencia 2840', zona: 'Centro' },
  { id: 'd-lopez', nombre: 'Pedro', apellido: 'López', telefono: '+54 9 223 415-7733', email: 'pedrolopez@gmail.com', direccion: 'Salta 1740', zona: 'La Perla' },
  { id: 'd-torres', nombre: 'Andrea', apellido: 'Torres', telefono: '+54 9 223 478-0091', email: 'andrea.torres@gmail.com', direccion: 'Sarmiento 2620', zona: 'Centro' },
  { id: 'd-gomez', nombre: 'Lautaro', apellido: 'Gómez', telefono: '+54 9 223 477-1188', email: 'lautaro.gomez@gmail.com', direccion: '9 de Julio 3380', zona: 'Centro' },
  { id: 'd-lorenzo', nombre: 'Ana', apellido: 'Lorenzo', telefono: '+54 9 223 502-3344', email: 'ana.lorenzo@gmail.com', direccion: 'Lamadrid 2780', zona: 'Centro' },
  { id: 'd-sosa', nombre: 'Joaquín', apellido: 'Sosa', telefono: '+54 9 223 488-9911', email: 'joa.sosa@gmail.com', direccion: 'San Juan 1480', zona: 'Centro' },
  { id: 'd-rivero', nombre: 'Camila', apellido: 'Rivero', telefono: '+54 9 223 411-5577', email: 'cami.rivero@gmail.com', direccion: 'Tucumán 3045', zona: 'Centro' },
  { id: 'd-ferraro', nombre: 'Esteban', apellido: 'Ferraro', telefono: '+54 9 223 466-3300', email: 'esteban.ferraro@gmail.com', direccion: 'Saavedra 1822', zona: 'La Perla' },
  { id: 'd-blanco', nombre: 'Paula', apellido: 'Blanco', telefono: '+54 9 223 477-8800', email: 'paula.blanco@gmail.com', direccion: 'Av. Luro 2480', zona: 'Centro' },
  { id: 'd-aguero', nombre: 'Nicolás', apellido: 'Agüero', telefono: '+54 9 223 415-6622', email: 'nicoaguero@gmail.com', direccion: 'Strobel 1340', zona: 'Punta Mogotes' },
  { id: 'd-villanueva', nombre: 'Daniela', apellido: 'Villanueva', telefono: '+54 9 223 502-9911', email: 'dani.v@gmail.com', direccion: 'Castex 880', zona: 'Constitución' },
  { id: 'd-silva', nombre: 'Marcos', apellido: 'Silva', telefono: '+54 9 223 488-2255', email: 'marcos.silva@gmail.com', direccion: 'Catamarca 2155', zona: 'Centro' },
  { id: 'd-galante', nombre: 'Luciana', apellido: 'Galante', telefono: '+54 9 223 411-7700', email: 'luciana.galante@gmail.com', direccion: 'Almafuerte 1890', zona: 'La Perla' },
  { id: 'd-ojeda', nombre: 'Mauricio', apellido: 'Ojeda', telefono: '+54 9 223 477-3322', email: 'mauri.ojeda@gmail.com', direccion: 'Quintana 980', zona: 'Constitución' },
  { id: 'd-pereyra', nombre: 'Belén', apellido: 'Pereyra', telefono: '+54 9 223 466-8844', email: 'beli.pereyra@gmail.com', direccion: 'Rawson 1620', zona: 'La Perla' },
  { id: 'd-fontana', nombre: 'Gonzalo', apellido: 'Fontana', telefono: '+54 9 223 415-4499', email: 'gonza.fontana@gmail.com', direccion: 'Yrigoyen 2360', zona: 'Centro' },
  { id: 'd-arias', nombre: 'Romina', apellido: 'Arias', telefono: '+54 9 223 488-4477', email: 'romi.arias@gmail.com', direccion: 'Funes 3950', zona: 'Punta Mogotes' },
  { id: 'd-correa', nombre: 'Agustín', apellido: 'Correa', telefono: '+54 9 223 502-2266', email: 'agus.correa@gmail.com', direccion: 'Mendoza 2745', zona: 'Centro' },
];

export const duenoPorId = (id: string) => duenos.find((d) => d.id === id);

export const nombreDueno = (d: Pick<Dueno, 'nombre' | 'apellido'>) =>
  `${d.nombre} ${d.apellido}`;

// =====================================================================
// MASCOTAS (58)
// =====================================================================

// Helpers para construir vacunas/antiparasitarios consistentes con HOY=2026-04-30
const HOY = '2026-04-30';

const diff = (fechaIso: string, base = HOY) => {
  const d1 = new Date(fechaIso);
  const d2 = new Date(base);
  return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
};

const calcEstado = (proximaIso: string): EstadoSanitario => {
  if (!proximaIso) return 'no-aplica';
  const dias = diff(HOY, proximaIso); // próxima - hoy
  if (dias > 30) return 'al-dia';
  if (dias >= 0) return 'proxima';
  return 'vencida';
};

const v = (
  nombre: string,
  ultima: string,
  proxima: string,
  observaciones?: string,
): RegistroVacuna => ({
  nombre,
  ultimaAplicacion: ultima,
  proximaAplicacion: proxima,
  estado: calcEstado(proxima),
  observaciones,
});

const a = (
  nombre: string,
  via: 'interno' | 'externo',
  ultima: string,
  proxima: string,
): RegistroAntiparasitario => ({
  nombre,
  via,
  ultimaAplicacion: ultima,
  proximaAplicacion: proxima,
  estado: calcEstado(proxima),
});

export const mascotas: Mascota[] = [
  // ====== Carolina Rios (d-rios) — Luna + Toto ======
  {
    slug: 'luna',
    nombre: 'Luna',
    especie: 'perro',
    raza: 'Mestiza',
    edad: 4,
    sexo: 'hembra',
    pesoKg: 12.4,
    castrado: true,
    microchip: '982160129348721',
    alergias: ['Ningunas conocidas'],
    observaciones: 'Tímida con desconocidos, ansiosa en consulta. Sentada en el regazo de Carolina mejora.',
    duenoId: 'd-rios',
    fechaAlta: '2024-02-12',
    ultimoControl: '2026-04-15',
    proximaVisita: '2026-04-30',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-15', titulo: 'Control general', detalle: 'Buen estado general. Peso estable. Recomendar control dental en 3 meses.', pesoKg: 12.4 },
      { fecha: '2026-03-12', titulo: 'Aplicación NexGard externo', detalle: 'Sin reacciones. Próxima aplicación 12/04.' },
      { fecha: '2026-02-10', titulo: 'Antiparasitario interno (Endogard)', detalle: 'Aplicado. Recomendar hisopado en 2 meses si nota síntomas.' },
      { fecha: '2026-01-20', titulo: 'Limpieza dental', detalle: 'Tártaro moderado. Sin extracciones. Próxima limpieza recomendada en 9 meses.', pesoKg: 12.6 },
      { fecha: '2025-11-08', titulo: 'Vacuna óctuple (refuerzo)', detalle: 'Aplicada en cuarto trasero. Sin reacción local.', pesoKg: 12.5 },
      { fecha: '2025-10-15', titulo: 'Vacuna antirrábica anual', detalle: 'Aplicada. Próximo refuerzo octubre 2026.' },
      { fecha: '2025-08-22', titulo: 'Castración', detalle: 'Cirugía sin complicaciones. Postoperatorio normal. Puntos retirados a los 10 días.', pesoKg: 11.8 },
      { fecha: '2024-02-12', titulo: 'Primera consulta + plan vacunación', detalle: 'Cachorra adoptada. Buen estado. Inicio plan A1 + A2 + A3 + óctuple. Desparasitación interna inicial.', pesoKg: 4.2 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-15', '2026-10-15'),
      v('Óctuple (refuerzo)', '2025-11-08', '2026-11-08'),
      v('Tos de las perreras', '2025-09-12', '2026-09-12'),
      v('Leptospirosis', '2024-12-05', '2025-12-05', 'Vencida — recordar a la dueña en próxima visita'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-12', '2026-04-12'),
      a('Endogard', 'interno', '2026-02-10', '2026-05-10'),
    ],
  },
  {
    slug: 'toto',
    nombre: 'Toto',
    especie: 'perro',
    raza: 'Labrador',
    edad: 2,
    sexo: 'macho',
    pesoKg: 28.5,
    castrado: false,
    microchip: '982160129348885',
    alergias: [],
    duenoId: 'd-rios',
    fechaAlta: '2024-08-20',
    ultimoControl: '2026-04-15',
    proximaVisita: '2026-04-30',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-15', titulo: 'Control general + peso', detalle: 'Excelente condición. Subió 1,5kg desde último control.', pesoKg: 28.5 },
      { fecha: '2026-03-20', titulo: 'Vacuna óctuple anual', detalle: 'Aplicada. Sin reacciones.' },
      { fecha: '2026-02-15', titulo: 'NexGard + Endogard', detalle: 'Aplicación combinada interno + externo.' },
      { fecha: '2024-08-20', titulo: 'Primera consulta (4 meses)', detalle: 'Cachorro labrador. Plan vacunal completo.', pesoKg: 8.2 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-20', '2027-03-20'),
      v('Óctuple', '2026-03-20', '2027-03-20'),
      v('Tos de las perreras', '2026-03-20', '2027-03-20'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-02-15', '2026-03-15'),
      a('Endogard', 'interno', '2026-02-15', '2026-05-15'),
    ],
  },

  // ====== Diego Morales (d-morales) — Pepe + Mora + Coco ======
  {
    slug: 'pepe',
    nombre: 'Pepe',
    especie: 'perro',
    raza: 'Bulldog francés',
    edad: 6,
    sexo: 'macho',
    pesoKg: 13.2,
    castrado: true,
    microchip: '982160129350001',
    alergias: ['Pollo'],
    observaciones: 'Síndrome braquicefálico leve. Cuidado con calor extremo y ejercicio prolongado.',
    duenoId: 'd-morales',
    fechaAlta: '2021-06-10',
    ultimoControl: '2026-04-02',
    proximaVisita: '2026-05-15',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-02', titulo: 'Control general', detalle: 'Estable. Recordar dieta hipoalergénica.', pesoKg: 13.2 },
      { fecha: '2026-01-10', titulo: 'Limpieza dental con anestesia', detalle: 'Extracción molar superior derecho. Sin complicaciones por raza.' },
      { fecha: '2025-11-22', titulo: 'Refuerzo óctuple', detalle: 'Aplicado.' },
    ],
    vacunas: [
      v('Antirrábica', '2025-08-12', '2026-08-12'),
      v('Óctuple', '2025-11-22', '2026-11-22'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-03-01', '2026-06-01'),
      a('Endogard', 'interno', '2026-03-01', '2026-06-01'),
    ],
  },
  {
    slug: 'mora',
    nombre: 'Mora',
    especie: 'gato',
    raza: 'Mestiza',
    edad: 7,
    sexo: 'hembra',
    pesoKg: 4.1,
    castrado: true,
    alergias: [],
    duenoId: 'd-morales',
    fechaAlta: '2019-03-15',
    ultimoControl: '2026-02-20',
    proximaVisita: '2026-05-15',
    estado: 'activo',
    historia: [
      { fecha: '2026-02-20', titulo: 'Control + análisis sangre', detalle: 'Función renal levemente elevada. Recomendar dieta renal y control en 3 meses.', pesoKg: 4.1 },
      { fecha: '2025-09-10', titulo: 'Triple felina + antirrábica', detalle: 'Vacunación anual completa.' },
    ],
    vacunas: [
      v('Antirrábica', '2025-09-10', '2026-09-10'),
      v('Triple felina', '2025-09-10', '2026-09-10'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-02-20', '2026-05-20'),
    ],
  },
  {
    slug: 'coco',
    nombre: 'Coco',
    especie: 'gato',
    raza: 'Siamés',
    edad: 3,
    sexo: 'macho',
    pesoKg: 4.8,
    castrado: true,
    alergias: [],
    duenoId: 'd-morales',
    fechaAlta: '2023-04-08',
    ultimoControl: '2026-02-20',
    estado: 'activo',
    historia: [
      { fecha: '2026-02-20', titulo: 'Control general', detalle: 'Buen estado. Peso ideal.', pesoKg: 4.8 },
      { fecha: '2025-04-15', titulo: 'Castración', detalle: 'Cirugía sin complicaciones.' },
    ],
    vacunas: [
      v('Antirrábica', '2025-09-10', '2026-09-10'),
      v('Triple felina', '2025-09-10', '2026-09-10'),
      v('Quíntuple felina', '2025-09-10', '2026-09-10'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-02-20', '2026-05-20'),
    ],
  },

  // ====== Lucía Fernández (d-fernandez-l) — Frida + Olivia (gatas persa hermanas) ======
  {
    slug: 'frida',
    nombre: 'Frida',
    especie: 'gato',
    raza: 'Persa',
    edad: 5,
    sexo: 'hembra',
    pesoKg: 4.5,
    castrado: true,
    alergias: [],
    observaciones: 'Cepillado diario. Lagrimeo característico de la raza, controlado con higiene ocular.',
    duenoId: 'd-fernandez-l',
    fechaAlta: '2021-05-22',
    ultimoControl: '2026-04-10',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-10', titulo: 'Control + higiene ocular', detalle: 'Lagrimeo dentro de lo esperable.', pesoKg: 4.5 },
      { fecha: '2025-11-30', titulo: 'Vacunación anual', detalle: 'Triple + antirrábica.' },
    ],
    vacunas: [
      v('Antirrábica', '2025-11-30', '2026-11-30'),
      v('Triple felina', '2025-11-30', '2026-11-30'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-04-10', '2026-07-10'),
    ],
  },
  {
    slug: 'olivia',
    nombre: 'Olivia',
    especie: 'gato',
    raza: 'Persa',
    edad: 2,
    sexo: 'hembra',
    pesoKg: 3.8,
    castrado: true,
    alergias: [],
    duenoId: 'd-fernandez-l',
    fechaAlta: '2024-01-10',
    ultimoControl: '2026-04-10',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-10', titulo: 'Control general', detalle: 'Sin novedades. Buen pelaje.', pesoKg: 3.8 },
      { fecha: '2024-08-15', titulo: 'Castración', detalle: 'Sin complicaciones.' },
    ],
    vacunas: [
      v('Antirrábica', '2025-11-30', '2026-11-30'),
      v('Triple felina', '2025-11-30', '2026-11-30'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-04-10', '2026-07-10'),
    ],
  },

  // ====== Florencia Suárez (d-suarez) — Niño + Bruno ======
  {
    slug: 'nino',
    nombre: 'Niño',
    especie: 'perro',
    raza: 'Beagle',
    edad: 8,
    sexo: 'macho',
    pesoKg: 14.2,
    castrado: true,
    alergias: [],
    observaciones: 'Senior. Cuidar dieta y articulaciones.',
    duenoId: 'd-suarez',
    fechaAlta: '2018-09-05',
    ultimoControl: '2026-03-28',
    proximaVisita: '2026-05-12',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-28', titulo: 'Control senior', detalle: 'Análisis hepático normal. Recomendar suplemento articular.', pesoKg: 14.2 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-04', '2026-10-04'),
      v('Óctuple', '2025-10-04', '2026-10-04'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-15', '2026-05-15'),
    ],
  },
  {
    slug: 'bruno',
    nombre: 'Bruno',
    especie: 'perro',
    raza: 'Beagle',
    edad: 3,
    sexo: 'macho',
    pesoKg: 11.5,
    castrado: false,
    alergias: [],
    duenoId: 'd-suarez',
    fechaAlta: '2023-02-18',
    ultimoControl: '2026-03-28',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-28', titulo: 'Control + vacuna', detalle: 'Peso adecuado. Refuerzo óctuple aplicado.', pesoKg: 11.5 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-28', '2027-03-28'),
      v('Óctuple', '2026-03-28', '2027-03-28'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-15', '2026-05-15'),
    ],
  },

  // ====== Tomás Vidal (d-vidal) — Nala + Simba ======
  {
    slug: 'nala',
    nombre: 'Nala',
    especie: 'gato',
    raza: 'Mestiza',
    edad: 4,
    sexo: 'hembra',
    pesoKg: 3.6,
    castrado: true,
    alergias: [],
    duenoId: 'd-vidal',
    fechaAlta: '2022-06-30',
    ultimoControl: '2026-03-15',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-15', titulo: 'Vacunación + desparasitación', detalle: 'Triple aplicada. Drontal vía oral.', pesoKg: 3.6 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-15', '2027-03-15'),
      v('Triple felina', '2026-03-15', '2027-03-15'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-03-15', '2026-06-15'),
    ],
  },
  {
    slug: 'simba',
    nombre: 'Simba',
    especie: 'gato',
    raza: 'Naranja',
    edad: 6,
    sexo: 'macho',
    pesoKg: 5.4,
    castrado: true,
    alergias: [],
    observaciones: 'Sobrepeso leve. Alimentación controlada.',
    duenoId: 'd-vidal',
    fechaAlta: '2020-04-12',
    ultimoControl: '2026-03-15',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-15', titulo: 'Control + dieta', detalle: 'Peso 5,4kg (objetivo 4,8kg). Recomendar light.', pesoKg: 5.4 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-15', '2027-03-15'),
      v('Triple felina', '2026-03-15', '2027-03-15'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-03-15', '2026-06-15'),
    ],
  },

  // ====== Mariana Paz (d-paz) — Olivia P + Tobías ======
  {
    slug: 'olivia-p',
    nombre: 'Olivia',
    especie: 'perro',
    raza: 'Caniche toy',
    edad: 11,
    sexo: 'hembra',
    pesoKg: 4.8,
    castrado: true,
    alergias: ['Pollo'],
    observaciones: 'Senior. Cardiopatía leve diagnosticada 2024. Premedicación con enalapril.',
    duenoId: 'd-paz',
    fechaAlta: '2015-08-20',
    ultimoControl: '2026-04-22',
    proximaVisita: '2026-05-22',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-22', titulo: 'Control cardiológico', detalle: 'Soplo grado 2 estable. Continuar enalapril 5mg/12h.', pesoKg: 4.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-08-15', '2026-08-15'),
      v('Óctuple', '2025-08-15', '2026-08-15'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-22', '2026-04-22'),
    ],
  },
  {
    slug: 'tobias',
    nombre: 'Tobías',
    especie: 'perro',
    raza: 'Caniche toy',
    edad: 5,
    sexo: 'macho',
    pesoKg: 5.2,
    castrado: true,
    alergias: [],
    duenoId: 'd-paz',
    fechaAlta: '2021-03-10',
    ultimoControl: '2026-04-22',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-22', titulo: 'Control + corte de uñas', detalle: 'Sin novedades.', pesoKg: 5.2 },
    ],
    vacunas: [
      v('Antirrábica', '2025-08-15', '2026-08-15'),
      v('Óctuple', '2025-08-15', '2026-08-15'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-22', '2026-04-22'),
    ],
  },

  // ====== Pablo Iglesias (d-iglesias) — Lola + Ramón ======
  {
    slug: 'lola',
    nombre: 'Lola',
    especie: 'perro',
    raza: 'Cocker spaniel',
    edad: 7,
    sexo: 'hembra',
    pesoKg: 13.8,
    castrado: true,
    alergias: ['Atopia ambiental'],
    observaciones: 'Otitis recurrente. Higiene auricular semanal.',
    duenoId: 'd-iglesias',
    fechaAlta: '2019-11-05',
    ultimoControl: '2026-04-08',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-08', titulo: 'Tratamiento otitis', detalle: 'Otitis bilateral leve. Tratamiento tópico 7 días.', pesoKg: 13.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-12-12', '2026-12-12'),
      v('Óctuple', '2025-12-12', '2026-12-12'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-08', '2026-05-08'),
    ],
  },
  {
    slug: 'ramon',
    nombre: 'Ramón',
    especie: 'perro',
    raza: 'Cocker spaniel',
    edad: 4,
    sexo: 'macho',
    pesoKg: 14.5,
    castrado: false,
    alergias: [],
    duenoId: 'd-iglesias',
    fechaAlta: '2022-07-15',
    ultimoControl: '2026-04-08',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-08', titulo: 'Control', detalle: 'Buen estado.', pesoKg: 14.5 },
    ],
    vacunas: [
      v('Antirrábica', '2025-12-12', '2026-12-12'),
      v('Óctuple', '2025-12-12', '2026-12-12'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-08', '2026-05-08'),
    ],
  },

  // ====== Romina Cabrera (d-cabrera) — Roma + Pino ======
  {
    slug: 'roma',
    nombre: 'Roma',
    especie: 'perro',
    raza: 'Caniche toy',
    edad: 9,
    sexo: 'hembra',
    pesoKg: 4.2,
    castrado: true,
    alergias: [],
    duenoId: 'd-cabrera',
    fechaAlta: '2017-05-22',
    ultimoControl: '2026-04-22',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-22', titulo: 'Limpieza dental', detalle: 'Tártaro moderado. 2 extracciones (incisivos inferiores).', pesoKg: 4.2 },
    ],
    vacunas: [
      v('Antirrábica', '2025-09-25', '2026-09-25'),
      v('Óctuple', '2025-09-25', '2026-09-25'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-22', '2026-04-22'),
    ],
  },
  {
    slug: 'pino',
    nombre: 'Pino',
    especie: 'gato',
    raza: 'Mestizo',
    edad: 6,
    sexo: 'macho',
    pesoKg: 4.6,
    castrado: true,
    alergias: [],
    duenoId: 'd-cabrera',
    fechaAlta: '2020-02-10',
    ultimoControl: '2026-03-25',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-25', titulo: 'Vacunación anual', detalle: 'Triple + antirrábica.', pesoKg: 4.6 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-25', '2027-03-25'),
      v('Triple felina', '2026-03-25', '2027-03-25'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-03-25', '2026-06-25'),
    ],
  },

  // ====== Sebastián Luna (d-luna) — Maca + Lia ======
  {
    slug: 'maca',
    nombre: 'Maca',
    especie: 'perro',
    raza: 'Salchicha',
    edad: 5,
    sexo: 'hembra',
    pesoKg: 7.8,
    castrado: true,
    alergias: [],
    observaciones: 'Discopatía cervical leve diagnosticada 2025. Evitar saltos.',
    duenoId: 'd-luna',
    fechaAlta: '2021-04-08',
    ultimoControl: '2026-03-30',
    proximaVisita: '2026-04-30',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-30', titulo: 'Control + plan ejercicio', detalle: 'Sin dolor. Mantener restricción de saltos.', pesoKg: 7.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-20', '2026-10-20'),
      v('Óctuple', '2025-10-20', '2026-10-20'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-30', '2026-04-30'),
      a('Endogard', 'interno', '2026-01-30', '2026-04-30'),
    ],
  },
  {
    slug: 'lia',
    nombre: 'Lia',
    especie: 'perro',
    raza: 'Salchicha',
    edad: 2,
    sexo: 'hembra',
    pesoKg: 6.4,
    castrado: false,
    alergias: [],
    duenoId: 'd-luna',
    fechaAlta: '2024-05-10',
    ultimoControl: '2026-03-30',
    proximaVisita: '2026-04-30',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-30', titulo: 'Control', detalle: 'Sana, buen peso.', pesoKg: 6.4 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-20', '2026-10-20'),
      v('Óctuple', '2025-10-20', '2026-10-20'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-30', '2026-04-30'),
    ],
  },

  // ====== Valeria Acosta (d-acosta) — Felipe + Inti ======
  {
    slug: 'felipe',
    nombre: 'Felipe',
    especie: 'perro',
    raza: 'Boxer',
    edad: 4,
    sexo: 'macho',
    pesoKg: 28.8,
    castrado: true,
    alergias: [],
    duenoId: 'd-acosta',
    fechaAlta: '2022-09-12',
    ultimoControl: '2026-02-18',
    proximaVisita: '2026-05-01',
    estado: 'activo',
    historia: [
      { fecha: '2026-02-18', titulo: 'Vacunación + control', detalle: 'Vacuna óctuple anual.', pesoKg: 28.8 },
    ],
    vacunas: [
      v('Antirrábica', '2026-02-18', '2027-02-18'),
      v('Óctuple', '2026-02-18', '2027-02-18'),
      v('Tos de las perreras', '2025-08-12', '2026-08-12'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-18', '2026-05-18'),
    ],
  },
  {
    slug: 'inti',
    nombre: 'Inti',
    especie: 'gato',
    raza: 'Mestizo',
    edad: 3,
    sexo: 'macho',
    pesoKg: 4.2,
    castrado: true,
    alergias: [],
    duenoId: 'd-acosta',
    fechaAlta: '2023-08-20',
    ultimoControl: '2026-02-18',
    proximaVisita: '2026-05-01',
    estado: 'activo',
    historia: [
      { fecha: '2026-02-18', titulo: 'Triple felina + control', detalle: 'Buen estado.', pesoKg: 4.2 },
    ],
    vacunas: [
      v('Antirrábica', '2026-02-18', '2027-02-18'),
      v('Triple felina', '2026-02-18', '2027-02-18'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-02-18', '2026-05-18'),
    ],
  },

  // ====== Hernán Méndez (d-mendez) — Otto + Bella ======
  {
    slug: 'otto',
    nombre: 'Otto',
    especie: 'perro',
    raza: 'Pastor alemán',
    edad: 5,
    sexo: 'macho',
    pesoKg: 35.2,
    castrado: true,
    alergias: [],
    duenoId: 'd-mendez',
    fechaAlta: '2021-01-15',
    ultimoControl: '2026-04-25',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-25', titulo: 'Control general', detalle: 'Buen estado. Caderas: sin signos clínicos de displasia.', pesoKg: 35.2 },
    ],
    vacunas: [
      v('Antirrábica', '2026-01-15', '2027-01-15'),
      v('Óctuple', '2026-01-15', '2027-01-15'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-25', '2026-05-25'),
    ],
  },
  {
    slug: 'bella',
    nombre: 'Bella',
    especie: 'perro',
    raza: 'Pastor alemán',
    edad: 1,
    sexo: 'hembra',
    pesoKg: 22.0,
    castrado: false,
    alergias: [],
    duenoId: 'd-mendez',
    fechaAlta: '2025-03-20',
    ultimoControl: '2026-04-25',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-25', titulo: 'Control desarrollo', detalle: 'Cachorra creciendo bien.', pesoKg: 22.0 },
      { fecha: '2025-04-10', titulo: 'Plan vacunal completo', detalle: 'A1 + A2 + A3 + óctuple.' },
    ],
    vacunas: [
      v('Antirrábica', '2026-04-25', '2027-04-25'),
      v('Óctuple', '2026-04-25', '2027-04-25'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-25', '2026-05-25'),
    ],
  },

  // ====== Julieta Gimenez (d-gimenez) — Frodo + Galadriel ======
  {
    slug: 'frodo',
    nombre: 'Frodo',
    especie: 'perro',
    raza: 'Border Collie',
    edad: 6,
    sexo: 'macho',
    pesoKg: 18.4,
    castrado: true,
    alergias: [],
    duenoId: 'd-gimenez',
    fechaAlta: '2020-07-10',
    ultimoControl: '2026-03-05',
    proximaVisita: '2026-05-02',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-05', titulo: 'Vacuna anual', detalle: 'Aplicada óctuple + antirrábica.', pesoKg: 18.4 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-05', '2027-03-05'),
      v('Óctuple', '2026-03-05', '2027-03-05'),
      v('Leptospirosis', '2026-03-05', '2027-03-05'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-04-05', '2026-05-05'),
    ],
  },
  {
    slug: 'galadriel',
    nombre: 'Galadriel',
    especie: 'gato',
    raza: 'Mestiza',
    edad: 8,
    sexo: 'hembra',
    pesoKg: 4.4,
    castrado: true,
    alergias: [],
    duenoId: 'd-gimenez',
    fechaAlta: '2018-04-22',
    ultimoControl: '2026-01-25',
    estado: 'activo',
    historia: [
      { fecha: '2026-01-25', titulo: 'Control general', detalle: 'Estable.', pesoKg: 4.4 },
    ],
    vacunas: [
      v('Antirrábica', '2025-09-12', '2026-09-12'),
      v('Triple felina', '2025-09-12', '2026-09-12'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-01-25', '2026-04-25'),
    ],
  },

  // ====== Mono-mascota (24 mascotas, 1 por dueño) ======
  {
    slug: 'kira',
    nombre: 'Kira',
    especie: 'perro',
    raza: 'Husky siberiano',
    edad: 4,
    sexo: 'hembra',
    pesoKg: 22.5,
    castrado: true,
    alergias: [],
    duenoId: 'd-aguilar',
    fechaAlta: '2022-03-10',
    ultimoControl: '2026-04-12',
    proximaVisita: '2026-04-30',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-12', titulo: 'Control general + peso', detalle: 'Excelente estado. Pelaje brillante.', pesoKg: 22.5 },
    ],
    vacunas: [
      v('Antirrábica', '2025-11-12', '2026-11-12'),
      v('Óctuple', '2025-11-12', '2026-11-12'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-12', '2026-04-12'),
    ],
  },
  {
    slug: 'rocco',
    nombre: 'Rocco',
    especie: 'perro',
    raza: 'Rottweiler',
    edad: 6,
    sexo: 'macho',
    pesoKg: 42.8,
    castrado: true,
    alergias: [],
    observaciones: 'Manejo cuidadoso por tamaño. Carolina lo conoce y lo maneja bien.',
    duenoId: 'd-rossi',
    fechaAlta: '2020-02-15',
    ultimoControl: '2026-04-18',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-18', titulo: 'Vacuna anual', detalle: 'Tolera bien la consulta a domicilio.', pesoKg: 42.8 },
    ],
    vacunas: [
      v('Antirrábica', '2026-04-18', '2027-04-18'),
      v('Óctuple', '2026-04-18', '2027-04-18'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-04-18', '2026-07-18'),
    ],
  },
  {
    slug: 'mia',
    nombre: 'Mía',
    especie: 'gato',
    raza: 'Siamesa',
    edad: 7,
    sexo: 'hembra',
    pesoKg: 3.4,
    castrado: true,
    alergias: [],
    duenoId: 'd-perez',
    fechaAlta: '2019-08-20',
    ultimoControl: '2026-02-28',
    estado: 'activo',
    historia: [
      { fecha: '2026-02-28', titulo: 'Vacunación felina', detalle: 'Triple felina + antirrábica aplicadas.', pesoKg: 3.4 },
    ],
    vacunas: [
      v('Antirrábica', '2026-02-28', '2027-02-28'),
      v('Triple felina', '2026-02-28', '2027-02-28'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-02-28', '2026-05-28'),
    ],
  },
  {
    slug: 'cleo',
    nombre: 'Cleo',
    especie: 'gato',
    raza: 'Bombay',
    edad: 5,
    sexo: 'hembra',
    pesoKg: 4.0,
    castrado: true,
    alergias: [],
    duenoId: 'd-castro',
    fechaAlta: '2021-06-12',
    ultimoControl: '2026-01-15',
    estado: 'activo',
    historia: [
      { fecha: '2026-01-15', titulo: 'Control + análisis', detalle: 'Sin novedades.', pesoKg: 4.0 },
    ],
    vacunas: [
      v('Antirrábica', '2025-08-15', '2026-08-15'),
      v('Triple felina', '2025-08-15', '2026-08-15'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-01-15', '2026-04-15', ),
    ],
  },
  {
    slug: 'pancho',
    nombre: 'Pancho',
    especie: 'perro',
    raza: 'Mestizo',
    edad: 9,
    sexo: 'macho',
    pesoKg: 16.8,
    castrado: true,
    alergias: [],
    observaciones: 'Adoptado de la calle a los 4 años. Tímido, gana confianza rápido.',
    duenoId: 'd-ibarra',
    fechaAlta: '2021-09-10',
    ultimoControl: '2026-04-20',
    proximaVisita: '2026-05-01',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-20', titulo: 'Control senior', detalle: 'Riñón con valores límite. Recomendar dieta renal.', pesoKg: 16.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-09-25', '2026-09-25'),
      v('Óctuple', '2025-09-25', '2026-09-25'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-20', '2026-04-20'),
    ],
  },
  {
    slug: 'donna',
    nombre: 'Donna',
    especie: 'perro',
    raza: 'Golden retriever',
    edad: 3,
    sexo: 'hembra',
    pesoKg: 30.5,
    castrado: false,
    alergias: [],
    duenoId: 'd-ruiz',
    fechaAlta: '2023-07-08',
    ultimoControl: '2026-03-22',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-22', titulo: 'Control', detalle: 'Excelente.', pesoKg: 30.5 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-22', '2027-03-22'),
      v('Óctuple', '2026-03-22', '2027-03-22'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-22', '2026-05-22'),
    ],
  },
  {
    slug: 'milo',
    nombre: 'Milo',
    especie: 'perro',
    raza: 'Schnauzer',
    edad: 7,
    sexo: 'macho',
    pesoKg: 8.2,
    castrado: true,
    alergias: [],
    duenoId: 'd-romero',
    fechaAlta: '2019-04-15',
    ultimoControl: '2026-04-05',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-05', titulo: 'Limpieza dental', detalle: 'Sin extracciones.', pesoKg: 8.2 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-15', '2026-10-15'),
      v('Óctuple', '2025-10-15', '2026-10-15'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-05', '2026-04-05'),
    ],
  },
  {
    slug: 'luna-d',
    nombre: 'Luna',
    especie: 'gato',
    raza: 'Mestiza',
    edad: 10,
    sexo: 'hembra',
    pesoKg: 3.8,
    castrado: true,
    alergias: [],
    observaciones: 'Senior. Hipertiroidismo en tratamiento.',
    duenoId: 'd-dominguez',
    fechaAlta: '2017-05-20',
    ultimoControl: '2026-04-10',
    proximaVisita: '2026-05-10',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-10', titulo: 'Control hipertiroidismo', detalle: 'T4 dentro de rangos. Continuar tratamiento.', pesoKg: 3.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-11-10', '2026-11-10'),
      v('Triple felina', '2025-11-10', '2026-11-10'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-04-10', '2026-07-10'),
    ],
  },
  {
    slug: 'nina',
    nombre: 'Nina',
    especie: 'perro',
    raza: 'Whippet',
    edad: 2,
    sexo: 'hembra',
    pesoKg: 9.8,
    castrado: false,
    alergias: [],
    duenoId: 'd-lopez',
    fechaAlta: '2024-06-12',
    ultimoControl: '2026-03-28',
    proximaVisita: '2026-05-02',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-28', titulo: 'Control + vacuna', detalle: 'Refuerzo óctuple.', pesoKg: 9.8 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-28', '2027-03-28'),
      v('Óctuple', '2026-03-28', '2027-03-28'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-02-28', '2026-03-28'),
    ],
  },
  {
    slug: 'orion',
    nombre: 'Orión',
    especie: 'perro',
    raza: 'Galgo',
    edad: 5,
    sexo: 'macho',
    pesoKg: 28.4,
    castrado: true,
    alergias: [],
    duenoId: 'd-torres',
    fechaAlta: '2021-08-08',
    ultimoControl: '2026-04-02',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-02', titulo: 'Control', detalle: 'Buen peso. Galgo en condiciones óptimas.', pesoKg: 28.4 },
    ],
    vacunas: [
      v('Antirrábica', '2025-09-30', '2026-09-30'),
      v('Óctuple', '2025-09-30', '2026-09-30'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-02', '2026-05-02'),
    ],
  },
  {
    slug: 'thor',
    nombre: 'Thor',
    especie: 'perro',
    raza: 'Bull terrier',
    edad: 4,
    sexo: 'macho',
    pesoKg: 25.2,
    castrado: true,
    alergias: [],
    duenoId: 'd-gomez',
    fechaAlta: '2022-12-04',
    ultimoControl: '2026-03-12',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-12', titulo: 'Vacuna + antiparasitario', detalle: 'Aplicado.', pesoKg: 25.2 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-12', '2027-03-12'),
      v('Óctuple', '2026-03-12', '2027-03-12'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-03-12', '2026-06-12'),
    ],
  },
  {
    slug: 'olga',
    nombre: 'Olga',
    especie: 'gato',
    raza: 'Mestiza tricolor',
    edad: 12,
    sexo: 'hembra',
    pesoKg: 3.2,
    castrado: true,
    alergias: [],
    observaciones: 'Senior. ERC estadío 2. Dieta renal + monitoreo trimestral.',
    duenoId: 'd-lorenzo',
    fechaAlta: '2014-11-20',
    ultimoControl: '2026-04-22',
    proximaVisita: '2026-05-01',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-22', titulo: 'Control ERC', detalle: 'Creatinina 2,4 (estable). Continuar dieta + subcutánea quincenal.', pesoKg: 3.2 },
    ],
    vacunas: [
      v('Antirrábica', '2025-08-20', '2026-08-20'),
      v('Triple felina', '2025-08-20', '2026-08-20'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-01-22', '2026-04-22'),
    ],
  },
  {
    slug: 'ciro',
    nombre: 'Ciro',
    especie: 'perro',
    raza: 'Shih Tzu',
    edad: 6,
    sexo: 'macho',
    pesoKg: 7.0,
    castrado: true,
    alergias: ['Carne vacuna'],
    duenoId: 'd-sosa',
    fechaAlta: '2020-04-10',
    ultimoControl: '2026-04-08',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-08', titulo: 'Control + dieta', detalle: 'Buena respuesta a dieta hipoalergénica.', pesoKg: 7.0 },
    ],
    vacunas: [
      v('Antirrábica', '2025-12-08', '2026-12-08'),
      v('Óctuple', '2025-12-08', '2026-12-08'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-08', '2026-04-08'),
    ],
  },
  {
    slug: 'sasha',
    nombre: 'Sasha',
    especie: 'perro',
    raza: 'Akita',
    edad: 3,
    sexo: 'hembra',
    pesoKg: 24.6,
    castrado: false,
    alergias: [],
    duenoId: 'd-rivero',
    fechaAlta: '2023-09-15',
    ultimoControl: '2026-04-12',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-12', titulo: 'Control', detalle: 'Excelente.', pesoKg: 24.6 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-12', '2026-10-12'),
      v('Óctuple', '2025-10-12', '2026-10-12'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-12', '2026-05-12'),
    ],
  },
  {
    slug: 'pepa',
    nombre: 'Pepa',
    especie: 'perro',
    raza: 'Cavalier King Charles',
    edad: 5,
    sexo: 'hembra',
    pesoKg: 7.8,
    castrado: true,
    alergias: [],
    observaciones: 'Soplo cardíaco grado 1 (raza). Control anual.',
    duenoId: 'd-ferraro',
    fechaAlta: '2021-11-05',
    ultimoControl: '2026-03-15',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-15', titulo: 'Control cardio', detalle: 'Soplo estable. Sin medicación necesaria por ahora.', pesoKg: 7.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-09-15', '2026-09-15'),
      v('Óctuple', '2025-09-15', '2026-09-15'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-15', '2026-04-15'),
    ],
  },
  {
    slug: 'salem',
    nombre: 'Salem',
    especie: 'gato',
    raza: 'Mestizo negro',
    edad: 4,
    sexo: 'macho',
    pesoKg: 4.6,
    castrado: true,
    alergias: [],
    duenoId: 'd-blanco',
    fechaAlta: '2022-04-22',
    ultimoControl: '2026-02-15',
    estado: 'activo',
    historia: [
      { fecha: '2026-02-15', titulo: 'Vacunación felina', detalle: 'Triple aplicada.', pesoKg: 4.6 },
    ],
    vacunas: [
      v('Antirrábica', '2026-02-15', '2027-02-15'),
      v('Triple felina', '2026-02-15', '2027-02-15'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-02-15', '2026-05-15'),
    ],
  },
  {
    slug: 'cooper',
    nombre: 'Cooper',
    especie: 'perro',
    raza: 'Border Collie',
    edad: 8,
    sexo: 'macho',
    pesoKg: 19.4,
    castrado: true,
    alergias: [],
    duenoId: 'd-aguero',
    fechaAlta: '2018-07-18',
    ultimoControl: '2026-03-22',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-22', titulo: 'Control senior', detalle: 'Articulaciones bien para la edad.', pesoKg: 19.4 },
    ],
    vacunas: [
      v('Antirrábica', '2025-08-22', '2026-08-22'),
      v('Óctuple', '2025-08-22', '2026-08-22'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-02-22', '2026-05-22'),
    ],
  },
  {
    slug: 'venus',
    nombre: 'Venus',
    especie: 'gato',
    raza: 'Sphynx',
    edad: 3,
    sexo: 'hembra',
    pesoKg: 3.6,
    castrado: true,
    alergias: [],
    observaciones: 'Sin pelo: cuidados de piel especiales. Baño cada 2 semanas.',
    duenoId: 'd-villanueva',
    fechaAlta: '2023-08-10',
    ultimoControl: '2026-04-18',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-18', titulo: 'Control + chequeo piel', detalle: 'Piel sin lesiones. Continuar rutina.', pesoKg: 3.6 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-18', '2026-10-18'),
      v('Triple felina', '2025-10-18', '2026-10-18'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-01-18', '2026-04-18'),
    ],
  },
  {
    slug: 'apolo',
    nombre: 'Apolo',
    especie: 'perro',
    raza: 'Mastín napolitano',
    edad: 5,
    sexo: 'macho',
    pesoKg: 56.2,
    castrado: true,
    alergias: [],
    observaciones: 'Tamaño grande. Movilidad limitada en escaleras.',
    duenoId: 'd-silva',
    fechaAlta: '2021-03-08',
    ultimoControl: '2026-03-08',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-08', titulo: 'Vacuna anual + peso', detalle: 'Mantener peso estable.', pesoKg: 56.2 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-08', '2027-03-08'),
      v('Óctuple', '2026-03-08', '2027-03-08'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-03-08', '2026-06-08'),
    ],
  },
  {
    slug: 'duna',
    nombre: 'Duna',
    especie: 'perro',
    raza: 'Pomerania',
    edad: 6,
    sexo: 'hembra',
    pesoKg: 3.4,
    castrado: true,
    alergias: [],
    duenoId: 'd-galante',
    fechaAlta: '2020-05-20',
    ultimoControl: '2026-02-25',
    estado: 'activo',
    historia: [
      { fecha: '2026-02-25', titulo: 'Limpieza dental', detalle: 'Tártaro leve. Sin extracciones.', pesoKg: 3.4 },
    ],
    vacunas: [
      v('Antirrábica', '2025-08-25', '2026-08-25'),
      v('Óctuple', '2025-08-25', '2026-08-25'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-25', '2026-04-25'),
    ],
  },
  {
    slug: 'rex',
    nombre: 'Rex',
    especie: 'perro',
    raza: 'Mestizo grande',
    edad: 10,
    sexo: 'macho',
    pesoKg: 26.8,
    castrado: true,
    alergias: [],
    observaciones: 'Senior. Artrosis moderada. Meloxicam los lunes.',
    duenoId: 'd-ojeda',
    fechaAlta: '2016-09-12',
    ultimoControl: '2026-04-22',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-22', titulo: 'Control senior + dolor', detalle: 'Mejor movilidad esta semana. Continuar.', pesoKg: 26.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-12-22', '2026-12-22'),
      v('Óctuple', '2025-12-22', '2026-12-22'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-22', '2026-04-22'),
    ],
  },
  {
    slug: 'lulu',
    nombre: 'Lulú',
    especie: 'gato',
    raza: 'Calicó',
    edad: 6,
    sexo: 'hembra',
    pesoKg: 4.0,
    castrado: true,
    alergias: [],
    duenoId: 'd-pereyra',
    fechaAlta: '2020-07-30',
    ultimoControl: '2026-03-30',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-30', titulo: 'Vacunación', detalle: 'Triple felina + antirrábica.', pesoKg: 4.0 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-30', '2027-03-30'),
      v('Triple felina', '2026-03-30', '2027-03-30'),
    ],
    antiparasitarios: [
      a('Drontal Plus felino', 'interno', '2026-03-30', '2026-06-30'),
    ],
  },
  {
    slug: 'hank',
    nombre: 'Hank',
    especie: 'perro',
    raza: 'Doberman',
    edad: 4,
    sexo: 'macho',
    pesoKg: 38.0,
    castrado: true,
    alergias: [],
    duenoId: 'd-fontana',
    fechaAlta: '2022-06-04',
    ultimoControl: '2026-03-04',
    estado: 'activo',
    historia: [
      { fecha: '2026-03-04', titulo: 'Vacuna + corte uñas', detalle: 'Sin novedades.', pesoKg: 38.0 },
    ],
    vacunas: [
      v('Antirrábica', '2026-03-04', '2027-03-04'),
      v('Óctuple', '2026-03-04', '2027-03-04'),
    ],
    antiparasitarios: [
      a('Bravecto', 'externo', '2026-03-04', '2026-06-04'),
    ],
  },
  {
    slug: 'poppy',
    nombre: 'Poppy',
    especie: 'perro',
    raza: 'Bichón frisé',
    edad: 4,
    sexo: 'hembra',
    pesoKg: 5.8,
    castrado: true,
    alergias: [],
    duenoId: 'd-arias',
    fechaAlta: '2022-10-20',
    ultimoControl: '2026-04-04',
    proximaVisita: '2026-05-02',
    estado: 'activo',
    historia: [
      { fecha: '2026-04-04', titulo: 'Control dérmico', detalle: 'Pelaje en buen estado.', pesoKg: 5.8 },
    ],
    vacunas: [
      v('Antirrábica', '2025-10-04', '2026-10-04'),
      v('Óctuple', '2025-10-04', '2026-10-04'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2026-03-04', '2026-04-04'),
    ],
  },
  {
    slug: 'tango',
    nombre: 'Tango',
    especie: 'perro',
    raza: 'Mestizo mediano',
    edad: 7,
    sexo: 'macho',
    pesoKg: 17.2,
    castrado: true,
    alergias: [],
    duenoId: 'd-correa',
    fechaAlta: '2019-12-10',
    ultimoControl: '2025-09-15',
    estado: 'inactivo',
    historia: [
      { fecha: '2025-09-15', titulo: 'Última visita', detalle: 'Familia se mudó temporalmente. Pendiente reactivación.', pesoKg: 17.2 },
    ],
    vacunas: [
      v('Antirrábica', '2024-09-10', '2025-09-10', 'Vencida — paciente inactivo'),
      v('Óctuple', '2024-09-10', '2025-09-10', 'Vencida — paciente inactivo'),
    ],
    antiparasitarios: [
      a('NexGard', 'externo', '2025-09-15', '2025-10-15'),
    ],
  },
];

// =====================================================================
// HELPERS de mascotas
// =====================================================================

export const mascotaPorSlug = (slug: string) =>
  mascotas.find((m) => m.slug === slug);

export const mascotasDelDueno = (duenoId: string) =>
  mascotas.filter((m) => m.duenoId === duenoId);

export const otrasMascotas = (slug: string) => {
  const m = mascotaPorSlug(slug);
  if (!m) return [];
  return mascotasDelDueno(m.duenoId).filter((x) => x.slug !== slug);
};

export const inicialesMascota = (m: Pick<Mascota, 'nombre'>) =>
  m.nombre.charAt(0).toUpperCase();

// =====================================================================
// VISITAS de la semana 27/04 - 02/05/2026 (HOY = jue 30)
// =====================================================================

export const visitasHoy: Visita[] = [
  {
    id: 'v-h-1',
    fecha: HOY,
    hora: '09:00',
    duracionMin: 45,
    duenoId: 'd-luna',
    mascotaSlugs: ['maca', 'lia'],
    procedimiento: 'Antiparasitario externo + control general',
    tipo: 'Antiparasitario',
    estado: 'finalizado',
    notas: 'Ambas. Maca con discopatía — sin cambios.',
  },
  {
    id: 'v-h-2',
    fecha: HOY,
    hora: '10:00',
    duracionMin: 60,
    duenoId: 'd-rios',
    mascotaSlugs: ['luna', 'toto'],
    procedimiento: 'Control general (ambas) + antiparasitario interno Luna',
    tipo: 'Control',
    estado: 'en-curso',
    notas: 'Toto pesa 28,5kg — actualizar dosis NexGard',
  },
  {
    id: 'v-h-3',
    fecha: HOY,
    hora: '11:30',
    duracionMin: 45,
    duenoId: 'd-aguilar',
    mascotaSlugs: ['kira'],
    procedimiento: 'Control + corte de uñas',
    tipo: 'Control',
    estado: 'confirmado',
  },
  {
    id: 'v-h-4',
    fecha: HOY,
    hora: '14:00',
    duracionMin: 60,
    duenoId: 'd-mendez',
    mascotaSlugs: ['otto', 'bella'],
    procedimiento: 'Refuerzo Bravecto (ambos) + control desarrollo Bella',
    tipo: 'Antiparasitario',
    estado: 'confirmado',
    notas: 'Llevar Bravecto 1000mg (Otto) y 500mg (Bella)',
  },
  {
    id: 'v-h-5',
    fecha: HOY,
    hora: '16:00',
    duracionMin: 30,
    duenoId: 'd-galante',
    mascotaSlugs: ['duna'],
    procedimiento: 'Aplicación NexGard',
    tipo: 'Antiparasitario',
    estado: 'confirmado',
  },
  {
    id: 'v-h-6',
    fecha: HOY,
    hora: '17:30',
    duracionMin: 60,
    duenoId: 'd-ojeda',
    mascotaSlugs: ['rex'],
    procedimiento: 'Control senior + manejo dolor',
    tipo: 'Control',
    estado: 'confirmado',
    notas: 'Rex artrosis — preguntar tolerancia al meloxicam',
  },
];

export const visitasSemana: Visita[] = [
  // Lun 27
  { id: 'v-l-1', fecha: '2026-04-27', hora: '09:30', duracionMin: 60, duenoId: 'd-suarez', mascotaSlugs: ['nino', 'bruno'], procedimiento: 'Control senior Niño + vacuna óctuple Bruno', tipo: 'Control + vacuna', estado: 'finalizado' },
  { id: 'v-l-2', fecha: '2026-04-27', hora: '11:00', duracionMin: 45, duenoId: 'd-castro', mascotaSlugs: ['cleo'], procedimiento: 'Análisis sangre + control general', tipo: 'Control', estado: 'finalizado' },
  { id: 'v-l-3', fecha: '2026-04-27', hora: '15:30', duracionMin: 45, duenoId: 'd-sosa', mascotaSlugs: ['ciro'], procedimiento: 'Control dieta hipoalergénica', tipo: 'Control', estado: 'finalizado' },
  { id: 'v-l-4', fecha: '2026-04-27', hora: '17:00', duracionMin: 60, duenoId: 'd-pereyra', mascotaSlugs: ['lulu'], procedimiento: 'Vacunación felina anual', tipo: 'Vacunación', estado: 'finalizado' },

  // Mar 28
  { id: 'v-m-1', fecha: '2026-04-28', hora: '09:00', duracionMin: 60, duenoId: 'd-cabrera', mascotaSlugs: ['roma', 'pino'], procedimiento: 'Control Roma + vacuna anual Pino', tipo: 'Control + vacuna', estado: 'finalizado' },
  { id: 'v-m-2', fecha: '2026-04-28', hora: '11:00', duracionMin: 30, duenoId: 'd-arias', mascotaSlugs: ['poppy'], procedimiento: 'Control dérmico', tipo: 'Control', estado: 'finalizado' },
  { id: 'v-m-3', fecha: '2026-04-28', hora: '15:00', duracionMin: 90, duenoId: 'd-ferraro', mascotaSlugs: ['pepa'], procedimiento: 'Castración', tipo: 'Castración', estado: 'finalizado', notas: 'Sin complicaciones. Puntos a los 10 días.' },
  { id: 'v-m-4', fecha: '2026-04-28', hora: '17:30', duracionMin: 45, duenoId: 'd-rivero', mascotaSlugs: ['sasha'], procedimiento: 'Vacunación + control', tipo: 'Vacunación', estado: 'finalizado' },

  // Mié 29
  { id: 'v-x-1', fecha: '2026-04-29', hora: '09:30', duracionMin: 45, duenoId: 'd-fernandez-l', mascotaSlugs: ['frida', 'olivia'], procedimiento: 'Higiene ocular Frida + control Olivia', tipo: 'Control', estado: 'finalizado', notas: 'Persas hermanas' },
  { id: 'v-x-2', fecha: '2026-04-29', hora: '11:30', duracionMin: 30, duenoId: 'd-aguero', mascotaSlugs: ['cooper'], procedimiento: 'Control senior', tipo: 'Control', estado: 'finalizado' },
  { id: 'v-x-3', fecha: '2026-04-29', hora: '14:30', duracionMin: 60, duenoId: 'd-villanueva', mascotaSlugs: ['venus'], procedimiento: 'Control piel + chequeo', tipo: 'Control', estado: 'finalizado' },
  { id: 'v-x-4', fecha: '2026-04-29', hora: '17:00', duracionMin: 60, duenoId: 'd-iglesias', mascotaSlugs: ['lola', 'ramon'], procedimiento: 'Control otitis Lola + control Ramón', tipo: 'Control', estado: 'finalizado' },

  // Jue 30 (hoy) — se inyecta abajo

  // Vie 01
  { id: 'v-v-1', fecha: '2026-05-01', hora: '09:30', duracionMin: 60, duenoId: 'd-acosta', mascotaSlugs: ['felipe', 'inti'], procedimiento: 'Control general perro + gato', tipo: 'Control', estado: 'confirmado', notas: 'Aprovechar viaje a Punta Mogotes' },
  { id: 'v-v-2', fecha: '2026-05-01', hora: '11:30', duracionMin: 45, duenoId: 'd-ibarra', mascotaSlugs: ['pancho'], procedimiento: 'Control senior + dieta renal', tipo: 'Control', estado: 'confirmado' },
  { id: 'v-v-3', fecha: '2026-05-01', hora: '15:00', duracionMin: 45, duenoId: 'd-lorenzo', mascotaSlugs: ['olga'], procedimiento: 'Control ERC + subcutánea', tipo: 'Control', estado: 'confirmado' },
  { id: 'v-v-4', fecha: '2026-05-01', hora: '17:00', duracionMin: 30, duenoId: 'd-blanco', mascotaSlugs: ['salem'], procedimiento: 'Antiparasitario interno', tipo: 'Antiparasitario', estado: 'confirmado' },

  // Sáb 02
  { id: 'v-s-1', fecha: '2026-05-02', hora: '10:00', duracionMin: 60, duenoId: 'd-gimenez', mascotaSlugs: ['frodo', 'galadriel'], procedimiento: 'Control + antiparasitario ambos', tipo: 'Antiparasitario', estado: 'confirmado' },
  { id: 'v-s-2', fecha: '2026-05-02', hora: '11:30', duracionMin: 30, duenoId: 'd-arias', mascotaSlugs: ['poppy'], procedimiento: 'Refuerzo NexGard', tipo: 'Antiparasitario', estado: 'confirmado' },
  { id: 'v-s-3', fecha: '2026-05-02', hora: '14:00', duracionMin: 30, duenoId: 'd-lopez', mascotaSlugs: ['nina'], procedimiento: 'Control', tipo: 'Control', estado: 'confirmado' },
];

// =====================================================================
// STOCK
// =====================================================================

export const stock: Insumo[] = [
  { id: 's-1', nombre: 'Vacuna antirrábica', categoria: 'Vacuna canina', unidad: 'dosis', cantidad: 11, minimo: 5, ultimaCarga: '2026-04-10' },
  { id: 's-2', nombre: 'Vacuna óctuple canina', categoria: 'Vacuna canina', unidad: 'dosis', cantidad: 3, minimo: 5, ultimaCarga: '2026-03-22' },
  { id: 's-3', nombre: 'Vacuna tos de las perreras', categoria: 'Vacuna canina', unidad: 'dosis', cantidad: 9, minimo: 4, ultimaCarga: '2026-02-15' },
  { id: 's-4', nombre: 'Vacuna leptospirosis', categoria: 'Vacuna canina', unidad: 'dosis', cantidad: 6, minimo: 4, ultimaCarga: '2026-03-01' },
  { id: 's-5', nombre: 'Vacuna triple felina', categoria: 'Vacuna felina', unidad: 'dosis', cantidad: 8, minimo: 4, ultimaCarga: '2026-04-02' },
  { id: 's-6', nombre: 'Vacuna quíntuple felina', categoria: 'Vacuna felina', unidad: 'dosis', cantidad: 2, minimo: 4, ultimaCarga: '2026-02-28' },
  { id: 's-7', nombre: 'Bravecto canino 1000mg', categoria: 'Antiparasitario', unidad: 'comprimido', cantidad: 4, minimo: 3, ultimaCarga: '2026-03-15' },
  { id: 's-8', nombre: 'Bravecto canino 500mg', categoria: 'Antiparasitario', unidad: 'comprimido', cantidad: 6, minimo: 3, ultimaCarga: '2026-03-15' },
  { id: 's-9', nombre: 'NexGard 25-50kg', categoria: 'Antiparasitario', unidad: 'comprimido', cantidad: 8, minimo: 4, ultimaCarga: '2026-04-05' },
  { id: 's-10', nombre: 'Endogard plus', categoria: 'Antiparasitario', unidad: 'comprimido', cantidad: 4, minimo: 6, ultimaCarga: '2026-02-20' },
  { id: 's-11', nombre: 'Drontal Plus felino', categoria: 'Antiparasitario', unidad: 'comprimido', cantidad: 10, minimo: 4, ultimaCarga: '2026-03-30' },
  { id: 's-12', nombre: 'Suturas reabsorbibles 3-0', categoria: 'Quirúrgico', unidad: 'unidad', cantidad: 15, minimo: 8, ultimaCarga: '2026-02-10' },
  { id: 's-13', nombre: 'Jeringas 5ml estériles', categoria: 'Consumible', unidad: 'unidad', cantidad: 42, minimo: 25, ultimaCarga: '2026-04-15' },
  { id: 's-14', nombre: 'Anestésico local lidocaína', categoria: 'Quirúrgico', unidad: 'frasco 20ml', cantidad: 3, minimo: 2, ultimaCarga: '2026-03-08' },
  { id: 's-15', nombre: 'Gasas estériles 10x10', categoria: 'Consumible', unidad: 'sobre', cantidad: 48, minimo: 20, ultimaCarga: '2026-04-12' },
];

export const stockBajo = stock.filter((s) => s.cantidad < s.minimo);

// =====================================================================
// ALERTAS para el dashboard
// =====================================================================

const vacunasVencidas = mascotas.flatMap((m) =>
  m.vacunas
    .filter((vc) => vc.estado === 'vencida' && m.estado === 'activo')
    .map((vc) => ({ mascota: m, vacuna: vc }))
);

// Para el dashboard, solo contamos los antiparasitarios vencidos (los próximos
// los ve M. Ángeles en la ficha individual de cada mascota).
const antiparasPendientes = mascotas.flatMap((m) =>
  m.antiparasitarios
    .filter((ap) => m.estado === 'activo' && ap.estado === 'vencida')
    .map((ap) => ({ mascota: m, antiparasitario: ap }))
);

export interface Alerta {
  tipo: 'vacuna-vencida' | 'antiparasitario-pendiente' | 'stock-bajo' | 'control-vencido';
  texto: string;
  detalle?: string;
}

export const alertas: Alerta[] = [
  {
    tipo: 'vacuna-vencida',
    texto: `${vacunasVencidas.length} vacunas vencidas`,
    detalle: vacunasVencidas
      .slice(0, 3)
      .map((vv) => `${vv.mascota.nombre} (${vv.vacuna.nombre})`)
      .join(', ') + (vacunasVencidas.length > 3 ? ` y ${vacunasVencidas.length - 3} más` : ''),
  },
  {
    tipo: 'antiparasitario-pendiente',
    texto: `${antiparasPendientes.length} antiparasitarios vencidos`,
    detalle: antiparasPendientes
      .slice(0, 3)
      .map((ap) => `${ap.mascota.nombre} · ${ap.antiparasitario.nombre}`)
      .join(', ') + (antiparasPendientes.length > 3 ? ` y ${antiparasPendientes.length - 3} más` : ''),
  },
  {
    tipo: 'stock-bajo',
    texto: `${stockBajo.length} insumos bajo el mínimo`,
    detalle: stockBajo.map((s) => s.nombre).join(', '),
  },
];

// =====================================================================
// KPIs del dashboard
// =====================================================================

export interface Kpi {
  label: string;
  valor: string;
  detalle: string;
  trend?: 'up' | 'down' | 'flat';
}

export const kpis: Kpi[] = [
  {
    label: 'Visitas hoy',
    valor: String(visitasHoy.length),
    detalle: `${visitasHoy.filter((v) => v.estado === 'finalizado').length} hechas · ${visitasHoy.filter((v) => v.estado === 'en-curso').length} en curso · ${visitasHoy.filter((v) => v.estado === 'confirmado').length} pendientes`,
  },
  {
    label: 'Mascotas activas',
    valor: String(mascotas.filter((m) => m.estado === 'activo').length),
    detalle: `${duenos.length} dueños · ${mascotas.filter((m) => m.especie === 'perro').length} perros · ${mascotas.filter((m) => m.especie === 'gato').length} gatos`,
    trend: 'up',
  },
  {
    label: 'Alertas vacunación',
    valor: String(vacunasVencidas.length),
    detalle: 'vencidas · revisar plan',
    trend: 'flat',
  },
  {
    label: 'Stock bajo',
    valor: String(stockBajo.length),
    detalle: 'insumos por reponer',
    trend: 'down',
  },
];

// =====================================================================
// MENU del sidebar (vete)
// =====================================================================

export interface MenuItem {
  href: string;
  label: string;
  icon: string;
  match: string;
  external?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    href: '/demos/veterinaria/dashboard',
    label: 'Dashboard',
    match: '/demos/veterinaria/dashboard',
    icon: 'M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h3v-7h6v7h3a1 1 0 0 0 1-1V10',
  },
  {
    href: '/demos/veterinaria/pacientes',
    label: 'Pacientes',
    match: '/demos/veterinaria/pacientes',
    icon: 'M11 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM5 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM8 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM14 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  },
  {
    href: '/demos/veterinaria/agenda',
    label: 'Agenda',
    match: '/demos/veterinaria/agenda',
    icon: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 2v4M8 2v4M3 10h18',
  },
  {
    href: '/demos/veterinaria/stock',
    label: 'Stock',
    match: '/demos/veterinaria/stock',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12',
  },
  {
    href: '#',
    label: 'Tratamientos',
    match: 'NEVER',
    icon: 'M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z',
  },
  {
    href: '#',
    label: 'Configuración',
    match: 'NEVER',
    icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  },
];

// =====================================================================
// Iconos especie (SVG paths)
// =====================================================================

export const iconoEspecie: Record<Especie, string> = {
  // Path simple de pata canina
  perro: 'M11 5.7c-1.4 0-2.5 1.4-2.5 3 0 1.6 1.1 3 2.5 3s2.5-1.4 2.5-3c0-1.6-1.1-3-2.5-3zm5 1c-1.1 0-2 1.1-2 2.5s.9 2.5 2 2.5 2-1.1 2-2.5-.9-2.5-2-2.5zm-10 0c-1.1 0-2 1.1-2 2.5S4.9 11.7 6 11.7s2-1.1 2-2.5-.9-2.5-2-2.5zm14 4c-1.1 0-2 1.1-2 2.5s.9 2.5 2 2.5 2-1.1 2-2.5-.9-2.5-2-2.5zM4 10.7c-1.1 0-2 1.1-2 2.5s.9 2.5 2 2.5 2-1.1 2-2.5-.9-2.5-2-2.5zm7 2.6c-3 0-6.5 3.4-6.5 6.4 0 1.5 1.1 2 2.5 2 1.5 0 2.5-1 4-1s2.5 1 4 1c1.4 0 2.5-.5 2.5-2 0-3-3.5-6.4-6-6.4z',
  // Path simple de cabeza de gato con orejas
  gato: 'M12 4 8.5 7.5h7L12 4zm-4.5 4C5.5 8 4 9.5 4 11.5v5C4 19 6 21 8.5 21h7c2.5 0 4.5-2 4.5-4.5v-5C20 9.5 18.5 8 16.5 8h-9zm2 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm5 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM12 16l-1.5 2h3L12 16z',
};

// =====================================================================
// Helpers de fecha — formato compacto en español
// =====================================================================

const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export const fechaCorta = (iso: string) => {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${meses[m - 1]} ${y}`;
};

export const fechaLargaDia = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${dias[date.getDay()]} ${d} de ${meses[m - 1]} de ${y}`;
};

export const fechaConDia = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${dias[date.getDay()].slice(0, 3)} ${d} ${meses[m - 1]}`;
};
