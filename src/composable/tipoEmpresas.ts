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
      icono: 'universidades.svg'
    },
    {
      dominioId: 84,
      descripcion: 'CLUBES',
      icono: 'clubes.svg'
    }
    ,
    {
      dominioId: 85,
      descripcion: 'EVENTOS',
      icono: 'eventos.svg'
    }
    ,
    {
      dominioId: 86,
      descripcion: 'SEGUROS',
      icono: 'seguros.svg'
    }
    ,
    {
      dominioId: 87,
      descripcion: 'SERVICIOS',
      icono: 'servicios.svg'
    }
    ,
    {
      dominioId: 31,
      descripcion: 'COLEGIOS',
      icono: 'iconos/colegios.svg'
    }
  ]);
  return { lstTipoEmpresas }
}
