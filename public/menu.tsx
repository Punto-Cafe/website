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
            price: "$720",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$420",
        },
            
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$320"
        },
        {
            title: "Café cortado",
            price: "$320"
        },
        {
            title: "Lágrima",
            price: "$320"
        },
        {
            title: "Café con leche",
            price: "$420"
        },
        {
            title: "Café doble",
            price: "$350"
        },
        {
            title: "Café Con dulce de leche",
            price: "$420"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$420"
        }, 
        {
            title: "Submarino",
            price: "$590"
        },
        {
            title: "Capuchino",
            price: "$520"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$520"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$690"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$690"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$690"
        },
        {
            title: "Té",
            price: "$290"
        },
        {
            title: "Té con leche",
            price: "$320"
        },
        {
            title: "Chocolatada",
            price: "$420"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable/manteca y mermelada/dulce de leche",
            price: "$390"
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
            price: "$350"
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
            title: "Tarta bombón",
            description: "Tarta rellena de dulce de leche cubierta con chocolate",
            glutenFree: true,
            price: "$890"
        }, 
        {
            title: "Pastafrola",
            description: "Pastafrola de dulce de membrillo",
            glutenFree: true,
            price: "$790"
        },
    ],
    Sandwiches: [
        {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: "$470"
        },
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$470"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe o Sacramento $520, mini árabe $320"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $520, mini árabe $320"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $540, minu árabe $340"
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe o sacramento $560, mini árabe $360"
        },
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$290",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$390",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero, Fanta",
            price: "$390",
        },
         
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$450",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$490",
        },
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$350"
        },
        {
            title: "Café cortado",
            price: "$390"
        },
        {
            title: "Café con leche",
            price: "$450"
        },
        {
            title: "Lágrima",
            price: "$390"
        },
        {
            title: "Té",
            price: "$350"
        },
        {
            title: "Té con leche",
            price: "$390"
        },
         
       ]
}

export default menu
