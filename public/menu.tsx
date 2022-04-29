interface Item {
    title: string;
    description?: string;
    price?: number;
}

interface Menu {
    [key: string]: Item[];
}

const menu: Menu = {
    Cafetería: [
        {
            title: "Café",
            //price: "160"
        },
        {
            title: "Café doble",
        },
        {
            title: "Café cortado",
        },
        {
            title: "Café con leche",
        },
        {
            title: "Café con crema",
        },
        {
            title: "Lagrima",
        },
        {
            title: "Capuchino",
        },
        {
            title: "Café irlandés",
        },
        {
            title: "Café Calypso",
        },
        {
            title: "Cafe Con dulce de leche",
        },
        {
            title: "Cafe de menta",
            description: "Cafe con leche con menta y chocolate",
        },
        {
            title: "Submarino",
        },
        {
            title: "Té",
        },
        {
            title: "Té con leche",
        },
        {
            title: "Chocolatada",
        }
    ],
    Pastelería: [
        {
            title: "Pepinopolia dulce",
            price: 300
        },
        {
            title: "Berenjeniozo dulce",
            description: "Muchas berenjenas con sal dulceMuchas berenjenas con sal dulceMuchas berenjenas con sal dulceMuchas berenjenas con sal dulceMuchas berenjenas con sal dulceMuchas berenjenas con sal dulceMuchas berenjenas con sal dulceMuchas berenjenas con sal dulceMuchas berenjenas con sal dulce",
            price: 400
        },
        {
            title: "Pepinopolia dulce",
        },
        {
            title: "Berenjeniozo dulce",
            description: "Muchas berenjenas con sal dulce",
        },
        {
            title: "Pepinopolia dulce",
        },
        {
            title: "Berenjeniozo dulce",
            description: "Muchas berenjenas con sal dulce",
        },
        {
            title: "Pepinopolia dulce",
        },
        {
            title: "Berenjeniozo dulce",
            description: "Muchas berenjenas con sal dulce",
        },
    ]
}


export default menu
