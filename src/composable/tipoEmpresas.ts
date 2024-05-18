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
      icono: '/src/assets/iconos/universidades.svg'
    },
    {
      dominioId: 84,
      descripcion: 'CLUBES',
      icono: '/src/assets/iconos/clubes.svg'
    }
    ,
    {
      dominioId: 85,
      descripcion: 'EVENTOS',
      icono: '/src/assets/iconos/eventos.svg'
    }
    ,
    {
      dominioId: 86,
      descripcion: 'SEGUROS',
      icono: '/src/assets/iconos/seguros.svg'
    }
    ,
    {
      dominioId: 87,
      descripcion: 'SERVICIOS',
      icono: '/src/assets/iconos/servicios.svg'
    }
    ,
    {
      dominioId: 31,
      descripcion: 'COLEGIOS',
      icono: '/src/assets/iconos/colegios.svg'
    }
  ]);
  return { lstTipoEmpresas }
}
