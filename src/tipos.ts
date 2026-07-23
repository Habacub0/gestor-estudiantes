// Tipo personalizado con interface
export interface IPersona {
  readonly id: number;
  nombre: string;
  correo: string;
}

// Tipo personalizado con type (unión literal)
export type Jornada = "Matutina" | "Vespertina" | "Nocturna ";

// Tipo genérico para respuestas
export type Resultado<T> = {
  ok: boolean;
  datos: T;
};