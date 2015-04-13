var APP = APP || {};

//create namespaces
function createNamespaces(namespace) {
    var parent = APP,
        args = namespace.split('.'),
        parts = (args[0] === 'APP') ? args.slice(1) : args;
    for(var i = 0; i < parts.length; i++) {
        if(typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent =  parent[parts[i]];
    }
    return parent;
}

createNamespaces('APP.Effects');
createNamespaces('APP.Forms');

