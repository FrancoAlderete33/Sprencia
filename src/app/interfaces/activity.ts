export interface Activity {
  id: number,
  actividad: string,
  descripcion: string,
  horario_disponible: string,
  precio: number
}


export interface Filtro {
  preMin: number;
  preMax: number;
}
