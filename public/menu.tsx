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
            price: "$300",
        },
         {
            title: "Promo Infantil 2",
            description: "Juguito Baggio + 2 triangulos de tostado de miga",
            price: "$320",
        },
       {
            title: "Promo Infantil 3",
            description: "Juguito Baggio + 1 mini árabe",
            price: "$390",
        },
        ],
  
    "Promos Desayuno o Merienda": [       
        {
            title: "Promo Medialunas con jamón y Queso",
            description: "Infusión + 2 Medialunas con jamón y queso",
            price: "$620",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$380",
        },
       {
            title: "Promo Tostadas",
            description: "Infusión + 2 tostadas con queso / mermelada o dulce de leche",
            price: "$620",
        },
     
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$260"
        },
        {
            title: "Café doble",
            price: "$300"
        },
        {
            title: "Café cortado",
            price: "$280"
        },
        {
            title: "Café con leche",
            price: "$360"
        },
       {
            title: "Lágrima",
            price: "$300"
        },
        {
            title: "Capuchino",
            price: "$420"
        },
        {
            title: "Latte avellana",
            description: "Cafe con leche y sirope de avellana",
            price: "$450"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$520"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$520"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$520"
        },
        {
            title: "Café Con dulce de leche",
            price: "$360"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$360"
        },
        
        {
            title: "Té",
            price: "$200"
        },
        {
            title: "Té con leche",
            price: "$230"
        },
        {
            title: "Chocolatada",
            price: "$360"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable/manteca y mermelada/dulce de leche",
            price: "$380"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "$120"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$220"
        },
         {
            title: "Alfajor Patagonia",
            description: "Alfajor Patagonia Blanco o Negro",
            price: "$290"
        },
        {
            title: 'Tortas "Consultar" ',
            price: "$790"
        },
        {
            title: "Brownie",
            description: "Torta brownie con nueces",
            price: "$790"
        },
        {
            title: "Brownie con Helado",
            description: "Torta brownie con nueces servido con una bocha de helado de americana y salsa de chocolate",
            price: "$890"
        },
        {
            title: "Medialunas x2",
            description: "Medialuna dulce",
            price: "450",
            glutenFree: true,
        },
                  {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$650",
            glutenFree: true,
        },
        {
            title: "Brownie",
            glutenFree: true,
            price: "$750"
        }, {
            title: "Tarta bombón",
            description: "Tarta rellena de dulce de leche cubierta con chocolate",
            glutenFree: true,
            price: "$750"
        }, {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            glutenFree: true,
            price: "$590"
        },
    ],
    Sandwiches: [
        {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: "$450"
        },
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$450"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe o Sacramento $500, mini árabe $300"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $500, mini árabe $300"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $520, minu árabe $320"
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $540, mini árabe $340"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal o árabe",
            price: "$480",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal",
            price: "$480",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal o árabe",
            price: "$500",
            glutenFree: true,
        },
       
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en pan lactal",
            glutenFree: true,
            price: "$520"
        },
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$220",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$290",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero, Fanta",
            price: "$290",
        },
         
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$400",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$450",
        },
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$280"
        },
        {
            title: "Café cortado",
            price: "$320"
        },
        {
            title: "Café con leche",
            price: "$380"
        },
        {
            title: "Lágrima",
            price: "$320"
        },
        {
            title: "Té",
            price: "$220"
        },
        {
            title: "Té con leche",
            price: "$250"
        },
         
       ]
}

export default menu
