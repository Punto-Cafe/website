interface Item {
    title: string;
    description?: string;
    price?: number;
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
            price: 300,
        },
    ],
    cafetería: [
        {
            title: "Café",
            price: 160
        },
        {
            title: "Café doble",
            price: 180
        },
        {
            title: "Café cortado",
            price: 160
        },
        {
            title: "Café con leche",
            price: 200
        },
        {
            title: "Café con crema",
            price: 220
        },
        {
            title: "Lágrima",
            price: 200
        },
        {
            title: "Capuchino",
            price: 250
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema, y canela",
            price: 350
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema, y canela",
            price: 350
        },
        {
            title: "café Con dulce de leche",
            price: 220
        },
        {
            title: "café de menta",
            description: "café con leche con menta y chocolate",
            price: 220
        },
        {
            title: "Submarino",
            price: 250
        },
        {
            title: "Té",
            price: 140
        },
        {
            title: "Té con leche",
            price: 160
        },
        {
            title: "Chocolatada",
            price: 250
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan blanco o negro con queso untable y mermelada/dulce de leche",
            price: 200
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce o salada",
            price: 70
        },
        {
            title: "Medialuna con jamón & Queso",
            price: 180
        },
        {
            title: "Alfajor de chocolate",
            description: "Alfajor de chocolate negro, chocolate blanco o relleno de fruta",
            price: 180
        },
        {
            title: "Alfajor de maicena",
            price: 160
        },
        {
            title: "Lemon pie",
            price: 350
        }, {
            title: "Torta de manzana",
            description: "Torta de símil crumble con manzana canela y crema",
            price: 350
        },
        {
            title: "Torta de Coco",
            description: "Torta de coco y dulce de leche",
            price: 350
        }, {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            price: 350
        }, {
            title: "Tostadas",
            description: "Tostadas con queso untable y mermelada/dulce de leche",
            price: 250,
            glutenFree: true,
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: 90,
            glutenFree: true,
        },
        {
            title: "Sacramentos con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: 300,
            glutenFree: true,
        },
        {
            title: "Alfajor de chocolate",
            description: "Alfajor de chocolate clasico",
            glutenFree: true,
            price: 200
        },
        {
            title: "Alfajor de maicena",
            glutenFree: true,
            price: 200
        },
        {
            title: "Brownie",
            glutenFree: true,
            price: 400
        }, {
            title: "Torta bombón",
            description: "Torta rellena de dulce de leche cubierta con chocolate",
            glutenFree: true,
            price: 400
        }, {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            glutenFree: true,
            price: 400
        },
    ],
    Sandwiches: [
        {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: 380
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan francés, árabe o sacramento",
            price: 370
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan francés, árabe o sacramento",
            price: 380
        },
        {
            title: "Sandwich Primavera",
            description: "Sandwich de jamón, queso, tomate y lechuga en pan francés, árabe o sacramento",
            price: 390
        },
        {
            title: "Sandwich de jamón crudo, queso y rúcula",
            description: "Sandwich de jamón crudo, queso y rúcula en pan francés, árabe o sacramento",
            price: 440
        },
        {
            title: "Sandwich de queso, tomate, lechuga y huevo",
            description: "Sandwich de queso, tomate, lechuga y huevo en pan francés, árabe o sacramento",
            price: 370
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan francés, árabe o sacramento",
            price: 380
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan francés, árabe o sacramento",
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan francés, árabe o sacramento",
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich Primavera",
            description: "Sandwich de jamón, queso, tomate y lechuga en pan francés, árabe o sacramento",
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich de queso, tomate, lechuga y huevo",
            description: "Sandwich de queso, tomate, lechuga y huevo en pan francés, árabe o sacramento",
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan francés, árabe o sacramento",
            glutenFree: true,
            price: 400
        },
    ],
    Tartas: [
        {
            title: "Tarta de zapallo y acelga",
            description: "Tarta con base de acelga con cebolla, cubierta con zapallo y muzzarella, en maza integral",
            price: 450
        },
        {
            title: "Tarta de zapallito",
            description: "Tarta de zappallito verde con cebolla, morron rojo, huevo y muzzarella, en maza integral",
            price: 450
        },
        {
            title: "Tarta de jamón y muzzarella",
            price: 400
        },
        {
            title: "Tarta de pollo al verdeo",
            price: 400
        },
        {
            title: "Tarta de zapallito",
            price: 450,
            glutenFree: true,
        },
    ],
    Empanadas: [
        {
            title: "Empanada de pollo",
            price: 140,
        },
        {
            title: "Empanada de carne",
            price: 140,
        },
        {
            title: "Empanada de humita",
            price: 140,
        },
        {
            title: "Empanada de verdura",
            price: 140,
        },
        {
            title: "Empanadas de jamón y queso",
            description: "Empanadas (pack de 3) de jamón y queso",
            price: 450,
            glutenFree: true,
        },
        {
            title: "Empanadas de carne",
            description: "Empanadas (pack de 3) de carne",
            price: 450,
            glutenFree: true,
        },
    ],
    "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: 180,
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de uva, pomelo, manzana, naranja, pera",
            price: 200,
        }, {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero, Coca Cola Light, Fanta, Sprite, Sprite Zero, Schweppes pomelo",
            price: 200,
        }, {
            title: "Exprimido",
            price: 350,
        },
        {
            title: "Limonada - Vaso",
            description: "Limonada con menta y jengibre (400cc)",
            price: 250,
        }, {
            title: "Limonada - Jarra",
            description: "Limonada opcional con menta y jengibre (litro)",
            price: 500,
        }, {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: 300,
        }, {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: 350,
        },
        {
            title: "Milkshake",
            description: "Batido de Helado de americana o chocolate y leche (500cc)",
            price: 380,
        },
        {
            title: "Yogur",
            description: "Vaso de yogur (400cc)",
            price: 250,
        }
    ],
    "Bebidas Para Llevar": [
        {
            title: "Café",
            price: 200
        },
        {
            title: "Café doble",
            price: 220
        },
        {
            title: "Café cortado",
            price: 200
        },
        {
            title: "Café con leche",
            price: 240
        },
        {
            title: "Lágrima",
            price: 240
        },
        {
            title: "Té",
            price: 180
        },
        {
            title: "Té con leche",
            price: 200
        },
        {
            title: "Promo café con leche + alfajor",
            description: "café con leche y alfajor de chocolate clasico, chocolate blanco, fruta o maicena",
            price: 340,
        },
    ]
}

export default menu
