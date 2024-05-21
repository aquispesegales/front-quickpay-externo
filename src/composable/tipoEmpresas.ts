export function useTipoEmpresas() {

  interface TipoEmpresas {
    dominioId: number;
    descripcion: string;
    icono: string
  }

  const lstTipoEmpresas: Array<TipoEmpresas> = ([
    {
      dominioId: 4,
      descripcion: 'UNIVERSIDADES',
      icono: 'universidades.ico'
    },
    {
      dominioId: 84,
      descripcion: 'CLUBES',
      icono: 'clubes.ico'
    }
    ,
    {
      dominioId: 85,
      descripcion: 'EVENTOS',
      icono: 'eventos.ico'
    }
    ,
    {
      dominioId: 86,
      descripcion: 'SEGUROS',
      icono: 'seguros.ico'
    }
    ,
    {
      dominioId: 87,
      descripcion: 'SERVICIOS',
      icono: 'servicios.ico'
    }
    ,
    {
      dominioId: 31,
      descripcion: 'COLEGIOS',
      icono: 'iconos/colegios.ico'
    }
  ]);
  return { lstTipoEmpresas }
}
