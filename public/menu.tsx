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
            price: "$790",
        },
         
       {
            title: "Promo Infantil 2",
            description: "Juguito Baggio + 1 mini árabe",
            price: "$1120",
        },
        ],
    "Promos Desayuno o Merienda": [       
        
         {
            title: "Promo Café con leche",
            description: "Café con leche + 2 Medialunas dulces",
            price: "$1280",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$890",
        },
         
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$620"
        },
        {
            title: "Café cortado",
            price: "$620"
        },
        {
            title: "Lágrima",
            price: "$620"
        },
        {
            title: "Café con leche",
            price: "$690"
        },
        {
            title: "Café doble",
            price: "$720"
        },
        {
            title: "Café Con dulce de leche",
            price: "$720"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$720"
        }, 
        {
            title: "Submarino",
            price: "$890"
        },
        {
            title: "Capuchino",
            price: "$890"
        },
        
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés y canela",
            price: "$1190"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María y cacao",
            price: "$1190"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú y coco rayado",
            price: "$1190"
        },
        {
            title: "Té",
            price: "$490"
        },
        {
            title: "Té con leche",
            price: "$590"
        },
        {
            title: "Chocolatada",
            price: "$720"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable y mermelada",
            price: "990"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "$290"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$420"
        },
         
        {
            title: 'Tortas "Consultar" ',
            description: "pasta frola o ricota $690, Tarta Coco $790"
            
        },
        {
            title: "Brownie",
            description: "Torta brownie con nueces",
            price: "$1300"
        },
        {
            title: "Brownie con Helado",
            description: "Torta brownie con nueces servido con una bocha de helado de americana",
            price: "$1500"
        },
        {
            title: "Tostadas",
            description: "Tostadas de pan con semillas con queso untable y mermelada",
            glutenFree: true,
            price: "$890"
        },
        {
            title: "Medialunas x2",
            description: "Medialuna dulce",
            price: "890",
            glutenFree: true,
        },
                  {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$1700",
            glutenFree: true,
        },
     
    ],
    Sandwiches: [
        
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$1090"
        },
         {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: "$1090"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe $1290, mini árabe $690"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $1290, mini árabe $690"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $1350, mini árabe $720"
        },
        {
            title: "Sandwich de queso, tomate y aceitunas negras",
            description: "Sandwich de queso, tomate y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $1350 , mini árabe $720"
        },
       {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal con semillas",
            price: "$1090",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal con semillas",
            price: "$1090",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal con semillas",
            price: "$1240",
            glutenFree: true,
        },
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$600",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$700",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero",
            price: "$700",
        },
         {
             title: "Exprimido",
             price: "$890",
         },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$790",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$890",
        },
         
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$720"
        },
        {
            title: "Café cortado",
            price: "$720"
        },
        {
            title: "Café con leche",
            price: "$720"
        },
        {
            title: "Lágrima",
            price: "$720"
        },        
       ]
}

export default menu
