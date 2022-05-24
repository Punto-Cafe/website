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
            title: "café con leche + alfajor",
            description: "café con leche y alfajor de chocolate clasico, chocolate blanco, fruta o maicena",
            price: "$300",
        },
        {
            title: "Desayuno clásico",
            description: "Infusión + Exprimido chico + 2 medialunas con jamón y queso",
            price: "$600",
        },
    ],
    "Desayunos": [
        {
            title: "Desayuno punto café (para dos)",
            description: "2 Infusiones + 2 exprimidos de naranja chicos + Tostado de miga de jamon y queso + 2 alfajores a elección",
            price: "$1400",
        },
        {
            title: "Desayuno caliente",
            description: "Infusión + Exprimido de naranja chico + Dos tostadas con queso untable y mermelada/dulce de leche",
            price: "$420",
        },
        {
            title: "Desayuno frío",
            description: "Yogur + Granola con mix de cereales + Frutas de estación",
            price: "$380",
        },
    ],
    cafetería: [
        {
            title: "Café",
            price: "$180"
        },
        {
            title: "Café doble",
            price: "$200"
        },
        {
            title: "Café cortado",
            price: "$180"
        },
        {
            title: "Café con leche",
            price: "$220"
        },
        {
            title: "Café con crema",
            price: "$240"
        },
        {
            title: "Lágrima",
            price: "$200"
        },
        {
            title: "Capuchino",
            price: "$270"
        },
        {
            title: "Latte avellana",
            description: "Cafe con leche y sirope de avellana",
            price: "$300"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$300"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$350"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$350"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$350"
        },
        {
            title: "café Con dulce de leche",
            price: "$250"
        },
        {
            title: "café de menta",
            description: "café con leche con menta y chocolate",
            price: "$250"
        },
        {
            title: "Submarino",
            price: "$250"
        },
        {
            title: "Té",
            price: "$140"
        },
        {
            title: "Té con leche",
            price: "$160"
        },
        {
            title: "Chocolatada",
            price: "$250"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan blanco o negro con queso untable y mermelada/dulce de leche",
            price: "$200"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce o salada",
            price: "$70"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$180"
        },
        {
            title: "Alfajor de chocolate",
            description: "Alfajor de chocolate negro, chocolate blanco o relleno de fruta",
            price: "$180"
        },
        {
            title: "Alfajor de maicena",
            price: "$160"
        },
        {
            title: "Lemon pie",
            price: "$400"
        },
        {
            title: "Torta bombón",
            price: "$400"
        },
        {
            title: "Torta de ricota",
            price: "$400"
        },
        {
            title: "Torta de manzana",
            description: "Torta símil crumble con manzana canela y crema",
            price: "$400"
        },
        {
            title: "Brownie",
            description: "Torta brownie con nueces",
            price: "$400"
        },
        {
            title: "Brownie con Helado",
            description: "Torta brownie con nueces servido con una bocha de helado de americana y salsa de chocolate",
            price: "$450"
        },
        {
            title: "Torta de Coco",
            description: "Torta de coco y dulce de leche",
            price: "$400"
        }, {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            price: "$400"
        }, {
            title: "Tostadas",
            description: "Tostadas con queso untable y mermelada/dulce de leche",
            price: "$250",
            glutenFree: true,
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "90",
            glutenFree: true,
        },
        {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$300",
            glutenFree: true,
        },
        {
            title: "Alfajor de chocolate",
            description: "Alfajor de chocolate clasico",
            glutenFree: true,
            price: "$200"
        },
        {
            title: "Alfajor de maicena",
            glutenFree: true,
            price: "$200"
        },
        {
            title: "Brownie",
            glutenFree: true,
            price: "$450"
        }, {
            title: "Torta bombón",
            description: "Torta rellena de dulce de leche cubierta con chocolate",
            glutenFree: true,
            price: "$450"
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
            price: "$400"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan pebete, árabe o sacramento",
            price: "Pebete $370, árabe $410, Sacramento $470"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan pebete, árabe o sacramento",
            price: "Pebete $380, árabe $420, Sacramento $480"
        },
        {
            title: "Sandwich Primavera",
            description: "Sandwich de jamón, queso, tomate y lechuga en pan pebete, árabe o sacramento",
            price: "Pebete $390, árabe $430, Sacramento $490"
        },
        {
            title: "Sandwich de jamón crudo, queso y rúcula",
            description: "Sandwich de jamón crudo, queso y rúcula en pan pebete, árabe o sacramento",
            price: "Pebete $440, árabe $480, Sacramento $540"
        },
        {
            title: "Sandwich de queso, tomate, lechuga y huevo",
            description: "Sandwich de queso, tomate, lechuga y huevo en pan pebete, árabe o sacramento",
            price: "Pebete $370, árabe $410, Sacramento $470"
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan pebete, árabe o sacramento",
            price: "Pebete $380, árabe $420, Sacramento $480"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal o árabe",
            price: "lactal $400, árabe $450",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal",
            price: "lactal $410, árabe $460",
            glutenFree: true,
        },
        {
            title: "Sandwich Primavera",
            description: "Sandwich de jamón, queso, tomate y lechuga en pan lactal",
            price: "lactal $420, árabe $470",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón crudo, queso y rúcula",
            description: "Sandwich de jamón crudo, queso y rúcula en pan lactal o árabe",
            glutenFree: true,
            price: "lactal $470, árabe $520"
        },
        {
            title: "Sandwich de queso, tomate, lechuga y huevo",
            description: "Sandwich de queso, tomate, lechuga y huevo en pan lactal",
            price: "lactal $400, árabe $450",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan lactal",
            glutenFree: true,
            price: "lactal $410, árabe $460"
        },
    ],
    Tartas: [
        {
            title: "Tarta de zapallo y acelga",
            description: "Tarta con base de acelga con cebolla, cubierta con zapallo y muzzarella, en maza integral",
            price: "$450"
        },
        {
            title: "Tarta de zapallito",
            description: "Tarta de zappallito verde con cebolla, morron rojo, huevo y muzzarella, en maza integral",
            price: "$450"
        },
        {
            title: "Tarta de jamón y muzzarella",
            price: "$400"
        },
        {
            title: "Tarta de pollo al verdeo",
            price: "$400"
        },
        {
            title: "Tarta de zapallito",
            price: "$450",
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
            description: "Limonada con menta y jengibre (400cc)",
            price: "$250",
        }, {
            title: "Limonada - Jarra",
            description: "Limonada opcional con menta y jengibre (litro)",
            price: "$500",
        }, {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$300",
        }, {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$350",
        },
        {
            title: "Milkshake",
            description: "Batido de Helado de americana o chocolate y leche (500cc)",
            price: "$380",
        },
        {
            title: "Yogur",
            description: "Vaso de yogur (400cc)",
            price: "$250",
        }
    ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$200"
        },
        {
            title: "Café doble",
            price: "$220"
        },
        {
            title: "Café cortado",
            price: "$200"
        },
        {
            title: "Café con leche",
            price: "$240"
        },
        {
            title: "Lágrima",
            price: "$240"
        },
        {
            title: "Té",
            price: "$180"
        },
        {
            title: "Té con leche",
            price: "$200"
        },
        {
            title: "Promo café con leche + alfajor",
            description: "café con leche y alfajor de chocolate clasico, chocolate blanco, fruta o maicena",
            price: "$340",
        },
    ]
}

export default menu
