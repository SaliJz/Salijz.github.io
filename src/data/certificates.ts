import { withBase } from '@/lib/assetPath';

export type CertificateCategory = 'local' | 'global';
export type CertificateStatus = 'active' | 'expired' | 'in-progress';

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  description?: string;
  issued?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: CertificateCategory;
  status: CertificateStatus;
}

export const certificates: Certificate[] = [
  {
    id: 'tourism-care-contribution',
    name: 'Certificado de Contribución',
    issuer: 'Asociación Civil Turismo Cuida',
    description: 'Reconocimiento por la contribución realizada al proyecto Guardianes del Humedal.',
    issued: '05/2026',
    category: 'local',
    status: 'active',
  },
  {
    id: 'office-domain-romero',
    name: 'Dominio Office',
    issuer: 'Fundación Romero · Becas Grupo Romero',
    description: 'Curso completado satisfactoriamente con una duración de 80 horas académicas.',
    issued: '28/08/2026',
    credentialId: 'wdwGED6sdr',
    verificationUrl: withBase('/certificates/dominio-office-fundacion-romero.pdf'),
    category: 'local',
    status: 'active',
  },
  {
    id: 'advanced-english-british-center',
    name: 'Inglés Avanzado',
    issuer: 'El Centro Británico · Ucayali',
    description: 'Certificado de capacitación en Inglés Avanzado con una duración de 440 horas.',
    issued: '15/03/2021',
    verificationUrl: withBase('/certificates/ingles-avanzado-centro-britanico.pdf'),
    category: 'local',
    status: 'active',
  },
  {
    id: 'ef-set-c1-advanced',
    name: 'EF SET English Certificate — C1 Advanced',
    issuer: 'EF SET',
    description: 'Resultado 69/100, correspondiente a C1 Advanced según el CEFR.',
    issued: '19/08/2026',
    verificationUrl: 'https://cert.efset.org/T13kgz',
    category: 'global',
    status: 'active',
  },
];
