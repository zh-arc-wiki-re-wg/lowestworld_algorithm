const getCode = function(y,m,d){
    const pattern = "qwertyuiopasdfghjklzxcvbnm1234567890";
    const raw = "".concat(y, "ori").concat(m, "wol").concat(d, "oihs").concat(d, "otas");
    const initial = hex_md5(raw);
    const result = [];
    initial.split('').forEach(function (val) {
        result.push(pattern[val.charCodeAt() % 36]);
    });
    const res = result.join('');
    return res[1].concat(res[20], res[4], res[30], res[2], res[11], res[23]);
}
const code_from_alg = computed(()=>{
    const d = new Date();
    return getCode(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
})
