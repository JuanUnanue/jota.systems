// Mock data para el demo del consultorio (Ache Odontología).
// Todos los datos son ficticios — cualquier parecido con la realidad es coincidencia.

export type EstadoTurno = 'confirmado' | 'en-sala' | 'finalizado' | 'cancelado';
export type EstadoPaciente = 'activo' | 'inactivo';
// Origen del turno:
//   - manual: reservado por teléfono o presencial (incluye todos los pacientes recurrentes)
//   - online-nuevo: primera consulta reservada online con seña pagada
// (Las primeras consultas son las únicas que pueden reservarse online; los recurrentes
// los coordina la Dra. Ache a mano.)
export type OrigenTurno = 'manual' | 'online-nuevo';
export type ObraSocial =
  | 'OSDE'
  | 'Swiss Medical'
  | 'Galeno'
  | 'IOMA'
  | 'PAMI'
  | 'Sancor Salud'
  | 'Medifé'
  | 'Particular';

export type TipoTurno =
  | 'Control'
  | 'Limpieza'
  | 'Tratamiento'
  | 'Urgencia'
  | 'Cirugía'
  | 'Ortodoncia';

export interface Turno {
  id: string;
  hora: string; // "10:30"
  duracionMin: number;
  pacienteSlug: string;
  pacienteNombre: string;
  procedimiento: string;
  tipo: TipoTurno;
  estado: EstadoTurno;
  fecha: string; // ISO YYYY-MM-DD
  notas?: string;
  origen: OrigenTurno; // manual = telefónico/walk-in (todos los recurrentes), online-nuevo = primera consulta con seña
}

export interface EntradaHistoria {
  fecha: string;
  titulo: string;
  detalle: string;
  profesional: string;
}

export interface Tratamiento {
  nombre: string;
  inicio: string;
  estado: 'en-curso' | 'finalizado' | 'pausado';
  progresoLabel: string; // "8 / 24 sesiones"
  progresoPct: number; // 0-100
  proximoPaso?: string;
}

export interface Paciente {
  slug: string;
  nombre: string;
  apellido: string;
  edad: number;
  dni: string;
  telefono: string;
  email: string;
  direccion: string;
  obraSocial: ObraSocial;
  numeroAfiliado?: string;
  contactoEmergencia: { nombre: string; telefono: string; relacion: string };
  alergias: string[];
  medicacion: string[];
  observaciones?: string;
  ultimoTurno: string; // ISO
  proximoControl: string; // ISO
  fechaPrimerConsulta: string; // ISO — primera vez que vino al consultorio
  estado: EstadoPaciente;
  cumple: string; // MM-DD
  historia: EntradaHistoria[];
  tratamientos: Tratamiento[];
}

// Helper: nombre completo
export const nombreCompleto = (p: Pick<Paciente, 'nombre' | 'apellido'>) =>
  `${p.nombre} ${p.apellido}`;

export const iniciales = (p: Pick<Paciente, 'nombre' | 'apellido'>) =>
  `${p.nombre.charAt(0)}${p.apellido.charAt(0)}`.toUpperCase();

