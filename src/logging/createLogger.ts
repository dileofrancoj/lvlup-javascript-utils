export interface Logger {
  debug: (...args: unknown[]) => void
  error: (...args: unknown[]) => void
  warn: (...args: unknown[]) => void
  extend: (tag: string) => Logger
}

export type Printer = Pick<Console, 'log' | 'error' | 'warn'>
/*
En TypeScript, la declaración export type Printer = Pick<Console, 'log' | 'error' | 'warn'> define un nuevo tipo llamado
Printer. Este tipo se crea utilizando la función Pick de TypeScript, que selecciona propiedades específicas de otro tipo.
 En este caso, Printer selecciona las propiedades 'log', 'error' y 'warn' del tipo Console.
Entonces, el tipo Printer representa cualquier objeto que tenga las propiedades 'log', 'error' y 'warn' definidas, como lo haría un objeto de tipo Console. Este tipo podría ser útil para definir interfaces o parámetros de funciones que requieran solo estas propiedades específicas de registro, error y advertencia
*/

/*
Otro uso de Pick
Supongamos que tienes una interfaz que define un objeto con varias propiedades, pero solo estás interesado en un subconjunto específico de esas propiedades.
Puedes utilizar Pick para seleccionar solo esas propiedades y crear una nueva interfaz con ellas.
*/

/*
interface Persona {
  nombre: string;
  edad: number;
  dirección: string;
  teléfono: string;
  correoElectrónico: string;
}

type DatosPersonales = Pick<Persona, 'nombre' | 'edad'>;

// Uso de la nueva interfaz
const datos: DatosPersonales = {
  nombre: 'Juan',
  edad: 30
};
*/

// Caso de uso: const logger =  createLogger('microsite-id-x')
// Caso de extend: logger.extend('una-libreria')
export function createLogger (tag: string, printer: Printer = console): Logger {
  return {
    debug: (...args) => {
      printer.log(tag, ...args)
    },
    error: (...args) => {
      printer.error(tag, ...args)
    },
    warn: (...args) => {
      printer.warn(tag, ...args)
    },
    extend: (childTag) => {
      return createLogger(`${tag}:${childTag}`, printer)
    }
  }
}
