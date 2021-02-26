let url = 'http:/loggerjs.io/log';

// HTTP REQUEST
function log(msg){
    // SIMULER UNE REQUETE GET
    console.log(msg);
}

// CREATE DATA
const postMethod = 'http://loggerjs.io/post'

// READ DATA
const getMethod = 'http://loggerjs.io/get'

// UPDATE DATA
const putMethod = 'http://loggerjs.io/put'
const patchMethod = 'http://loggerjs.io/patch'

// DELETE DATA
const deleteMethod = 'http://loggerjs.io/delete'

module.exports.log = log;