export interface LevelsType {
  title: string;
  color: string;
  icon: 'up' | 'down';
  imc: number[];
  yourImc?: number;
}

export const levels: LevelsType[] = [
  { title: 'Magro', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#E2b039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },
];
