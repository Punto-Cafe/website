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
            price: "$390",
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
            price: "$750",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$440",
        },
            
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$340"
        },
        {
            title: "Café cortado",
            price: "$340"
        },
        {
            title: "Lágrima",
            price: "$340"
        },
        {
            title: "Café con leche",
            price: "$440"
        },
        {
            title: "Café doble",
            price: "$370"
        },
        {
            title: "Café Con dulce de leche",
            price: "$440"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$440"
        }, 
        {
            title: "Submarino",
            price: "$590"
        },
        {
            title: "Capuchino",
            price: "$540"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$540"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$720"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$720"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$720"
        },
        {
            title: "Té",
            price: "$290"
        },
        {
            title: "Té con leche",
            price: "$340"
        },
        {
            title: "Chocolatada",
            price: "$440"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable/manteca y mermelada/dulce de leche",
            price: "$590"
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
            description: "Torta brownie con nueces servido con una bocha de helado de americana",
            price: "$890"
        },
        
    ],
    Sandwiches: [
        {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: "$580"
        },
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$580"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe $590 ,  Sacramento $820, mini árabe $320"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $590 , sacramento $820 , mini árabe $320"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $620 ,  sacramento $840, minu árabe $340"
        },
        {
            title: "Sandwich de queso, tomate, zanahoria y aceitunas negras",
            description: "Sandwich de queso, tomate, zanahoria y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $640 , sacramento $860 , mini árabe $360"
        },
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$320",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$420",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero",
            price: "$420",
        },
         {
             title: "Exprimido",
             price: "$690",
         },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$450",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$550",
        },
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$370"
        },
        {
            title: "Café cortado",
            price: "$420"
        },
        {
            title: "Café con leche",
            price: "$470"
        },
        {
            title: "Lágrima",
            price: "$420"
        },
        {
            title: "Té",
            price: "$370"
        },
        {
            title: "Té con leche",
            price: "$390"
        },
         
       ]
}

export default menu
