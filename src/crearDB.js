// React.useEffect(() => {

//     const products = [
//       {
//         title: "Bolso",
//         description: "Cartera de fibras naturales (carandillo) de 24 cms de diámetro por 8 cms de profundidad, confeccionada por artesanas de la comunidad Pilaga de Pozo del Tigre, Formosa.-",
//         image: "https://drive.google.com/uc?export=view&id=1Pvp-84RsKVviTedcvPtmYixHxaQiiRc-",
//         price: 4600,
//         categoryId: 1,
//       },
//       {
//         title: "Especiero x6 unidades",
//         description: " 6 frascos de vidrio transparente de 10 cm de alto por 5 cm de diámetro con tapa de corcho.",
//         image: "https://drive.google.com/uc?export=view&id=1HjYM2zKLu7bR7SZ5j0vX0tV8LQu4MRFp",
//         price: 2500,
//         categoryId: 2,
//       },
//       {
//         title: "Aceitera",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=1xTiaJhVfG0li0UvH0kjGUEZU2-xASOww",
//         price: 900,
//         categoryId: 2,
//       },
//       {
//         title: "Vela Pez",
//         description: "Vela de soja en frasco de vidrio (transparente o negro) de 8.5 cm de alto por 8.5 cm de diametro. Incluye tapa de madera guatambú grabada. ",
//         image: "https://drive.google.com/uc?export=view&id=1pVcdoY07zbFK6iIbEjiadvA-WrWQcGlM",
//         price: 1500,
//         categoryId: 3,
//       },
//       {
//         title: "Home Spray",
//         description: "Spray para telas en frasco de plástico transparente de 13 cm de alto por 6 cm de diámetro, con válvula gatillo.",
//         image: "https://drive.google.com/uc?export=view&id=1Avq4uGFzNTleYvFn0M5NDKBDKU8Hp3jt",
//         price: 1200,
//         categoryId: 4,
//       },
//       {
//         title: "Manta",
//         description: "Lona de gabardina de algodón con rayas rojas de 1.50  por 1.70 mts.",
//         image: "https://drive.google.com/uc?export=view&id=19JNroJ9AKRrdpZRqX4vbmqjrJIdcc2bX",
//         price: 1650,
//         categoryId: 1,
//       },
//       {
//         title: "Cuenco",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "img url",
//         price: 600,
//         categoryId: 3,
//       },
//       {
//         title: "Diffuser",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=1dIeOFZA5C7X2-J2hw1a-2IfViFimehNB",
//         price: 350,
//         categoryId: 4,
//       },
//       {
//         title: "Sales de baño",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=1dgQGBuUPUW3UCrgGLUMBCpRP3eGdOSzW",
//         price: 750,
//         categoryId: 5,
//       },
//       {
//         title: "Jarron Luna",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=1QguNZe4RsBPcyYhmaYm12GEQVIvXtkOO",
//         price: 1250,
//         categoryId: 3,
//       },
//       {
//         title: "Jabonera Marea",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=1NJhtDAyveUU9d4tzL2UrdvKJA3QxpMOH",
//         price: 850,
//         categoryId: 3,
//       },
//       {
//         title: "Dispenser Alcohol",
//         description: "Spray para alcohol en frasco de plástico transparente de 9 cm de alto por 4 cm de diámetro, con válvula gatillo.",
//         image: "https://drive.google.com/uc?export=view&id=1Amuc9l3-1cpn3BAV39kh670aeKoMuvGL",
//         price: 850,
//         categoryId: 5,
//       },
//       {
//         title: "Especiero x1 unidad",
//         description: " Frasco de vidrio transparente de 10 cm de alto por 5 cm de diámetro con tapa de corcho.",
//         image: "https://drive.google.com/uc?export=view&id=1qfQnMTNROyIq-m5V4JunFCcsyGXeOn9G",
//         price: 250,
//         categoryId: 2,
//       },
//       {
//         title: "Dispenser Aromatizante",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=1Z52mNoZox-vjRcx30cagefXPdguuAliM",
//         price: 675,
//         categoryId: 4,
//       },
//       {
//         title: "Dish Soap 500ml",
//         description: "Dispensers de vidrio color caramelo de 17 cm de alto por 7.5 cm de diametro, con válvula cremera color negro.",
//         image: "https://i.ibb.co/xggL9f8/Dispenser-500-ML.jpg",
//         price: 475,
//         categoryId: 2,
//       },
//       {
//         title: "Home Spray x3 unidades",
//         description: "Spray para telas en frasco de plástico transparente de 13 cm de alto por 6 cm de diámetro, con válvula gatillo.",
//         image: "https://i.ibb.co/HD8fc6j/Home-spray-350-ML.jpg",
//         price: 690,
//         categoryId: 4,
//       },
//       {
//         title: "Cuenco Luna",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=1N9Sp9zWNUEftiWkl0Mr3TL3QbSNQGNE5",
//         price: 700,
//         categoryId: 3,
//       },
//       {
//         title: "Taza Pez x3 unidades",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla ultricies, faucibus sem quis, cursus eros. Quisque vitae molestie nunc.",
//         image: "https://drive.google.com/uc?export=view&id=19V56uwggk-rPS9NB4s-O9-OJQBP3L9ns",
//         price: 1350,
//         categoryId: 3,
//       },
//     ]

//     const db = getFirestore();
//     const ordersCollection = db.collection("products");

//     products.forEach((product) => {
//       ordersCollection
//         .add(product)
//         .then((docRef) => console.log("Producto agregado exitosamente: ", docRef.title))
//         .catch((error) => console.log(error));
//     });
//   }, []);
