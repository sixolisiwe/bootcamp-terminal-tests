module.exports = function(reg, loc){
    return reg.endsWith (loc) || reg.startsWith(loc)
}