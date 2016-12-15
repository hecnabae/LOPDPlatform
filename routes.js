var Empresa = require('./controller/empresa'),
    Fichero = require('./controller/fichero'),
    Local = require('./controller/local'),
    Almacen = require('./controller/almacen'),
    Equipo = require('./controller/equipo'),
    Aplicacion = require('./controller/aplicacion'),
    PuestoTrabajo = require('./controller/puestoTrabajo'),
    PersonalAutorizado = require('./controller/personalAutorizado'),
    Partner = require('./controller/partner'),
    Soporte = require('./controller/soporte'),
    EntradaSoporte = require('./controller/entradaSoporte'),
    SalidaSoporte = require('./controller/salidaSoporte'),
    Incidencia = require('./controller/incidencia');

exports.endpoints = [
    //---------------------------->
    // EMPRESA
    //---------------------------->
    {
        method: 'POST',
        path: '/empresa',
        config: Empresa.create
    },

    //---------------------------->
    // FICHERO
    //---------------------------->
    {
        method: 'POST',
        path: '/fichero',
        config: Fichero.create
    },
    {
        method: 'GET',
        path: '/fichero',
        config: Fichero.getAll
    },
    {
        method: 'GET',
        path: '/fichero/{idFichero}',
        config: Fichero.getOne
    },
    {
        method: 'GET',
        path: '/fichero/empresa/{idEmpresa}',
        config: Fichero.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/fichero/{idFichero}',
        config: Fichero.update
    },
    {
        method: 'DELETE',
        path: '/fichero/{idFichero}',
        config: Fichero.remove
    },
    {
        method: 'DELETE',
        path: '/fichero',
        config: Fichero.removeAll
    },

    //---------------------------->
    // LOCAL
    //---------------------------->
    {
        method: 'POST',
        path: '/local',
        config: Local.create
    },
    {
        method: 'GET',
        path: '/local',
        config: Local.getAll
    },
    {
        method: 'GET',
        path: '/local/{idLocal}',
        config: Local.getOne
    },
    {
        method: 'GET',
        path: '/local/empresa/{idEmpresa}',
        config: Local.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/local/{idLocal}',
        config: Local.update
    },
    {
        method: 'DELETE',
        path: '/local',
        config: Local.removeAll
    },
    {
        method: 'DELETE',
        path: '/local/{idLocal}',
        config: Local.remove
    },

    //---------------------------->
    // ALMACEN
    //---------------------------->
    {
        method: 'POST',
        path: '/almacen',
        config: Almacen.create
    },
    {
        method: 'GET',
        path: '/almacen',
        config: Almacen.getAll
    },
    {
        method: 'GET',
        path: '/almacen/{idAlmacen}',
        config: Almacen.getOne
    },
    {
        method: 'GET',
        path: '/almacen/empresa/{idEmpresa}',
        config: Almacen.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/almacen/{idAlmacen}',
        config: Almacen.update
    },
    {
        method: 'DELETE',
        path: '/almacen/{idAlmacen}',
        config: Almacen.remove
    },
    {
        method: 'DELETE',
        path: '/almacen',
        config: Almacen.removeAll
    },

    //---------------------------->
    // EQUIPO
    //---------------------------->
    {
        method: 'POST',
        path: '/equipo',
        config: Equipo.create
    },
    {
        method: 'GET',
        path: '/equipo',
        config: Equipo.getAll
    },
    {
        method: 'GET',
        path: '/equipo/{idEquipo}',
        config: Equipo.getOne
    },
    {
        method: 'GET',
        path: '/equipo/empresa/{idEmpresa}',
        config: Equipo.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/equipo/{idEquipo}',
        config: Equipo.update
    },
    {
        method: 'DELETE',
        path: '/equipo/{idEquipo}',
        config: Equipo.remove
    },
    {
        method: 'DELETE',
        path: '/equipo',
        config: Equipo.removeAll
    },

    //---------------------------->
    // APLICACION
    //---------------------------->
    {
        method: 'POST',
        path: '/aplicacion',
        config: Aplicacion.create
    },
    {
        method: 'GET',
        path: '/aplicacion',
        config: Aplicacion.getAll
    },
    {
        method: 'GET',
        path: '/aplicacion/{idAplicacion}',
        config: Aplicacion.getOne
    },
    {
        method: 'GET',
        path: '/aplicacion/empresa/{idEmpresa}',
        config: Aplicacion.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/aplicacion/{idAplicacion}',
        config: Aplicacion.update
    },
    {
        method: 'DELETE',
        path: '/aplicacion',
        config: Aplicacion.removeAll
    },
    {
        method: 'DELETE',
        path: '/aplicacion/{idAplicacion}',
        config: Aplicacion.remove
    },

    //---------------------------->
    // PUESTO DE TRABAJO
    //---------------------------->
    {
        method: 'GET',
        path: '/puestoTrabajo',
        config: PuestoTrabajo.getAll
    },
    {
        method: 'GET',
        path: '/puestoTrabajo/{idPuestoTrabajo}',
        config: PuestoTrabajo.getOne
    },
    {
        method: 'GET',
        path: '/puestoTrabajo/empresa/{idEmpresa}',
        config: PuestoTrabajo.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/puestoTrabajo/{idPuestoTrabajo}',
        config: PuestoTrabajo.update
    },
    {
        method: 'DELETE',
        path: '/puestoTrabajo',
        config: PuestoTrabajo.removeAll
    },
    {
        method: 'DELETE',
        path: '/puestoTrabajo/{idPuestoTrabajo}',
        config: PuestoTrabajo.remove
    },
    {
        method: 'POST',
        path: '/puestoTrabajo',
        config: PuestoTrabajo.create
    },

    //---------------------------->
    // PERSONAL AUTORIZADO
    //---------------------------->
    {
        method: 'GET',
        path: '/personalAutorizado',
        config: PuestoTrabajo.getAll
    },
    {
        method: 'GET',
        path: '/personalAutorizado/{idPersonalAutorizado}',
        config: PersonalAutorizado.getOne
    },
    {
        method: 'GET',
        path: '/personalAutorizado/empresa/{idEmpresa}',
        config: PersonalAutorizado.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/personalAutorizado/{idPersonalAutorizado}',
        config: PersonalAutorizado.update
    },
    {
        method: 'DELETE',
        path: '/personalAutorizado',
        config: PersonalAutorizado.removeAll
    },
    {
        method: 'DELETE',
        path: '/personalAutorizado/{idPersonalAutorizado}',
        config: PersonalAutorizado.remove
    },

    //---------------------------->
    // PARTNER
    //---------------------------->
    {
        method: 'GET',
        path: '/partner',
        config: Partner.getAll
    },
    {
        method: 'GET',
        path: '/partner/{idPartner}',
        config: Partner.getOne
    },
    {
        method: 'GET',
        path: '/partner/empresa/{idEmpresa}',
        config: Partner.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/partner/{idPartner}',
        config: Partner.update
    },
    {
        method: 'DELETE',
        path: '/partner',
        config: Partner.removeAll
    },
    {
        method: 'DELETE',
        path: '/partner/{idPartner}',
        config: Partner.remove
    },

    //---------------------------->
    // SOPORTE
    //---------------------------->
    {
        method: 'GET',
        path: '/soporte',
        config: Soporte.getAll
    },
    {
        method: 'GET',
        path: '/soporte/{idSoporte}',
        config: Soporte.getOne
    },
    {
        method: 'GET',
        path: '/soporte/empresa/{idEmpresa}',
        config: Soporte.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/soporte/{idSoporte}',
        config: Soporte.update
    },
    {
        method: 'DELETE',
        path: '/soporte',
        config: Soporte.removeAll
    },
    {
        method: 'DELETE',
        path: '/soporte/{idSoporte}',
        config: Soporte.remove
    },

    //---------------------------->
    // INCIDENCIA
    //---------------------------->
    {
        method: 'GET',
        path: '/incidencia',
        config: Incidencia.getAll
    },
    {
        method: 'GET',
        path: '/incidencia/{idIncidencia}',
        config: Incidencia.getOne
    },
    {
        method: 'GET',
        path: '/incidencia/empresa/{idEmpresa}',
        config: Incidencia.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/incidencia/{idIncidencia}',
        config: Incidencia.update
    },
    {
        method: 'DELETE',
        path: '/incidencia',
        config: Incidencia.removeAll
    },
    {
        method: 'DELETE',
        path: '/incidencia/{idIncidencia}',
        config: Incidencia.remove
    },

    //---------------------------->
    // ENTRADA DE SOPORTE
    //---------------------------->
    {
        method: 'GET',
        path: '/entradaSoporte',
        config: EntradaSoporte.getAll
    },
    {
        method: 'GET',
        path: '/entradaSoporte/{idEntradaSoporte}',
        config: EntradaSoporte.getOne
    },
    {
        method: 'GET',
        path: '/entradaSoporte/empresa/{idEmpresa}',
        config: EntradaSoporte.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/entradaSoporte/{idEntradaSoporte}',
        config: EntradaSoporte.update
    },
    {
        method: 'DELETE',
        path: '/entradaSoporte',
        config: EntradaSoporte.removeAll
    },
    {
        method: 'DELETE',
        path: '/entradaSoporte/{idEntradaSoporte}',
        config: EntradaSoporte.remove
    },

    //---------------------------->
    // SALIDA DE SOPORTE
    //---------------------------->
    {
        method: 'GET',
        path: '/salidaSoporte',
        config: SalidaSoporte.getAll
    },
    {
        method: 'GET',
        path: '/salidaSoporte/{idSalidaSoporte}',
        config: SalidaSoporte.getOne
    },
    {
        method: 'GET',
        path: '/salidaSoporte/empresa/{idEmpresa}',
        config: SalidaSoporte.getByEmpresa
    },
    {
        method: 'PUT',
        path: '/salidaSoporte/{idSalidaSoporte}',
        config: SalidaSoporte.update
    },
    {
        method: 'DELETE',
        path: '/salidaSoporte',
        config: SalidaSoporte.removeAll
    },
    {
        method: 'DELETE',
        path: '/salidaSoporte/{idSalidaSoporte}',
        config: SalidaSoporte.remove
    }


]