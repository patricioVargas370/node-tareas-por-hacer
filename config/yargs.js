const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'


}

const completado = {

    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'


}






const argv = require('yargs')
    .command('crear', 'crea un archivo con las crea un elemento por hacer pedidas', { descripcion })
    .command('actualizar', 'actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'elimina la tarea de la db', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}