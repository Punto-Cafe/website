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
            price: "$990"
        },
        {
            title: "Café cortado",
            price: "$990"
        },
        {
            title: "Lágrima",
            price: "$990"
        },
        {
            title: "Café con leche",
            price: "$1090"
        },
        {
            title: "Café doble",
            price: "$1090"
        },
        {
            title: "Café Con dulce de leche",
            price: "$1090"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$1090"
        }, 
        {
            title: "Submarino",
            price: "$1360"
        },
        {
            title: "Capuchino",
            price: "$1360"
        },
        
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés y canela",
            price: "$1860"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María y cacao",
            price: "$1860"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú y coco rayado",
            price: "$1860"
        },
        {
            title: "Té",
            price: "$790"
        },
        {
            title: "Té con leche",
            price: "$890"
        },
        {
            title: "Chocolatada",
            price: "$1090"
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
            price: "Árabe $2200, mini árabe $1200"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $2200, mini árabe $1200"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $2450, mini árabe $1450"
        },
        {
            title: "Sandwich de queso, tomate y aceitunas negras",
            description: "Sandwich de queso, tomate y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $2450 , mini árabe $1450"
        },
       {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en pan lactal con semillas",
            price: "$2200",
            glutenFree: true,
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en pan lactal con semillas",
            price: "$2200",
            glutenFree: true,
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en pan lactal con semillas",
            price: "$2450",
            glutenFree: true,
        },
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$990",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$1200",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero",
            price: "$1200",
        },
         {
             title: "Exprimido",
             price: "$1800",
         },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$1600",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$1800",
        },
         
        
  ],
    "kiosco": [ 
        {
            title: "alfajor triple",
            price: "$1000"
        },
        {
            title: "alfajor fantoche (blanco o negro)",
            price: "$700"
        },
       
        {
            title: "alfajor simple block",
            price: "$700"
        },
        
        {
            title: "alfajor lulemmu (arroz)",
            price: "$700"
        },
        {
            title: "pastillas D.r.f",
            price: "$220"
        },  
                {
            title: "caramelos masticables y gomitas",
            price: "$400"
        },
        {
            title: "caramelos sugus",
            price: "$50 c/U"
        },
                {
            title: "barrita de cereal ",
            price: "$500"
        },
       ],
    
    "Cafetería Para Llevar": [
        {
            title: "Café vaso grande",
            price: "$1100"
        },
        {
            title: "Café vaso chico",
            price: "$990"
        },
             
       ],
}

export default menu
