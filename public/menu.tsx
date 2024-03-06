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
 
     
   
   
    cafetería: [
        {
            title: "Café",
            price: "$890"
        },
        {
            title: "Café cortado",
            price: "$890"
        },
        {
            title: "Lágrima",
            price: "$890"
        },
        {
            title: "Café con leche",
            price: "$990"
        },
        {
            title: "Café doble",
            price: "$990"
        },
        {
            title: "Café Con dulce de leche",
            price: "$990"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$990"
        }, 
        {
            title: "Submarino",
            price: "$1090"
        },
        {
            title: "Capuchino",
            price: "$1260"
        },
        
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés y canela",
            price: "$1590"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María y cacao",
            price: "$1760"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú y coco rayado",
            price: "$1760"
        },
        {
            title: "Té",
            price: "$760"
        },
        {
            title: "Té con leche",
            price: "$860"
        },
        {
            title: "Chocolatada",
            price: "$990"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable y mermelada",
            price: "1500"
        },
        {
            title: "Medialuna",
            price: "$450"
        },
          {
            title: "Medialuna con jamon y queso",
            price: "$580"
        },
        {
            title: 'Tortas "Consultar" ',
            description: "pasta frola $890 o ricota $1050"
            
        },
        {
            title: "Brownie",
            description: "Torta brownie con nueces",
            price: "$1600"
        },
        {
            title: "Brownie con Helado",
            description: "Torta brownie con nueces servido con una bocha de helado de americana",
            price: "$1800"
        },
        {
            title: "Tostadas",
            description: "Tostadas de pan con semillas con queso untable y mermelada",
            glutenFree: true,
            price: "$1500"
        },
        {
            title: "Medialunas x2",
            description: "Medialuna dulce",
            price: "1500",
            glutenFree: true,
        },
                  {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$2200",
            glutenFree: true,
        },
     
    ],
    Sandwiches: [
        
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$1890"
        },
        
               {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe $2090, mini árabe $990"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $2090, mini árabe $990"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $2350, mini árabe $1220"
        },
        {
            title: "Sandwich de queso, tomate y aceitunas negras",
            description: "Sandwich de queso, tomate y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $2350 , mini árabe $1220"
        },
       {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal con semillas",
            price: "$2090",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal con semillas",
            price: "$2090",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal con semillas",
            price: "$2350",
            glutenFree: true,
        },
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$790",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$950",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero",
            price: "$950",
        },
         {
             title: "Exprimido",
             price: "$1300",
         },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$1100",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$1300",
        },
         
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$990"
        },
        {
            title: "Café cortado",
            price: "$990"
        },
        {
            title: "Café con leche",
            price: "$990"
        },
        {
            title: "Lágrima",
            price: "$990"
        },        
       ]
}

export default menu
