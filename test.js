function printUrl(sUrl){
    const oUrl = new URL(sUrl)
    console.log(oUrl)
}
function getMailforEmail(email){
    return `mailto:${email}`
}
const callback = () => {
    console.log('third')
}
//printUrl('http://192.168.1.120:94/a/index.php?step=compatibility')
//console.log(getMailforEmail('software@stvat.com'))
console.log('first')
setTimeout(() => {
    console.log('second')
}, 300);

setTimeout(callback, 200);
console.log('fourth')