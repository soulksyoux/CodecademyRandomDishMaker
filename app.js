const proteina = [
    {
        nome: "bife de peru",
        tipo: "carne"
    },
    {
        nome: "panado de frango",
        tipo: "carne"
    },
    {
        nome: "atum",
        tipo: "peixe"
    },
    {
        nome: "filetes de pescada",
        tipo: "peixe"
    },
    {
        nome: "bolinhos de bacalhau",
        tipo: "peixe"
    },
    {
        nome: "cogumelos",
        tipo: "vegan"
    },
    {
        nome: "lentilhas",
        tipo: "vegan"
    },
    {
        nome: "cabrito",
        tipo: "carne"
    },
    {
        nome: "sardinhas",
        tipo: "peixe"
    },
    {
        nome: "salmão",
        tipo: "peixe"
    },
    {
        nome: "febra de porco",
        tipo: "carne"
    },
    {
        nome: "alheira",
        tipo: "carne"
    },
    {
        nome: "coxinhas de frango",
        tipo: "carne"
    },
    {
        nome: "robalo",
        tipo: "carne"
    }
];

const modo = [
    "frito",
    "assado",
    "grelhado",
    "estufado",
    "cozido"
];

const acompanhamento = [
    "batatas",
    "arroz",
    "massa",
    "pure",
    "feijão",
    "legumes",
    "castanhas"
];


const gerarProteina = () => {
    const tipoProteina = [];
    tipoProteina[0] = "carne";
    tipoProteina[1] = "peixe";
    tipoProteina[2] = "vegan";
    const num = Math.floor(Math.random() * 3);
    const tipo = tipoProteina[num];

    const arrProt = [];
    for(let i = 0; i < proteina.length; i++) {
        if(proteina[i].tipo === tipo) {
            arrProt.push(proteina[i].nome);
        }
    }

    return arrProt;
}

const gerarModo = () => {
    const num = Math.floor(Math.random() * modo.length);
    return modo[num];
}

const gerarAcompanhamento = () => {
    const num = Math.floor(Math.random() * acompanhamento.length);
    return acompanhamento[num];
}


const gerarPrato = () => {
    const prato = [];
    let proteina = gerarProteina();
    const num = Math.floor(Math.random() * proteina.length);
    proteina = proteina[num];
    prato.push(proteina);
    const modoProt = gerarModo();
    prato.push(modoProt);
    prato.push(" com ");

    const randNumAcomp = Math.floor(Math.random() * 2);
    const acompanhamento1 = gerarAcompanhamento();
    prato.push(acompanhamento1);
    if(randNumAcomp === 1) {
        let acompanhamento2 = gerarAcompanhamento();
        while(acompanhamento1 === acompanhamento2) {
            acompanhamento2 = gerarAcompanhamento();
        }
        prato.push(" e ");
        prato.push(acompanhamento2);
    }

    return prato;
}

const apresentarPrato = () => {
    const newPrato = gerarPrato();
    const strPrato = newPrato.join(" ");
    const message = document.getElementById("message");
    message.innerHTML= strPrato;
}

const randomPrato = () => {
    apresentarPrato();
}

apresentarPrato();






