const productos=[
    {id:"1", name: "DJI Mini 3 PRO", price:909, category:"drone"},
    {id:"2", name: "DJI Mavic 3", price:1400, category:"drone"},
    {id:"3", name: "DJI Mini 3", price:750, category:"drone"},
    {id:"4", name: "Nikon A33", price:1909, category:"camera"},
    {id:"5", name: "Nikon A12", price:1275, category:"camera"},
    {id:"6", name: "Nikon A43", price:2450, category:"camera"},
    {id:"7", name: "JBL Flip 4", price:320, category:"tecnology"},
    {id:"8", name: "JBL Charge 3", price:520, category:"tecnology"},
    {id:"9", name: "JBL Flip 3", price:230, category:"tecnology"},

];

export const getProduct =(id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //buscamos el producto mediante ID
            const product= productos.find(p=>p.id==id);
            //si lo encuentra
            if(product){
                resolve(product);
            }else {
                reject("No se encontró el producto");
            }
        },500);
    });
};

export const getProducts=(category) => {
    return new Promise((resolve, reject) => {
        setTimeout (() =>{
            //si category existe
            const productFiltered= category
            ? productos.filter(productos=>productos.category==category)
            : productos;
        resolve(productFiltered);
    },500);
});
};