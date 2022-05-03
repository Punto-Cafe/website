import tartaCoco from '../public/tartaCoco.jpeg'
import {StaticImageData} from "next/image";

interface Item {
    title: string;
    description?: string;
    price?: number;
    glutenFree?: boolean;
    img?: StaticImageData;
}

interface Menu {
    [key: string]: Item[];
}

const menu: Menu = {
    cafetería: [
        {
            title: "Café",
            img: tartaCoco,
            price: 160
        },
        {
            title: "Café doble",
            img: tartaCoco,
            price: 180
        },
        {
            title: "Café cortado",
            img: tartaCoco,
            price: 180
        },
        {
            title: "Café con leche",
            img: tartaCoco,
            price: 200
        },
        {
            title: "Café con crema",
            img: tartaCoco,
            price: 220
        },
        {
            title: "Lágrima",
            img: tartaCoco,
            price: 200
        },
        {
            title: "Capuchino",
            img: tartaCoco,
            price: 250
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema, y canela",
            img: tartaCoco,
            price: 350
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema, y canela",
            img: tartaCoco,
            price: 350
        },
        {
            title: "café Con dulce de leche",
            img: tartaCoco,
            price: 220
        },
        {
            title: "café de menta",
            description: "café con leche con menta y chocolate",
            img: tartaCoco,
            price: 220
        },
        {
            title: "Submarino",
            img: tartaCoco,
            price: 250
        },
        {
            title: "Té",
            img: tartaCoco,
            price: 140
        },
        {
            title: "Té con leche",
            img: tartaCoco,
            price: 160
        },
        {
            title: "Chocolatada",
            img: tartaCoco,
            price: 250
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan blanco o negro con queso untable y mermelada/dulce de leche",
            img: tartaCoco,
            price: 200
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce o salada",
            img: tartaCoco,
            price: 70
        },
        {
            title: "Medialuna con jamón & Queso",
            img: tartaCoco,
            price: 180
        },
        {
            title: "Alfajor de chocolate",
            description: "Alfajor de chocolate negro, chocolate blanco o relleno de fruta",
            img: tartaCoco,
            price: 180
        },
        {
            title: "Alfajor de maicena",
            img: tartaCoco,
            price: 160
        },
        {
            title: "Lemon pie",
            img: tartaCoco,
            price: 350
        }, {
            title: "Torta de manzana",
            description: "Torta de símil crumble con manzana canela y crema",
            img: tartaCoco,
            price: 350
        },
        {
            title: "Torta de Coco",
            description: "Torta de coco y dulce de leche",
            img: tartaCoco,
            price: 350
        }, {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            img: tartaCoco,
            price: 350
        }, {
            title: "Tostadas",
            description: "Tostadas con queso untable y mermelada/dulce de leche",
            img: tartaCoco,
            price: 250,
            glutenFree: true,
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            img: tartaCoco,
            price: 90,
            glutenFree: true,
        },
        {
            title: "Sacramentos con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            img: tartaCoco,
            price: 300,
            glutenFree: true,
        },
        {
            title: "Alfajor de chocolate",
            description: "Alfajor de chocolate clasico",
            glutenFree: true,
            img: tartaCoco,
            price: 200
        },
        {
            title: "Alfajor de maicena",
            glutenFree: true,
            img: tartaCoco,
            price: 200
        },
        {
            title: "Brownie",
            glutenFree: true,
            img: tartaCoco,
            price: 400
        }, {
            title: "Torta bombón",
            description: "Torta rellena de dulce de leche cubierta con chocolate",
            glutenFree: true,
            img: tartaCoco,
            price: 400
        }, {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            glutenFree: true,
            img: tartaCoco,
            price: 400
        },
    ],
    Sandwiches: [
        {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            img: tartaCoco,
            price: 380
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 370
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 380
        },
        {
            title: "Sandwich Primavera",
            description: "Sandwich de jamón, queso, tomate y lechuga en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 390
        },
        {
            title: "Sandwich de jamón crudo, queso y rúcula",
            description: "Sandwich de jamón crudo, queso y rúcula en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 440
        },
        {
            title: "Sandwich de queso, tomate, lechuga y huevo",
            description: "Sandwich de queso, tomate, lechuga y huevo en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 370
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 380
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich Primavera",
            description: "Sandwich de jamón, queso, tomate y lechuga en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich de queso, tomate, lechuga y huevo",
            description: "Sandwich de queso, tomate, lechuga y huevo en pan francés, árabe o sacramento",
            img: tartaCoco,
            price: 400,
            glutenFree: true,
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan francés, árabe o sacramento",
            glutenFree: true,
            img: tartaCoco,
            price: 400
        },
    ],
    Tartas: [
        {
            title: "Tarta de zapallo y acelga",
            description: "Tarta con base de acelga con cebolla, cubierta con zapallo y muzzarella, en maza integral",
            img: tartaCoco,
            price: 450
        },
        {
            title: "Tarta de zapallito",
            description: "Tarta de zappallito verde con cebolla, morron rojo, huevo y muzzarella, en maza integral",
            img: tartaCoco,
            price: 450
        },
        {
            title: "Tarta de jamón y muzzarella",
            img: tartaCoco,
            price: 400
        },
        {
            title: "Tarta de pollo al verdeo",
            img: tartaCoco,
            price: 400
        },
        {
            title: "Tarta de zapallito",
            img: tartaCoco,
            price: 450,
            glutenFree: true,
        },
    ],
    Empanadas: [
        {
            title: "Empanada de pollo",
            img: tartaCoco,
            price: 140,
        },
        {
            title: "Empanada de carne",
            img: tartaCoco,
            price: 140,
        },
        {
            title: "Empanada de humita",
            img: tartaCoco,
            price: 140,
        },
        {
            title: "Empanada de verdura",
            img: tartaCoco,
            price: 140,
        },
        {
            title: "Empanadas de jamón y queso",
            description: "Empanadas (pack de 3) de jamón y queso",
            img: tartaCoco,
            price: 450,
            glutenFree: true,
        },
        {
            title: "Empanadas de carne",
            description: "Empanadas (pack de 3) de carne",
            img: tartaCoco,
            price: 450,
            glutenFree: true,
        },
    ],
    "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            img: tartaCoco,
            price: 180,
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de uva, pomelo, manzana, naranja, pera",
            img: tartaCoco,
            price: 200,
        }, {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero, Coca Cola Light, Fanta, Sprite, Sprite Zero, Schweppes pomelo",
            img: tartaCoco,
            price: 200,
        }, {
            title: "Exprimido",
            img: tartaCoco,
            price: 350,
        },
        {
            title: "Limonada - Vaso",
            description: "Limonada con menta y jengibre (400cc)",
            img: tartaCoco,
            price: 250,
        }, {
            title: "Limonada - Jarra",
            description: "Limonada opcional con menta y jengibre (litro)",
            img: tartaCoco,
            price: 500,
        }, {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            img: tartaCoco,
            price: 300,
        }, {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            img: tartaCoco,
            price: 350,
        },
        {
            title: "Milkshake",
            description: "Batido de Helado de americana o chocolate y leche (500cc)",
            img: tartaCoco,
            price: 380,
        },
        {
            title: "Yogur",
            description: "Vaso de yogur (400cc)",
            img: tartaCoco,
            price: 250,
        }
    ],
    Promos: [
        {
            title: "café con leche + alfajor",
            description: "café con leche y alfajor de chocolate clasico, chocolate blanco, fruta o maicena",
            img: tartaCoco,
            price: 300,
        },
        {
            title: "café con leche + 2 medialunas",
            img: tartaCoco,
            price: 310,
        },
        {
            title: "café con leche + tostadas",
            description: "café con leche y tostadas con queso untable y mermelada",
            img: tartaCoco,
            price: 370,
        },
        {
            title: "café con leche + tostado",
            description: "café con leche y tostado de miga con jamón y queso",
            img: tartaCoco,
            price: 550,
        },
        {
            title: "Tarta + bebida",
            description: "Tarta de pollo al verdeo o jamón y muzzarella con agua, gaseosa o agua saborizada",
            img: tartaCoco,
            price: 550,
        },
        {
            title: "Tarta integral + bebida",
            description: "Tarta de zapallo y acelga o zapallito con agua, gaseosa o agua saborizada",
            img: tartaCoco,
            price: 600,
        },
    ]
}

export default menu
