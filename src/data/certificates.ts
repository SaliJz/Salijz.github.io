/**
 * certificates.ts
 * Fuente de datos de Certificados. El array se mantiene vacío hasta que
 * existan credenciales reales confirmadas; la sección muestra un estado
 * visual explícito de contenido pendiente en lugar de inventarlas.
 */

export type CertificateCategory = 'local' | 'global';
export type CertificateStatus = 'active' | 'expired' | 'in-progress';

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: CertificateCategory;
  status: CertificateStatus;
}

export const certificates: Certificate[] = [];
