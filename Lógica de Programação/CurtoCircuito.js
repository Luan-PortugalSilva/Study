/*
&& -> false && true -> false 
|| ->

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// console.log('Luan POrtugal' && 0 && 'Ester')

function falaOI () {
    return 'OI'
}

let vaiExecutar = 'Joãozinho'

console.log(vaiExecutar && falaOI())

console.log(0 || false || null || 'Luan Portugal' || true)


const corUsuario = null
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)