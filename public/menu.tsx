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
            price: "$490",
        },
         {
            title: "Promo Infantil 2",
            description: "Juguito Baggio + 2 triangulos de tostado de miga",
            price: "$640",
        },
       {
            title: "Promo Infantil 3",
            description: "Juguito Baggio + 1 mini árabe",
            price: "$720",
        },
        ],
    "Promos Desayuno o Merienda": [       
        {
            title: "Promo Medialunas con jamón y Queso",
            description: "Infusión + 2 Medialunas con jamón y queso",
            price: "$990",
        },
         {
            title: "Promo Café con leche",
            description: "Café con leche + 2 Medialunas dulces",
            price: "$890",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$620",
        },
           
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$480"
        },
        {
            title: "Café cortado",
            price: "$480"
        },
        {
            title: "Lágrima",
            price: "$480"
        },
        {
            title: "Café con leche",
            price: "$580"
        },
        {
            title: "Café doble",
            price: "$580"
        },
        {
            title: "Café Con dulce de leche",
            price: "$580"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$580"
        }, 
        {
            title: "Submarino",
            price: "$750"
        },
        {
            title: "Capuchino",
            price: "$750"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$750"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$1050"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$1050"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$1050"
        },
        {
            title: "Té",
            price: "$420"
        },
        {
            title: "Té con leche",
            price: "$450"
        },
        {
            title: "Chocolatada",
            price: "$590"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable y mermelada",
            price: "690"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "$180"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$280"
        },
         
        {
            title: 'Tortas "Consultar" ',
            description: "pasta frola $390, Tarta Coco $490"
            
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
        {
            title: "Tostadas",
            description: "Tostadas de pan con semillas con queso untable y mermelada",
            glutenFree: true,
            price: "$750"
        },
        {
            title: "Medialunas x2",
            description: "Medialuna dulce",
            price: "650",
            glutenFree: true,
        },
                  {
            title: "Mini Sacramento con jamon y queso",
            description: "Sacramentitos con jamon y queso (pack de 2)",
            price: "$1300",
            glutenFree: true,
        },
     
    ],
    Sandwiches: [
        
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$750"
        },
         {
            title: "Tostado de miga",
            description: "Tostado de miga con jamón y queso",
            price: "$750"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe $750 ,  Sacramento $980, mini árabe $490"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $750 , sacramento $980 , mini árabe $490"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $770 ,  sacramento $1000, mini árabe $520"
        },
        {
            title: "Sandwich de queso, tomate y aceitunas negras",
            description: "Sandwich de queso, tomate y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $790 , sacramento $1000 , mini árabe $520"
        },
       {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal con semillas",
            price: "$750",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal con semillas",
            price: "$750",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal con semillas",
            price: "$770",
            glutenFree: true,
        },
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$420",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$520",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero",
            price: "$520",
        },
         {
             title: "Exprimido",
             price: "$820",
         },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$650",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$750",
        },
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$580"
        },
        {
            title: "Café cortado",
            price: "$580"
        },
        {
            title: "Café con leche",
            price: "$580"
        },
        {
            title: "Lágrima",
            price: "$580"
        },
        {
            title: "Té",
            price: "$460"
        },
        {
            title: "Té con leche",
            price: "$480"
        },
         
       ]
}

export default menu
