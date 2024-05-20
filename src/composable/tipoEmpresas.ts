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
      icono: '/assets/universidades.svg'
    },
    {
      dominioId: 84,
      descripcion: 'CLUBES',
      icono: '/src/assets/clubes.svg'
    }
    ,
    {
      dominioId: 85,
      descripcion: 'EVENTOS',
      icono: '/assets/eventos.svg'
    }
    ,
    {
      dominioId: 86,
      descripcion: 'SEGUROS',
      icono: '/assets/seguros.svg'
    }
    ,
    {
      dominioId: 87,
      descripcion: 'SERVICIOS',
      icono: '/assets/servicios.svg'
    }
    ,
    {
      dominioId: 31,
      descripcion: 'COLEGIOS',
      icono: '/assets/colegios.svg'
    }
  ]);
  return { lstTipoEmpresas }
}
