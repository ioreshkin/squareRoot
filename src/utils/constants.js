





export const ch = {
    code: "ch",
    supLink : "https://docs.google.com/forms/d/e/1FAIpQLSeWLNgltV8mo7ctChxAXnCuefWzH2zBhUtHTsIZI98Vr25DCw/viewform",
    infoDoc : "中文中文",
    infoSup : "Китай support",
    infoAbt : "Китай about",
    infoUpd : "Китай updates"
}




export const sp = {
    code: "sp",
    supLink : "https://docs.google.com/forms/d/e/1FAIpQLSd0jqutFkkp3-GoeImbqqFmttOXMnA3y0N5LEEJJrlCm1Ca_A/viewform",
    infoDoc : "Español Documentation",
    infoSup : "Испания support",
    infoAbt :"Испания about",
    infoUpd : "Испания updates"
}


export const en = {
    code: "en",
    supLink : "https://docs.google.com/forms/d/e/1FAIpQLSdJYGMix3DBwbCi3gw-uhHTUrM0VLeBHuu4G1rB2RXlilJ44Q/viewform",
    infoDoc : "Documentation",
    infoSup : "Support",
    infoAbt : "About",
    infoUpd : "Updates"
}



export const ru = {
    code: "ru",
    supLink : "https://docs.google.com/forms/d/e/1FAIpQLSe9RAxmOHWuvqiK7HqCocQRGDm6s0v_M-6tj3GUqM4nMLz6Zg/viewform",
    infoDoc : "Документация",
    infoSup : "Поддержка",
    infoAbt : "О нас",
    infoUpd : "Обновления"
}


export const getLang = (code) => {
    switch (code) {
        case "ru":
            return ru;
            break;

        case "en":
            return en;
            break; 

        case "sp":
            return sp;
            break; 

        case "ch":
            return ch;
            break;
 
        
        default:
            return ru;
            break;
    }
}