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
            price: "$390",
        },
         {
            title: "Promo Infantil 2",
            description: "Juguito Baggio + 2 triangulos de tostado de miga",
            price: "$460",
        },
       {
            title: "Promo Infantil 3",
            description: "Juguito Baggio + 1 mini árabe",
            price: "$590",
        },
        ],
    "Promos Desayuno o Merienda": [       
        {
            title: "Promo Medialunas con jamón y Queso",
            description: "Infusión + 2 Medialunas con jamón y queso",
            price: "$820",
        },
         {
            title: "Promo Café con leche",
            description: "Café con leche + 2 Medialunas dulces",
            price: "$760",
        },
         {
            title: "Promo Cafe",
            description: "1 Café jarrito + 1 medialuna",
            price: "$520",
        },
            
       ],
   
    cafetería: [
        {
            title: "Café",
            price: "$390"
        },
        {
            title: "Café cortado",
            price: "$390"
        },
        {
            title: "Lágrima",
            price: "$390"
        },
        {
            title: "Café con leche",
            price: "$490"
        },
        {
            title: "Café doble",
            price: "$490"
        },
        {
            title: "Café Con dulce de leche",
            price: "$490"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$490"
        }, 
        {
            title: "Submarino",
            price: "$650"
        },
        {
            title: "Capuchino",
            price: "$630"
        },
        {
            title: "Latte caramelo",
            description: "Cafe con leche y sirope de caramelo",
            price: "$630"
        },
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés, crema y canela",
            price: "$890"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María, crema y cacao",
            price: "$890"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú, crema y coco rayado",
            price: "$890"
        },
        {
            title: "Té",
            price: "$350"
        },
        {
            title: "Té con leche",
            price: "$390"
        },
        {
            title: "Chocolatada",
            price: "$490"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable y mermelada",
            price: "$590"
        },
        {
            title: "Medialuna",
            description: "Medialuna dulce",
            price: "$150"
        },
        {
            title: "Medialuna con jamón & Queso",
            price: "$240"
        },
         {
            title: "Alfajor Patagonia",
            description: "Alfajor Patagonia Blanco o Negro",
            price: "$350"
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
            price: "$590"
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
            price: "$790",
            glutenFree: true,
        },
        {
            title: "Brownie",
            glutenFree: true,
            price: "$1090"
        }, 
        {
            title: "Tarta bombón",
            description: "Tarta rellena de dulce de leche cubierta con chocolate",
            glutenFree: true,
            price: "$1090"
        }, 
        
    ],
    Sandwiches: [
        
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$720"
        },
        {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe $720 ,  Sacramento $980, mini árabe $450"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $720 , sacramento $980 , mini árabe $450"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $740 ,  sacramento $1000, mini árabe $470"
        },
        {
            title: "Sandwich de queso, tomate y aceitunas negras",
            description: "Sandwich de queso, tomate y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $740 , sacramento $1000 , mini árabe $490"
        },
       {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal con semillas",
            price: "$720",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal con semillas",
            price: "$720",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal con semillas",
            price: "$740",
            glutenFree: true,
        },
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$340",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$450",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero",
            price: "$450",
        },
         {
             title: "Exprimido",
             price: "$790",
         },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$520",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$620",
        },
        
  ],
    "Cafetería Para Llevar": [
        {
            title: "Café",
            price: "$430"
        },
        {
            title: "Café cortado",
            price: "$450"
        },
        {
            title: "Café con leche",
            price: "$480"
        },
        {
            title: "Lágrima",
            price: "$450"
        },
        {
            title: "Té",
            price: "$430"
        },
        {
            title: "Té con leche",
            price: "$450"
        },
         
       ]
}

export default menu
