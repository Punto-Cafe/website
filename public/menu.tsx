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
            price: "$590",
        },
         
       {
            title: "Promo Infantil 2",
            description: "Juguito Baggio + 1 mini árabe",
            price: "$870",
        },
        ],
    "Promos Desayuno o Merienda": [       
        
         {
            title: "Promo Café con leche",
            description: "Café con leche + 2 Medialunas dulces",
            price: "$1090",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$820",
        },
         
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$590"
        },
        {
            title: "Café cortado",
            price: "$590"
        },
        {
            title: "Lágrima",
            price: "$590"
        },
        {
            title: "Café con leche",
            price: "$690"
        },
        {
            title: "Café doble",
            price: "$690"
        },
        {
            title: "Café Con dulce de leche",
            price: "$690"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$690"
        }, 
        {
            title: "Submarino",
            price: "$860"
        },
        {
            title: "Capuchino",
            price: "$860"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$860"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés y canela",
            price: "$1160"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María y cacao",
            price: "$1160"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú y coco rayado",
            price: "$1160"
        },
        {
            title: "Té",
            price: "$490"
        },
        {
            title: "Té con leche",
            price: "$560"
        },
        {
            title: "Chocolatada",
            price: "$690"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable y mermelada",
            price: "890"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "$250"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$370"
        },
         
        {
            title: 'Tortas "Consultar" ',
            description: "pasta frola o ricota $670, Tarta Coco $750"
            
        },
        {
            title: "Brownie",
            description: "Torta brownie con nueces",
            price: "$1100"
        },
        {
            title: "Brownie con Helado",
            description: "Torta brownie con nueces servido con una bocha de helado de americana",
            price: "$1300"
        },
        {
            title: "Tostadas",
            description: "Tostadas de pan con semillas con queso untable y mermelada",
            glutenFree: true,
            price: "$850"
        },
        {
            title: "Medialunas x2",
            description: "Medialuna dulce",
            price: "850",
            glutenFree: true,
        },
                  {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$1500",
            glutenFree: true,
        },
     
    ],
    Sandwiches: [
        
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$990"
        },
         {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: "$990"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe $1190, mini árabe $640"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $1190, mini árabe $640"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $1250, mini árabe $680"
        },
        {
            title: "Sandwich de queso, tomate y aceitunas negras",
            description: "Sandwich de queso, tomate y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $1250 , mini árabe $680"
        },
       {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal con semillas",
            price: "$990",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal con semillas",
            price: "$990",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal con semillas",
            price: "$1140",
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
            price: "$690",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$790",
        },
         
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$690"
        },
        {
            title: "Café cortado",
            price: "$690"
        },
        {
            title: "Café con leche",
            price: "$690"
        },
        {
            title: "Lágrima",
            price: "$690"
        },        
       ]
}

export default menu