// Pacientes — 12, con datos plausibles. Laura Gimenez tiene la ficha más rica.
export const pacientes: Paciente[] = [
  {
    slug: 'laura-gimenez',
    nombre: 'Laura',
    apellido: 'Gimenez',
    edad: 38,
    dni: '32.456.789',
    telefono: '+54 9 223 415-2287',
    email: 'laura.gimenez@gmail.com',
    direccion: 'Olavarría 2845, Mar del Plata',
    obraSocial: 'OSDE',
    numeroAfiliado: '62-4128739-03',
    contactoEmergencia: { nombre: 'Diego Gimenez', telefono: '+54 9 223 411-0928', relacion: 'Esposo' },
    alergias: ['Penicilina'],
    medicacion: ['Levotiroxina 50mcg (mañana)'],
    observaciones: 'Bruxismo nocturno. Usa placa de descarga desde 2024.',
    ultimoTurno: '2026-04-15',
    proximoControl: '2026-05-12',
    fechaPrimerConsulta: '2025-03-12',
    estado: 'activo',
    cumple: '07-22',
    historia: [
      {
        fecha: '2026-04-15',
        titulo: 'Control + ajuste placa de descarga',
        detalle: 'Buena adaptación. Sin desgaste atípico. Próximo control en 6 meses.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2026-02-03',
        titulo: 'Limpieza profunda + flúor',
        detalle: 'Tártaro moderado en sector posteroinferior. Indicaciones de higiene reforzadas.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2025-11-20',
        titulo: 'Endodoncia pieza 36',
        detalle: 'Conducto único. Sellado con gutta-percha. Restauración provisoria.',
        profesional: 'Dr. F. Lépori',
      },
      {
        fecha: '2025-11-27',
        titulo: 'Corona pieza 36',
        detalle: 'Corona de porcelana sobre metal. Cementado definitivo. Sin contactos altos.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2025-08-08',
        titulo: 'Restauración pieza 24',
        detalle: 'Caries clase II MO. Resina compuesta A2. Punto de contacto reconstruido.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2025-03-12',
        titulo: 'Primera consulta',
        detalle: 'Derivada por colega. Diagnóstico inicial: bruxismo, caries en 24, lesión periapical en 36.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [
      {
        nombre: 'Blanqueamiento ambulatorio',
        inicio: '2026-04-20',
        estado: 'en-curso',
        progresoLabel: '2 / 4 sesiones',
        progresoPct: 50,
        proximoPaso: 'Tercera sesión — 06/05',
      },
    ],
  },
  {
    slug: 'martin-rossi',
    nombre: 'Martín',
    apellido: 'Rossi',
    edad: 45,
    dni: '24.789.012',
    telefono: '+54 9 223 477-3389',
    email: 'martin.rossi@hotmail.com',
    direccion: 'Av. Colón 4521, Mar del Plata',
    obraSocial: 'IOMA',
    numeroAfiliado: '8-7654321-9',
    contactoEmergencia: { nombre: 'Silvana Rossi', telefono: '+54 9 223 416-7712', relacion: 'Hermana' },
    alergias: [],
    medicacion: ['Enalapril 10mg'],
    ultimoTurno: '2026-04-22',
    proximoControl: '2026-10-22',
    fechaPrimerConsulta: '2023-06-14',
    estado: 'activo',
    cumple: '03-14',
    historia: [
      {
        fecha: '2026-04-22',
        titulo: 'Extracción pieza 48',
        detalle: 'Tercer molar incluido. Sin complicaciones. Indicaciones postquirúrgicas entregadas.',
        profesional: 'Dr. F. Lépori',
      },
      {
        fecha: '2026-04-08',
        titulo: 'Consulta dolor mandibular',
        detalle: 'Dolor irradiado por pericoronaritis 48. Indicada extracción.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2025-09-15',
        titulo: 'Limpieza',
        detalle: 'Sin novedades. Recomendar uso de hilo dental.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [],
  },
  {
    slug: 'sofia-aguilar',
    nombre: 'Sofía',
    apellido: 'Aguilar',
    edad: 28,
    dni: '38.221.554',
    telefono: '+54 9 223 502-1144',
    email: 'sofi.aguilar@gmail.com',
    direccion: 'Bolívar 3210, Mar del Plata',
    obraSocial: 'Swiss Medical',
    numeroAfiliado: 'SM-42198-7',
    contactoEmergencia: { nombre: 'Elena Costa', telefono: '+54 9 223 478-0091', relacion: 'Madre' },
    alergias: [],
    medicacion: [],
    ultimoTurno: '2026-04-05',
    proximoControl: '2026-05-03',
    fechaPrimerConsulta: '2025-02-10',
    estado: 'activo',
    cumple: '11-28',
    historia: [
      {
        fecha: '2026-04-05',
        titulo: 'Control de ortodoncia — mes 14',
        detalle: 'Ajuste de arco. Buena evolución. Continuar con mismas gomitas.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2025-02-10',
        titulo: 'Inicio ortodoncia fija',
        detalle: 'Brackets metálicos sup. e inf. Plan de 24 meses.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [
      {
        nombre: 'Ortodoncia fija',
        inicio: '2025-02-10',
        estado: 'en-curso',
        progresoLabel: '14 / 24 meses',
        progresoPct: 58,
        proximoPaso: 'Control mensual — 03/05',
      },
    ],
  },
  {
    slug: 'joaquin-mendez',
    nombre: 'Joaquín',
    apellido: 'Méndez',
    edad: 52,
    dni: '20.114.876',
    telefono: '+54 9 223 488-2210',
    email: 'jmendez@gmail.com',
    direccion: 'Garay 1822, Mar del Plata',
    obraSocial: 'OSDE',
    numeroAfiliado: '62-9876543-01',
    contactoEmergencia: { nombre: 'Pilar Méndez', telefono: '+54 9 223 411-3344', relacion: 'Esposa' },
    alergias: ['Ibuprofeno'],
    medicacion: ['Atorvastatina 20mg', 'Aspirineta 100mg'],
    observaciones: 'Cardiópata. Premedicación con amoxicilina previa a procedimientos invasivos.',
    ultimoTurno: '2026-04-10',
    proximoControl: '2026-05-10',
    fechaPrimerConsulta: '2022-08-22',
    estado: 'activo',
    cumple: '06-04',
    historia: [
      {
        fecha: '2026-04-10',
        titulo: 'Endodoncia pieza 26 — sesión 1',
        detalle: 'Apertura cameral, conductometría. Medicación intracameral. Continúa próxima semana.',
        profesional: 'Dr. F. Lépori',
      },
      {
        fecha: '2026-03-28',
        titulo: 'Consulta dolor pieza 26',
        detalle: 'Pulpitis irreversible. Indicada endodoncia.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [
      {
        nombre: 'Endodoncia + corona pieza 26',
        inicio: '2026-04-10',
        estado: 'en-curso',
        progresoLabel: 'Etapa 2 de 4',
        progresoPct: 50,
        proximoPaso: 'Sellado de conductos — 12/05',
      },
    ],
  },
  {
    slug: 'camila-fernandez',
    nombre: 'Camila',
    apellido: 'Fernández',
    edad: 34,
    dni: '34.998.211',
    telefono: '+54 9 223 466-7733',
    email: 'cami.fernandez@outlook.com',
    direccion: 'San Luis 2104, Mar del Plata',
    obraSocial: 'Galeno',
    numeroAfiliado: 'GAL-87421',
    contactoEmergencia: { nombre: 'Lucas Vidal', telefono: '+54 9 223 401-9988', relacion: 'Pareja' },
    alergias: [],
    medicacion: [],
    ultimoTurno: '2026-03-20',
    proximoControl: '2026-09-20',
    fechaPrimerConsulta: '2024-11-08',
    estado: 'activo',
    cumple: '09-12',
    historia: [
      {
        fecha: '2026-03-20',
        titulo: 'Limpieza + control',
        detalle: 'Buena higiene. Sin caries activas.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [],
  },
  {
    slug: 'tomas-ibarra',
    nombre: 'Tomás',
    apellido: 'Ibarra',
    edad: 61,
    dni: '14.502.781',
    telefono: '+54 9 223 419-2244',
    email: 'tomas.ibarra@gmail.com',
    direccion: 'Brown 2980, Mar del Plata',
    obraSocial: 'PAMI',
    numeroAfiliado: '150-50278-1-00',
    contactoEmergencia: { nombre: 'Marta Ibarra', telefono: '+54 9 223 488-0011', relacion: 'Esposa' },
    alergias: [],
    medicacion: ['Metformina 850mg', 'Losartán 50mg'],
    observaciones: 'Diabético tipo 2 controlado. Cuidar tiempos de cicatrización.',
    ultimoTurno: '2025-11-08',
    proximoControl: '2026-04-15',
    fechaPrimerConsulta: '2020-04-12',
    estado: 'activo',
    cumple: '01-30',
    historia: [
      {
        fecha: '2025-11-08',
        titulo: 'Prótesis removible superior — colocación',
        detalle: 'Adaptación correcta. Indicaciones de higiene y reajuste a 30 días.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2025-08-22',
        titulo: 'Extracciones múltiples superiores',
        detalle: 'Piezas 14, 15, 16 por enfermedad periodontal avanzada. Cicatrización en curso.',
        profesional: 'Dr. F. Lépori',
      },
    ],
    tratamientos: [],
  },
  {
    slug: 'valentina-perez',
    nombre: 'Valentina',
    apellido: 'Pérez',
    edad: 24,
    dni: '42.118.553',
    telefono: '+54 9 223 502-8841',
    email: 'valenperez24@gmail.com',
    direccion: 'Falucho 1156, Mar del Plata',
    obraSocial: 'Particular',
    contactoEmergencia: { nombre: 'Mariana Pérez', telefono: '+54 9 223 478-2210', relacion: 'Madre' },
    alergias: [],
    medicacion: ['Anticonceptivo oral'],
    ultimoTurno: '2026-04-18',
    proximoControl: '2026-10-18',
    fechaPrimerConsulta: '2026-04-04',
    estado: 'activo',
    cumple: '02-08',
    historia: [
      {
        fecha: '2026-04-18',
        titulo: 'Blanqueamiento — sesión 2',
        detalle: 'Sin sensibilidad reportada. Color objetivo a 2 tonos.',
        profesional: 'Dra. M. Ache',
      },
      {
        fecha: '2026-04-04',
        titulo: 'Blanqueamiento — sesión 1',
        detalle: 'Aislación, gel al 35%. 2 aplicaciones de 15 min.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [
      {
        nombre: 'Blanqueamiento en consultorio',
        inicio: '2026-04-04',
        estado: 'en-curso',
        progresoLabel: '2 / 3 sesiones',
        progresoPct: 66,
        proximoPaso: 'Sesión final — 02/05',
      },
    ],
  },
  {
    slug: 'federico-castro',
    nombre: 'Federico',
    apellido: 'Castro',
    edad: 48,
    dni: '22.665.119',
    telefono: '+54 9 223 415-9988',
    email: 'fcastro@gmail.com',
    direccion: 'Alvear 3345, Mar del Plata',
    obraSocial: 'Sancor Salud',
    numeroAfiliado: 'SS-447821',
    contactoEmergencia: { nombre: 'Andrea López', telefono: '+54 9 223 477-2200', relacion: 'Esposa' },
    alergias: [],
    medicacion: [],
    ultimoTurno: '2025-12-04',
    proximoControl: '2026-04-12',
    fechaPrimerConsulta: '2024-05-08',
    estado: 'activo',
    cumple: '08-19',
    historia: [
      {
        fecha: '2025-12-04',
        titulo: 'Limpieza + control',
        detalle: 'Sin novedades.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [],
  },
  {
    slug: 'julieta-romero',
    nombre: 'Julieta',
    apellido: 'Romero',
    edad: 29,
    dni: '37.998.221',
    telefono: '+54 9 223 488-7711',
    email: 'juli.romero@gmail.com',
    direccion: 'Rivadavia 4218, Mar del Plata',
    obraSocial: 'OSDE',
    numeroAfiliado: '62-3344556-02',
    contactoEmergencia: { nombre: 'Pablo Romero', telefono: '+54 9 223 411-8822', relacion: 'Hermano' },
    alergias: ['Látex'],
    medicacion: [],
    ultimoTurno: '2026-04-25',
    proximoControl: '2026-05-09',
    fechaPrimerConsulta: '2024-09-03',
    estado: 'activo',
    cumple: '05-15',
    historia: [
      {
        fecha: '2026-04-25',
        titulo: 'Restauración pieza 46',
        detalle: 'Caries clase I oclusal. Resina A3.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [],
  },
  {
    slug: 'mateo-suarez',
    nombre: 'Mateo',
    apellido: 'Suárez',
    edad: 41,
    dni: '26.778.992',
    telefono: '+54 9 223 466-1199',
    email: 'mateo.suarez@gmail.com',
    direccion: 'Mitre 2580, Mar del Plata',
    obraSocial: 'Medifé',
    numeroAfiliado: 'MED-118872',
    contactoEmergencia: { nombre: 'Florencia Suárez', telefono: '+54 9 223 415-7733', relacion: 'Esposa' },
    alergias: [],
    medicacion: [],
    ultimoTurno: '2025-10-15',
    proximoControl: '2026-04-15',
    fechaPrimerConsulta: '2023-11-22',
    estado: 'inactivo',
    cumple: '12-03',
    historia: [
      {
        fecha: '2025-10-15',
        titulo: 'Limpieza',
        detalle: 'Sin novedades.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [],
  },
  {
    slug: 'carla-ruiz',
    nombre: 'Carla',
    apellido: 'Ruiz',
    edad: 55,
    dni: '17.882.443',
    telefono: '+54 9 223 477-4422',
    email: 'carla.ruiz@hotmail.com',
    direccion: 'San Martín 3892, Mar del Plata',
    obraSocial: 'IOMA',
    numeroAfiliado: '8-1234567-3',
    contactoEmergencia: { nombre: 'Roberto Ruiz', telefono: '+54 9 223 401-2233', relacion: 'Esposo' },
    alergias: [],
    medicacion: ['Levotiroxina 75mcg'],
    ultimoTurno: '2026-04-12',
    proximoControl: '2026-07-12',
    fechaPrimerConsulta: '2019-03-18',
    estado: 'activo',
    cumple: '04-25',
    historia: [
      {
        fecha: '2026-04-12',
        titulo: 'Control + ajuste prótesis',
        detalle: 'Buen estado general. Reajuste menor en prótesis inferior.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [],
  },
  {
    slug: 'lucas-dominguez',
    nombre: 'Lucas',
    apellido: 'Domínguez',
    edad: 33,
    dni: '33.221.778',
    telefono: '+54 9 223 502-3344',
    email: 'lucas.dom@gmail.com',
    direccion: 'Belgrano 1455, Mar del Plata',
    obraSocial: 'Particular',
    contactoEmergencia: { nombre: 'Sofía Pérez', telefono: '+54 9 223 478-9911', relacion: 'Pareja' },
    alergias: [],
    medicacion: [],
    ultimoTurno: '2026-02-22',
    proximoControl: '2026-08-22',
    fechaPrimerConsulta: '2026-02-22',
    estado: 'activo',
    cumple: '07-10',
    historia: [
      {
        fecha: '2026-02-22',
        titulo: 'Primera consulta + limpieza',
        detalle: 'Paciente nuevo. Buen estado general. Caries leve en 17 a controlar.',
        profesional: 'Dra. M. Ache',
      },
    ],
    tratamientos: [],
  },
];

// Lookup
export const pacientePorSlug = (slug: string) =>
  pacientes.find((p) => p.slug === slug);

// Turnos de hoy (2026-04-30)
const HOY = '2026-04-30';

export const turnosHoy: Turno[] = [
  {
    id: 't-h-1',
    hora: '09:00',
    duracionMin: 30,
    pacienteSlug: 'camila-fernandez',
    pacienteNombre: 'Camila Fernández',
    procedimiento: 'Control + limpieza',
    tipo: 'Limpieza',
    estado: 'finalizado',
    fecha: HOY,
    origen: 'manual',
  },
  {
    id: 't-h-2',
    hora: '09:30',
    duracionMin: 60,
    pacienteSlug: 'joaquin-mendez',
    pacienteNombre: 'Joaquín Méndez',
    procedimiento: 'Endodoncia 26 — sesión 2',
    tipo: 'Tratamiento',
    estado: 'finalizado',
    fecha: HOY,
    notas: 'Premedicar con amoxicilina',
    origen: 'manual',
  },
  {
    id: 't-h-3',
    hora: '11:00',
    duracionMin: 30,
    pacienteSlug: 'valentina-perez',
    pacienteNombre: 'Valentina Pérez',
    procedimiento: 'Blanqueamiento — sesión 3',
    tipo: 'Tratamiento',
    estado: 'en-sala',
    fecha: HOY,
    origen: 'manual',
  },
  {
    id: 't-h-4',
    hora: '11:45',
    duracionMin: 30,
    pacienteSlug: 'laura-gimenez',
    pacienteNombre: 'Laura Gimenez',
    procedimiento: 'Blanqueamiento — sesión 3',
    tipo: 'Tratamiento',
    estado: 'confirmado',
    fecha: HOY,
    origen: 'manual',
  },
  {
    id: 't-h-5',
    hora: '12:30',
    duracionMin: 30,
    pacienteSlug: 'martin-rossi',
    pacienteNombre: 'Martín Rossi',
    procedimiento: 'Control postextracción',
    tipo: 'Control',
    estado: 'confirmado',
    fecha: HOY,
    origen: 'manual',
  },
  {
    id: 't-h-6',
    hora: '16:30',
    duracionMin: 45,
    pacienteSlug: 'julieta-romero',
    pacienteNombre: 'Julieta Romero',
    procedimiento: 'Restauración pieza 47',
    tipo: 'Tratamiento',
    estado: 'confirmado',
    fecha: HOY,
    origen: 'manual',
  },
  {
    id: 't-h-7',
    hora: '17:30',
    duracionMin: 30,
    pacienteSlug: 'sofia-aguilar',
    pacienteNombre: 'Sofía Aguilar',
    procedimiento: 'Control ortodoncia',
    tipo: 'Ortodoncia',
    estado: 'confirmado',
    fecha: HOY,
    origen: 'manual',
  },
  {
    id: 't-h-8',
    hora: '18:30',
    duracionMin: 30,
    pacienteSlug: '#',
    pacienteNombre: 'Lautaro Gómez',
    procedimiento: 'Primera consulta',
    tipo: 'Control',
    estado: 'confirmado',
    fecha: HOY,
    notas: 'Reservó online · seña $6.000 acreditada',
    origen: 'online-nuevo',
  },
  {
    id: 't-h-9',
    hora: '19:00',
    duracionMin: 60,
    pacienteSlug: 'lucas-dominguez',
    pacienteNombre: 'Lucas Domínguez',
    procedimiento: 'Restauración pieza 17',
    tipo: 'Tratamiento',
    estado: 'confirmado',
    fecha: HOY,
    origen: 'manual',
  },
];

// Turnos próximos (siguientes días)
export const proximosTurnos: Turno[] = [
  {
    id: 't-p-1',
    hora: '10:00',
    duracionMin: 30,
    pacienteSlug: 'tomas-ibarra',
    pacienteNombre: 'Tomás Ibarra',
    procedimiento: 'Reajuste prótesis',
    tipo: 'Control',
    estado: 'confirmado',
    fecha: '2026-05-01',
    origen: 'manual',
  },
  {
    id: 't-p-2',
    hora: '11:30',
    duracionMin: 30,
    pacienteSlug: 'carla-ruiz',
    pacienteNombre: 'Carla Ruiz',
    procedimiento: 'Limpieza',
    tipo: 'Limpieza',
    estado: 'confirmado',
    fecha: '2026-05-01',
    origen: 'manual',
  },
  {
    id: 't-p-3',
    hora: '17:00',
    duracionMin: 60,
    pacienteSlug: 'federico-castro',
    pacienteNombre: 'Federico Castro',
    procedimiento: 'Consulta implante 46',
    tipo: 'Cirugía',
    estado: 'confirmado',
    fecha: '2026-05-02',
    origen: 'manual',
  },
  {
    id: 't-p-4',
    hora: '18:00',
    duracionMin: 30,
    pacienteSlug: '#',
    pacienteNombre: 'Camila Aguirre',
    procedimiento: 'Primera consulta',
    tipo: 'Control',
    estado: 'confirmado',
    fecha: '2026-05-02',
    notas: 'Reservó online · seña $6.000 acreditada',
    origen: 'online-nuevo',
  },
  {
    id: 't-p-5',
    hora: '09:00',
    duracionMin: 60,
    pacienteSlug: 'joaquin-mendez',
    pacienteNombre: 'Joaquín Méndez',
    procedimiento: 'Endodoncia 26 — sellado',
    tipo: 'Tratamiento',
    estado: 'confirmado',
    fecha: '2026-05-04',
    origen: 'manual',
  },
  {
    id: 't-p-6',
    hora: '10:30',
    duracionMin: 30,
    pacienteSlug: 'mateo-suarez',
    pacienteNombre: 'Mateo Suárez',
    procedimiento: 'Control anual',
    tipo: 'Control',
    estado: 'confirmado',
    fecha: '2026-05-04',
    origen: 'manual',
  },
];

// Alertas para el dashboard
export interface Alerta {
  tipo: 'control-vencido' | 'reserva-online' | 'cumpleanos' | 'tratamiento-en-curso';
  texto: string;
  detalle?: string;
}

export const alertas: Alerta[] = [
  {
    tipo: 'reserva-online',
    texto: '2 primeras consultas reservadas online esta semana',
    detalle: 'Lautaro Gómez (jue 30) y Camila Aguirre (sáb 02) — ambas con seña $6.000 acreditada',
  },
  {
    tipo: 'control-vencido',
    texto: '3 controles vencidos esta semana',
    detalle: 'Federico Castro, Tomás Ibarra, Mateo Suárez',
  },
  {
    tipo: 'cumpleanos',
    texto: '2 cumpleaños esta semana',
    detalle: 'Carla Ruiz (25/04), Julieta Romero (15/05)',
  },
  {
    tipo: 'tratamiento-en-curso',
    texto: '4 tratamientos largos en curso',
    detalle: 'Ortodoncias y blanqueamientos activos',
  },
];

// KPIs del dashboard
export interface Kpi {
  label: string;
  valor: string;
  detalle: string;
  trend?: 'up' | 'down' | 'flat';
}

export const kpis: Kpi[] = [
  { label: 'Turnos hoy', valor: '9', detalle: '2 finalizados · 1 en sala · 6 pendientes' },
  { label: 'Pacientes activos', valor: '247', detalle: '+12 este mes', trend: 'up' },
  { label: 'Reservas online', valor: '2', detalle: 'primeras consultas · $12.000 en señas', trend: 'up' },
  { label: 'Ingresos del mes', valor: '$3.840.000', detalle: '+18% vs marzo', trend: 'up' },
];

// Items del menú lateral del demo
export interface MenuItem {
  href: string;
  label: string;
  icon: string; // SVG path data
  match: string; // path prefix para el active
  external?: boolean; // abre en nueva pestaña, sin estado disabled
}

export const menuItems: MenuItem[] = [
  {
    href: '/demos/consultorio/dashboard',
    label: 'Dashboard',
    match: '/demos/consultorio/dashboard',
    icon: 'M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h3v-7h6v7h3a1 1 0 0 0 1-1V10',
  },
  {
    href: '/demos/consultorio/pacientes',
    label: 'Pacientes',
    match: '/demos/consultorio/pacientes',
    icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    href: '/demos/consultorio/agenda',
    label: 'Agenda',
    match: '/demos/consultorio/agenda',
    icon: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 2v4M8 2v4M3 10h18',
  },
  {
    href: '#',
    label: 'Tratamientos',
    match: 'NEVER',
    icon: 'M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z',
  },
  {
    href: '/demos/consultorio/reservar',
    label: 'Booking público',
    match: 'NEVER',
    icon: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18',
    external: true,
  },
  {
    href: '#',
    label: 'Configuración',
    match: 'NEVER',
    icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  },
];
