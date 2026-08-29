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
    description:
      'Reconocimiento por la contribución al proyecto Guardianes del Humedal, integrando sistemas funcionales desarrollados en El Viaje de Franklin dentro de un entorno virtual educativo.',
    issued: '05/2026',
    category: 'local',
    status: 'active',
  },
];
