import { levels, LevelsType } from "./imc";

export function calculateImc(height: number, weight: number) {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let newLevel: LevelsType = {...levels[i]}
      newLevel.yourImc = parseFloat(imc.toFixed(2));
      return newLevel;
    }
  }
  
  return null;
}
