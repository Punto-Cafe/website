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
            price: "$1650"
        },
        {
            title: "Café cortado",
            price: "$1650"
        },
        {
            title: "Lágrima",
            price: "$1650"
        },
        {
            title: "Café con leche",
            price: "$1870"
        },
        {
            title: "Café doble",
            price: "$1870"
        },
        {
            title: "Café Con dulce de leche",
            price: "$1870"
        },
        {
            title: "Café de menta",
            description: "café con leche con menta y chocolate",
            price: "$1870"
        }, 
        {
            title: "Submarino",
            price: "$2200"
        },
        {
            title: "Capuchino",
            price: "$2200"
        },
        
        {
            title: "Café irlandés",
            description: "Café con Whisky Irlandés y canela",
            price: "$2750"
        },
        {
            title: "Café Calypso",
            description: "Café con Tía María y cacao",
            price: "$2750"
        },
        {
            title: "Café Malibú",
            description: "Café con Malibú y coco rayado",
            price: "$2750"
        },
        {
            title: "Té",
            price: "$1000"
        },
        {
            title: "Té con leche",
            price: "$1200"
        },
        {
            title: "Chocolatada",
            price: "$1870"
        }
    ],
    Pastelería: [
        {
            title: "Tostadas",
            description: "Tostadas de pan de salvado con queso untable y mermelada",
            price: "2000"
        },
        {
            title: "Medialuna",
            price: "$900"
        },
          {
            title: "Medialuna con jamon y queso",
            price: "$1100"
        },
        {
            title: 'Tortas "Consultar" ',
            description: "pasta frola $1500 "
            
        },
       
      
        
    ],
    Sandwiches: [
        
        {
            title: "Tostado de molde",
            description: "Tostado en pan de salvado con jamón y queso",
            price: "$2700"
        },
        
               {
            title: "Sandwich de jamón y queso",
            description: "Sandwich de jamón y queso en árabe, sacramento o mini árabe",
            price: "Árabe $3000, mini árabe $2000"
        },
        {
            title: "Sandwich de queso y tomate",
            description: "Sandwich de queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $3000, mini árabe $2000"
        },
        {
            title: "Sandwich de jamón, queso y tomate",
            description: "Sandwich de jamón, queso y tomate en árabe, sacramento o mini árabe",
            price: "árabe $3100, mini árabe $2100"
        },
        {
            title: "Sandwich de queso, tomate y aceitunas negras",
            description: "Sandwich de queso, tomate y aceitunas negras en árabe, sacramento o mini árabe",
            price: "árabe $3500 , mini árabe $2500"
        },
       
        
    ],
   
     "Bebidas sin alcohol": [
        {
            title: "Agua",
            description: "Agua con o sin gas",
            price: "$1300",
        },
        {
            title: "Agua saborizada",
            description: "Agua saborizada de pomelo, manzana, naranja",
            price: "$1600",
        }, 
         {
            title: "Gaseosa",
            description: "Gaseosa Coca Cola, Coca Cola Zero",
            price: "$1600",
        },
         {
             title: "Exprimido",
             price: "$1900",
         },
        {
            title: "Licuado al agua",
            description: "Licuado al agua con frutas de estación (500cc)",
            price: "$1800",
        }, 
         {
            title: "Licuado con leche",
            description: "Licuado con leche con frutas de estación (500cc)",
            price: "$2000",
        },
         
        
  ],
    "kiosco": [ 
        {
            title: "alfajor triple ",
            price: "$1100"
        },
          {
            title: "alfajor rasta ",
            price: "$1200"
        },
        {
            title: "alfajor fantoche (blanco o negro)",
            price: "$800"
        },
       
        {
            title: "alfajor simple ",
            price: "$800"
        },
        
        {
            title: "alfajor lulemmu (arroz)",
            price: "$800"
        },
        {
            title: "pastillas D.r.f",
            price: "$250"
        },
        {
            title: "topline menta",
            price: "$300"
        },  
                {
            title: "caramelos masticables y gomitas",
            price: "$600"
        },
        {
            title: "caramelos sugus",
            price: "$50 c/U"
        },
                {
            title: "barrita de cereal ",
            price: "$600"
        },
              {
            title: "pancho ",
            price: "$1500"
        },
             {
            title: "Helado alfajor ",
            price: "$1000"
        },
             {
            title: "Copa Jamaica ",
            price: "$950"
        },
             {
            title: "Palito Bombón ",
            price: "$950"
        },
             {
            title: "Helado de agua ",
            price: "$350"
        },
       ],
    
    "Cafetería Para Llevar": [
        {
            title: "Café vaso grande",
            price: "$2200"
        },
        {
            title: "Café vaso chico",
            price: "$1800"
        },
             
       ],
}

export default menu
