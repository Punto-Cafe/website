interface Item {
    title: string;
    description?: string;
    price?: string;
    glutenFree?: boolean;
}

interface Menu {
    [key: string]: Item[];
}

const menu: Menu = {
    "Promos del dia": [       
        {
            title: "Promo medialunas",
            description: "Infusión + 2 Medialunas",
            price: "$420",
        },
        {
            title: "Promo Tostado",
            description: "Bebida (Gaseosa / Agua Saborizada) + Arabe de jamon y queso",
            price: "$620",
        },
          {
            title: "Promo Budín",
            description: "Infusión + porción de Budín (Limón o Naranja)",
            price: "$500",
        },
       ],
    "Desayunos / Meriendas": [
        {
            title: "Desayuno punto café (para dos)",
            description: "2 Infusiones + 2 exprimidos de naranja chicos + Tostado de miga de jamon y queso + 2 alfajores a elección",
            price: "$1670",
        },
         {
            title: "Desayuno clásico",
            description: "Infusión + Exprimido chico + 2 medialunas con jamón y queso",
            price: "$650",
        },
        {
            title: "Desayuno caliente",
            description: "Infusión + Exprimido de naranja chico + Dos tostadas con queso untable y mermelada/dulce de leche",
            price: "$550",
        },
     ],
    cafetería: [
        {
            title: "Café",
            price: "$250"
        },
        {
            title: "Café doble",
            price: "$280"
        },
        {
            title: "Café cortado",
            price: "$250"
        },
        {
            title: "Café con leche",
            price: "$280"
        },
        {
            title: "Café con crema",
            price: "$300"
        },
        {
            title: "Lágrima",
            price: "$250"
        },
        {
            title: "Capuchino",
            price: "$350"
        },
        {
            title: "Latte avellana",
            description: "Cafe con leche y sirope de avellana",
            price: "$380"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$380"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$440"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$440"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$440"
        },
        {
            title: "Café Con dulce de leche",
            price: "$300"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$300"
        },
        {
            title: "Submarino",
            price: "$340"
        },
        {
            title: "Té",
            price: "$190"
        },
        {
            title: "Té con leche",
            price: "$220"
        },
        {
            title: "Chocolatada",
            price: "$340"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable/manteca y mermelada/dulce de leche",
            price: "$330"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "$80"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$220"
        },
        {
            title: "Alfajor",
            description: "Alfajor de chocolate negro, chocolate blanco o relleno de fruta",
            price: "$200"
        },
        {
            title: "Conito",
            description: "Conito relleno de dulce de leche, cubierto con chocolate negro",
            price: "$200"
        },
        {
            title: "Budin",
            description: "Porcion de budin de Limon o Naranja",
            price: "300"
        },
        {
            title:"Crumble de manzana",
            price: "$420"
        },
        {
            title: "Cheesecake",
            price: "$570"
        },
        {
            title: "Chocotorta",
            price: "$570"
        },
         {
            title: "Lemon Pie",
            price: "$500"
        },
        {
            title: "Brownie",
            description: "Torta brownie con nueces",
            price: "$580"
        },
        {
            title: "Brownie con Helado",
            description: "Torta brownie con nueces servido con una bocha de helado de americana y salsa de chocolate",
            price: "$620"
        },
       {
            title: "Tostadas",
            description: "Tostadas con queso untable y mermelada/dulce de leche",
            price: "$350",
            glutenFree: true,
        },
        {
            title: "Medialunas x2",
            description: "Medialuna dulce",
            price: "220",
            glutenFree: true,
        },
           {
            title: "Alfajor de Chocolate",
            description: "Alfajor de Chocolate relleno de dulce de leche",
            price: "250",
            glutenFree: true,
        },
           {
            title: "Alfajor de Maicena",
            description: "Alfajor de Maicena relleno de dulce de leche",
            price: "220",
            glutenFree: true,
        },
        {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$400",
            glutenFree: true,
        },
        {
            title: "Brownie",
            glutenFree: true,
            price: "$580"
        }, {
            title: "Tarta bombón",
            description: "Tarta rellena de dulce de leche cubierta con chocolate",
            glutenFree: true,
            price: "$550"
        }, {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            glutenFree: true,
            price: "$450"
        },
    ],
    Sandwiches: [
        {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: "$420"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan pebete, árabe o sacramento",
            price: "Pebete $400, árabe $440, Sacramento $500"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan pebete, árabe o sacramento",
            price: "Pebete $410, árabe $450, Sacramento $510"
        },
        {
            title: "Sandwich de jamón crudo y queso",
            description: "Sandwich de jamón crudo y queso en pan pebete, árabe o sacramento",
            price: "Pebete $470, árabe $520, Sacramento $570"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan pebete, árabe o sacramento",
            price: "Pebete $400, árabe $440, Sacramento $500"
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan pebete, árabe o sacramento",
            price: "Pebete $450, árabe $500, Sacramento $540"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal o árabe",
            price: "lactal $450, árabe $520",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal",
            price: "lactal $460, árabe $530",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón crudo y queso",
            description: "Sandwich de jamón crudo y queso en pan lactal o árabe",
            glutenFree: true,
            price: "lactal $510, árabe $590"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal",
            price: "lactal $450, árabe $500",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan lactal",
            glutenFree: true,
            price: "lactal $470, árabe $520"
        },
    ],
    Tartas: [
        {
            title: "Tarta de zapallo y acelga",
            description: "Tarta con base de acelga con cebolla, cubierta con zapallo y muzzarella, en maza integral",
            price: "$630"
        },
        {
            title: "Tarta de zapallito",
            description: "Tarta de zapallito verde con cebolla, morron rojo, huevo y muzzarella, en maza integral",
            price: "$630"
        },
        {
            title: "Tarta de capresse",
            description: "Tarta de muzarella, albahaca y tomate cherry",
            price: "$630"
        },
        {
            title: "Tarta de jamón y muzzarella",
            price: "$560"
        },
        {
            title: "Tarta de pollo al verdeo",
            price: "$560"
        },
        {
            title: "Tarta de zapallito",
            price: "$490",
            glutenFree: true,
        },
    ],
    Empanadas: [
        {
            title: "Empanada de pollo",
            price: "$140",
        },
        {
            title: "Empanada de carne",
            price: "$140",
        },
        {
            title: "Empanada de humita",
            price: "$140",
        },
        {
            title: "Empanada de verdura",
            price: "$140",
        },
        {
            title: "Empanadas de jamón y queso",
            description: "Empanadas (pack de 3) de jamón y queso",
            price: "$450",
            glutenFree: true,
        },
        {
            title: "Empanadas de carne",
            description: "Empanadas (pack de 3) de carne",
            price: "$450",
            glutenFree: true,
        },
    ],
    "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$180",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de uva, pomelo, manzana, naranja, pera",
            price: "$200",
        }, {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero, Coca Cola Light, Fanta, Sprite, Sprite Zero, Schweppes pomelo",
            price: "$200",
        }, {
            title: "Exprimido",
            price: "$350",
        },
        {
            title: "Limonada - Vaso",
            description: "Limón y agua (400cc)",
            price: "$250",
        }, 
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$350",
        }, {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$380",
        },
        {
            title: "Milkshake",
            description: "Batido de Helado de americana o chocolate y leche (500cc)",
            price: "$420",
        },
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$300"
        },
        {
            title: "Café doble",
            price: "$300"
        },
        {
            title: "Café cortado",
            price: "$300"
        },
        {
            title: "Café con leche",
            price: "$300"
        },
        {
            title: "Lágrima",
            price: "$300"
        },
        {
            title: "Té",
            price: "$250"
        },
        {
            title: "Té con leche",
            price: "$280"
        },
         {
            title: "Promo medialunas",
            description: "Infusión + 2 Medialunas",
            price: "$450",
        },
       ]
}

export default menu
