function oddishOrEvenish(girilenSayi) {
    let sayi = girilenSayi.toString();
    let sayiDegeri = 0;
    for (let i=0; i<sayi.length; i++){
        sayiDegeri += parseInt(sayi[i]);
    }
    return ( sayiDegeri%2 ? console.log('Odd') : console.log('Even'));
};
oddishOrEvenish(43)
oddishOrEvenish(373)
oddishOrEvenish(4433)
oddishOrEvenish(555)


