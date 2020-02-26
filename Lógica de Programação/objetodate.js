/*const data = new Date(2019, 3, 20, 15, 14, 27) // a, m, d, h, M, s, ms
console.log(data.toString())
const data = new Date('2019-04-20 20:20:59')
console.log(data.toString())

console.log('Dia',data.getDate())
console.log('Mês',data.getMonth()) // Mês começa do zero
console.log('Ano',data.getFullYear())
console.log('Hora',data.getHours())
console.log('Min',data.getMinutes())
console.log('Seg',data.getSeconds())
console.log('msg',data.getMilliseconds())
console.log('Dia semana',data.getDay()) // 0- Domingo, 6 - Sábado

console.log(Date.now())*/
const data = new Date()
const dataBrasil = formataData(data)

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1) 
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

console.log(dataBrasil)
