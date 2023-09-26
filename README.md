# MercadoNico

  

  
  

## Descripción del Proyecto

  

Este proyecto es una tienda en línea desarrollada en ReactJs como parte del curso de ReactJs de Coderhouse. Permite a los usuarios visualizar productos, filtrarlos por categoría, agregar productos al carrito y simular una compra. La aplicación utiliza Firebase para gestionar la base de datos de productos y los datos de contacto de los compradores.

  

## Link al proyecto en linea

https://mercadonico.netlify.app/

  

  

En este link van a encontrar la página para probarla.

  
  

## Cómo Levantar el Proyecto

Para poder ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el Repositorio:** Abre una terminal y ejecuta el siguiente comando para clonar este repositorio en tu máquina local: ```bash git clone https://github.com/NicolasEsquilache/ReactJSCoder```

  

2.  **Instalar Dependencias:** En la terminal, navega hasta la carpeta del proyecto y ejecuta los siguientes comandos para instalar todas las dependencias necesarias:

  

`cd ReactJSCoder`

` npm install`

  

Asegúrate de que Node.js esté instalado en tu sistema antes de ejecutar este comando.

  

3.  **Configurar Variables de Entorno:** Este proyecto utiliza variables de entorno para ciertas configuraciones. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno con los siguientes valores:

```

VITE_FIRESTORE_API_KEY = AIzaSyD5j0u8aks0FnzhoxUPBt6sfkRzYer39Ds

  

VITE_FIRESTORE_AUTH_DOMAIN = coder-react-bd40e.firebaseapp.com

  

VITE_FIRESTORE_PROJECT_ID = coder-react-bd40e

  

VITE_FIRESTORE_STORAGE_BUCKET= coder-react-bd40e.appspot.com

  

VITE_FIRESTORE_MESSAGING_SENDER_ID= 946658783268

  

VITE_FIRESTORE_APP_ID = 1:946658783268:web:ff9e5b3fa55822458368b1

```

4.**Ejecutar la Aplicación:** Una vez que hayas clonado el repositorio, instalado las dependencias y configurado las variables de entorno, puedes ejecutar la aplicación con el siguiente comando:

npm run dev

  

## Demo




https://github.com/NicolasEsquilache/ReactJSCoder/assets/129908067/f19ea963-49f9-4e75-9a11-77454ae3326a


  

## Componentes

  

  

### Navbar

  

  

El navbar es el componente que muestra el logo del sitio, las distintas categorías que hacen navegable a la página y el carrito de compras.

  

### CartWidget

  

  

El CartWidget se muestra con un ícono de un carrito de compras y es el componente en el cual se representa con un número la cantidad de elementos que estamos acumulando para comprar

  

### ItemDetail / ItemDetailContainer

  

En estos componentes se renderiza el cada detalle del producto que seleccionamos. En el aparece únicamente un producto a la vez y podemos tener la información mas detallada del mismo y desde aquí se puede seleccionar para comprar.

  
  
  

### ItemList / ItemListContainer

  

En estos componentes se muestra la lista completa de los productos disponibles en la base de datos, además son los responsables del filtrado por categorías

  
  

### Checkout

  

En este componente sucede toda la lógica de la compra, la escritura de la base de datos con nuestro pedido y la confirmación del mismo.

### Footer

  

Aquí está la información de la tienda, enlaces útiles y la posibilidad de suscribirse a Newsletter para recibir ofertas y novedades.

## Dependencias usadas

 - Bootstrap
 - Bootstrap-icons
 - Firebase
 - Prop-Types
 - React
 - React-Toastify
