export interface Technician {
  id: string;
  name: string;
}

export interface Team {
  id: string;
  members: Technician[];
  type: 'solo' | 'dupla' | 'trio';
}

export interface ServiceBox {
  id: string;
  number: number;
  team: Team | null;
  status?: string; // ex: "TOKYO"
  services: Service[];
}

export interface Service {
  id: string;
  osNumber: string;
  type: ServiceType;
}

export type ServiceType = 
  | 'LOSS' 
  | 'LINK LOSS'
  | 'LENTIDÃO' 
  | 'ATIVAÇÃO' 
  | 'UPGRADE' 
  | 'T.ENDEREÇO'
  | 'TROCA DE ENDEREÇO'
  | 'T.EQUIPAMENTO'
  | 'TROCA DE COMODO'
  | 'SEM CONEXÃO'
  | 'OFF'
  | 'REALOCAR ONU'
  | 'SUPORTE'
  | 'UPGRADE + REPETIDOR'
  | 'UPGRADE/T.ENDEREÇO';

export type Shift = 'MANHÃ' | 'TARDE';

export interface Schedule {
  id: string;
  date: string;
  shift: Shift;
  boxes: ServiceBox[];
}
