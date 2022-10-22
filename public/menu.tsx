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
    "Promos Infantiles": [       
        {
            title: "Promo Infantil 1",
            description: "Juguito Baggio + 1 Medialunas con jamon y queso",
            price: "$250",
        },
         {
            title: "Promo Infantil 2",
            description: "Juguito Baggio + 2 triangulos de tostado de miga",
            price: "$250",
        },
       {
            title: "Promo Infantil 3",
            description: "Juguito Baggio + 1 mini árabe",
            price: "$250",
        },
        ],
  
    "Promos Desayuno o Merienda": [       
        {
            title: "Promo Solo Desayuno",
            description: "Infusión + 2 Medialunas con jamón y queso",
            price: "$350",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$290",
        },
       {
            title: "Promo Tostadas",
            description: "Infusión + 2 tostadas con queso / mermelada o dulce de leche",
            price: "$350",
        },
         {
            title: "Promo Tostado",
            description: "1 infunsión + 1 tostado de miga",
            price: "$350",
        },
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$190"
        },
        {
            title: "Café doble",
            price: "$250"
        },
        {
            title: "Café cortado",
            price: "$220"
        },
        {
            title: "Café con leche",
            price: "$300"
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
            price: "$400"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$400"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$460"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$460"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$460"
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
            price: "$300"
        },
        {
            title: "Té",
            price: "$150"
        },
        {
            title: "Té con leche",
            price: "$180"
        },
        {
            title: "Chocolatada",
            price: "$300"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable/manteca y mermelada/dulce de leche",
            price: "$290"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "$90"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$150"
        },
        {
            title: "Alfajor",
            description: "Alfajor de chocolate negro, chocolate blanco o relleno de fruta",
            price: "$200"
        },
        {
            title: "Budin",
            description: "Porcion de budin de Limon o Naranja",
            price: "260"
        },
        {
            title: "Tarta Bombón con Nutella",
            price: "$190"
        },
        {
            title: "Tarta de Frutilla",
            price: "$390"
        },
        {
            title: "Torta Balcarce",
            price: "$390"
        },
        {
            title: "Chocotorta",
            price: "$490"
        },
        {
            title: "Brownie",
            description: "Torta brownie con nueces",
            price: "$490"
        },
        {
            title: "Brownie con Helado",
            description: "Torta brownie con nueces servido con una bocha de helado de americana y salsa de chocolate",
            price: "$590"
        },
       {
            title: "Tostadas",
            description: "Tostadas con queso untable y mermelada/dulce de leche",
            price: "$280",
            glutenFree: true,
        },
        {
            title: "Medialunas x2",
            description: "Medialuna dulce",
            price: "250",
            glutenFree: true,
        },
                  {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$450",
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
            price: "$290"
        },
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$290"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe o Sacramento $390, mini árabe $200"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $420, minu árabe $220"
        },
        {
            title: "Sandwich de jamón crudo y queso",
            description: "Sandwich de jamón crudo y queso en árabe sacramento o mini árabe",
            price: "árabe o sacramento $450, mini árabe $230"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $390, mini árabe $220"
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $450, mini árabe $230"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal o árabe",
            price: "$390",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal o árabe",
            price: "$420",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón crudo y queso",
            description: "Sandwich de jamón crudo y queso en pan lactal o árabe",
            glutenFree: true,
            price: "$450"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal",
            price: "$390",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan lactal",
            glutenFree: true,
            price: "$450"
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
            description: "Tarta de zapallito verde con cebolla, morron rojo, huevo y muzzarella, en maza integral",
            price: "$450"
        },
        {
            title: "Tarta de capresse",
            description: "Tarta de muzarella, albahaca y tomate cherry",
            price: "$450"
        },
                {
            title: "Tarta de pollo al verdeo",
            price: "$450"
        },
        
    ],
    Empanadas: [
        
        {
            title: "Empanada de carne",
            price: "$180",
        },
        {
            title: "Empanada de espinaca",
            description: "Masa de remolacha con relleno de espinaca con cebolla, zanahoria y muzzarella", 
            price: "$180",
        },
        {
            title: "Empanada de berenjena",
            description: "Masa de espinaca con relleno de berenjena con ajo, cebolla y muzzarella",
            price: "$180",
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
            price: "$250",
        }, {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero, Coca Cola Light, Fanta, Sprite, Sprite Zero, Schweppes pomelo",
            price: "$250",
        }, {
            title: "Exprimido",
            price: "$350",
        },
        {
            title: "Limonada - Vaso",
            description: "Limón y agua (400cc)",
            price: "$150",
        }, 
        {
            title: "Limonada - Jarra",
            description: "Limón y agua (litro)",
            price: "$550",
        },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$380",
        }, {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$430",
        },
        {
            title: "Milkshake",
            description: "Batido de Helado de americana o chocolate y leche (500cc)",
            price: "$480",
        },
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$220"
        },
        {
            title: "Café cortado",
            price: "$250"
        },
        {
            title: "Café con leche",
            price: "$330"
        },
        {
            title: "Lágrima",
            price: "$280"
        },
        {
            title: "Té",
            price: "$180"
        },
        {
            title: "Té con leche",
            price: "$210"
        },
         
       ]
}

export default menu
