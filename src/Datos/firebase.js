import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  collection,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzXm5EKMi0ca-K6IwnVEYCgmuL_7ziTYc",
  authDomain: "todo-pesca-78383.firebaseapp.com",
  projectId: "todo-pesca-78383",
  storageBucket: "todo-pesca-78383.appspot.com",
  messagingSenderId: "747984303310",
  appId: "1:747984303310:web:d438f953431c8d97c2cc9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);









export async function getItems() {
  const productosCollection = collection(db, "productos");

  const q = query(productosCollection, orderBy("index"));

  const querySnapshot = await getDocs(q);

  /* Obtenemos un nuevo array con los datos de cada producto */
  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataDocs;
}








export async function getSingleItem(itemid) {
  const docRef = doc(db, "productos",itemid);
  const snapshot = await getDoc(docRef);

  return { ...snapshot.data(), id: snapshot.id };
}











export async function getItemsByCategory(categoryid) {
  const productosCollection = collection(db, "productos");
  const q = query(productosCollection, where("categoria", "==", categoryid));
  const querySnapshot = await getDocs(q);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataDocs;
}








export async function createOrder(order) {
  const ordersCollection = collection(db, "orders");

  const orderDoc = await addDoc(ordersCollection, order);

  return orderDoc.id;
}






 export async function exportDataWithBatch(){
     const productsCollection = collection(db,"productos");
     const batch = writeBatch(db);

     const productos =[
         {
             id: 1,
             categoria: "oferta",
             stock: 5,
             titulo: "Combo  variada ",
             precio: 6200,
             imagen: "../../assets/fotos final/combo 1.webp",
             detalle: "Combo Pesca Caña Telescopica 2,70m + Reel Se200 + Tanza",

         },
         {
             id: 2,
             categoria: "oferta",
             stock: 7,
             titulo: " Caña + Reel rosa",
             precio: 6300,
             imagen: "../../assets/fotos final/combo 2.webp",
             detalle: "Combo Pesca Niña Rosa Caña Telesc 1,80m + Reel 3 Rul + Tanza",
         },
         {
             id: 3,
             categoria: "oferta",
             stock: 4,
             titulo: "Combo  variada  ",
             precio: 9000,
             imagen: "../../assets/fotos final/combo 3.webp ",
             detalle: "Combo Pesca Variada Caña 2 Tramos Reel 6 Rulem Con Tanza",
         },
         {
             id: 4,
             categoria: "oferta",
             stock: 8,
            titulo: "Combo Baitcasting ",
             precio: 23000,
             imagen: "../../assets/fotos final/combo 4.webp ",
             detalle: "Combo Pesca Bait Caña Paranacito 2.10m + Reel Zetta Surfish",
         },
         {
             id: 5,
             categoria: "oferta",
             stock: 11,
             titulo: " Combo pejerrey",
             precio: 10750,
             imagen: "../../assets/fotos final/combo 5.webp ",
             detalle: "Combo Pejerrey Surfish Caña Star 4mt + Reel Guazu 2000 Tanza",
        },
         {
             id: 6,
             categoria: "oferta",
             stock: 9,
             titulo: "Combo de repuesto (1)",
             precio: 7000,
             imagen: "../../assets/fotos final/combo 6.webp ",
             detalle: "Combo Pesca Variada Completo - Caja Con Todo Lo Necesario",
         },
        {
             id: 7,
             categoria: "oferta",
             stock: 2,
             titulo: "Combo super completo ",
             precio: 15000,
             imagen: "../../assets/fotos final/combo 7.webp ",
             detalle: "Combo Pesca Variada Rio. Caña 2.10 Mts + Reel + Linea + Caja",
         },
         {
             id: 8,
             categoria: "oferta",
             stock: 6,
             titulo: "Combo de repuesto (2)",
             precio: 5900,
             imagen: "../../assets/fotos final/combo 8.webp ",
             detalle: "Combo reel+tanza+lineas+plomo+100 Acc",
         },
         {
             id: 9,
             categoria: "oferta",
             stock: 10,
             titulo: "Combo de repuesto (3) ",
             precio: 2500,
             imagen: "../../assets/fotos final/combo 9.webp ",
             detalle: "Combo 120 Anzuelos + Lombrices Silicona + Rotores",
         },
         {
             id: 10,
             categoria: "oferta",
             stock: 1,
             titulo: "Combo de Comienzo ",
             precio: 25000,
             imagen: "../../assets/fotos final/combo 10.webp ",
             detalle: "Caña telescopica x2 + Reel frontal x 2 + Caja de pesca con todos los accesorios",
         },
         {
             id: 11,
             categoria: "baitcast",
             stock: 5,
             titulo: "Baitcasting okuma ",
             precio: 13500,
             imagen: "../../assets/fotos final/caña baitcasting 1.webp ",
            detalle: "Caña Okuma Baitcasting Wave Power",
         },
         {
             id: 12,
             categoria: "baitcast",
             stock: 3,
             titulo: "Caña baitcasting  ",
             precio: 12700,
             imagen: "../../assets/fotos final/caña baitcasting 2.webp ",
             detalle: "Caña Baitcasting Montague Advocate 6.6 Pies 10 17 Lb 2 Tramo",
         },
         {
             id: 13,
             categoria: "baitcast",
             stock: 2,
             titulo: "Caña baitcasting ",
             precio: 6800,
             imagen: "../../assets/fotos final/caña baitcasting 3.webp ",
             detalle: " Caña Caster Black Fighter 1.80m Bait Casting 6-12 Lb 8-25g",
         },
         {
             id: 14,
             categoria: "baitcast",
             stock: 7,
             titulo: "Caña baitcasting ",
             precio: 7000,
             imagen: "../../assets/fotos final/caña baitcasting 4.webp ",
             detalle: "Caña De Pescar Beast Red Max 2.10m Baitcasting Para Señuelos",
         },
         {
             id: 15,
             categoria: "baitcast",
             stock: 9,
             titulo: "Caña baitcasting  ",
             precio: 8000,
             imagen: "../../assets/fotos final/caña baitcasting 5.webp ",
             detalle: "Caña Surfish Abismo 1.95m Baitcasting 2tr Gatillo Comgrafito",
         },
         {
             id: 16,
             categoria: "costa",
             stock: 3,
             titulo: "Caña de mar/costa Amberjack",
             precio: 33000,
             imagen: "../../assets/fotos final/caña de mar costa 1.webp ",
             detalle: "Caña Amberjack 4.20 Mts 3tr Grafito Hibrida Lance Costa Mar",
         },
         {
             id: 17,
             categoria: "costa",
             stock: 3,
             titulo: " Caña de mar/costa Spinit Lancer ",
             precio: 19500,
             imagen: "../../assets/fotos final/caña de mar costa 2.webp ",
             detalle: "Caña Spinit Lancer 3 Tramos Pesca Variada De Mar Lance Costa",
         },
         {
             id: 18,
             categoria: "costa",
             stock: 4,
             titulo: "Caña de mar/costa Spinit surfer ",
             precio: 22000,
             imagen: "../../assets/fotos final/caña de mar costa 3.webp ",
             detalle: "Caña Spinit Surf 4 Mts 3 Tramos Surfcasting Lance Costa Mar",
         },
         {
             id: 19,
             categoria: "costa",
             stock: 5,
             titulo: "Caña de mar/costa Spinit Coral ",
             precio: 38300,
             imagen: "../../assets/fotos final/caña de mar costa 4.webp ",
             detalle: "Caña Spinit Coral Reef 4.30 Mts 100 250 Gr Lance Costa Mar",
         },
         {
             id: 20,
             categoria: "frontal",
             stock: 5,
             titulo: " Reel frontal Caster Sniper 6005",
             precio: 7700,
             imagen: "../../assets/fotos final/reel frontal 1.webp ",
             detalle: "Reel ideal para cualquier tipo de pesca, gran sistema de freno!",
        },
         {
             id: 21,
             categoria: "frontal",
             stock: 4,
             titulo: " Reel Caster Karp Hunter 4006 (inmaculado)",
             precio: 14000,
             imagen: "../../assets/fotos final/reel frontal 2.webp ",
             detalle: "Cuerpo construido en grafito de alta resistencia,5 + 1 RULEMANES de acero inoxidable",
         },
         {
            id: 22,
             categoria: "frontal",
             stock: 2,
             titulo: "Reel Frontal Albatros Siberiano 700 ",
             precio: 6500,
             imagen: "../../assets/fotos final/reel frontal 3.webp ",
             detalle: "Reel de la marca Albatros diseñado especialmente para aquellos pescadores que están en la búsqueda de sus primeras experiencias y capturas!",
         },
         {
             id: 23,
             categoria: "frontal",
             stock: 3,
             titulo: "Reel Kunnan Veyron 4003 F Pesca Pejerrey ",
             precio: 9300,
             imagen: "../../assets/fotos final/reel frontal 4.webp ",
             detalle: "3 Rulemanes blindados resistentes al óxido y la corrosión,Cuerpo de grafito.",
         },
         {
             id: 24,
             categoria: "frontal",
             stock: 1,
             titulo: "Reel Waterdog Novak 501 (inmaculado) ",
             precio: 6800,
             imagen: "../../assets/fotos final/reel frontal 5.webp ",
             detalle: "Reel Metal-ideal Pesca Variada",
         },
         {
             id: 25,
             categoria: "huevito",
             stock: 6,
             titulo: " Reel baitcast huevito-14 rulemanes",
             precio: 13000,
             imagen: "../../assets/fotos final/reel huevito 1.webp ",
             detalle: "Reel Amberjack Baitcast",
         },
         {
             id: 26,
             categoria: "huevito",
             stock: 12,
             titulo: "Reel Huevito Baitcasting -Green",
            precio: 8500,
             imagen: "../../assets/fotos final/reel hevito 2.webp ",
             detalle: "Reel especialmente fabricado para la pesca de baitcasting",
         },
         {
             id: 27,
             categoria: "huevito",
             stock: 7,
             titulo: "Reel Amberjack Huevito Rotativo  ",
             precio: 14000,
             imagen: "../../assets/fotos final/reel huevito 3.webp ",
             detalle: "Reel altamente resistente para pesca de grandes Dorados",
         },
         {
             id: 28,
             categoria: "huevito",
             stock: 2,
             titulo: " Reel Huevito baitcasting -Red",
             precio: 8600,
             imagen: "../../assets/fotos final/reel hevito 4.webp ",
             detalle: "Reel Huevito Beast Snake 103 Baitcasting -Red",
         },
         {
             id: 29,
             categoria: "huevito",
             stock: 5,
             titulo: "Reel Huevito Beast Monster 104  ",
             precio: 8100,
             imagen: "../../assets/fotos final/reel huevito 5.webp ",
             detalle: "Reel de alta velocidad con freno magnetico regulable externo",
         },
         {
             id: 30,
             categoria: "rotativo",
             stock: 3,
             titulo: "Reel Pesca Pesada Rotativo  ",
             precio: 27500,
             imagen: "../../assets/fotos final/reel rotativo.webp ",
             detalle: "Reel Rotativo Blazer 5004 Ideal Lance Costa, Trolling, Pesca Pesada!",
         },
         {
             id: 31,
             categoria: "rotativo",
             stock: 2,
             titulo: "Reel Rotativo Waterdog Triden  ",
             precio: 22000,
             imagen: "../../assets/fotos final/reel rotativo 2.webp ",
             detalle: "Reel rotativo tradicional diseñado específicamente para pesca al estilo trolling, a la deriva o para cualquier tipo de pesca pesada como la de embarcado",
         },
         {
             id: 32,
             categoria: "rotativo",
             stock: 1,
             titulo: "Reel Rotativo Caster Argus 3004 L ",
             precio: 25000,
             imagen: "../../assets/fotos final/reel rotativo 3.webp ",
            detalle: "REEL ROTATIVO CASTER ARGUS 3004L TROLLING 4 RULEMANES - MANIJA IZQUIERDA",
        },
         {
             id: 33,
             categoria: "rotativo",
             stock: 6,
             titulo: "Reel rotativo Marine Sports  ",
             precio: 19500,
             imagen: "../../assets/fotos final/reel rotativo 4.webp ",
             detalle: "Con este tipo de reel, es más fácil controlar el embrague, tiene mayor capacidad de arrastre y un rápido acceso a la tecla de desbloqueo.",
         },

     ];

     for (let item of productos) {
         item.index = item.id;
        delete item.id;

        const newDoc = doc(productsCollection);
         batch.set(newDoc, item);
       }

      const commitDone = await batch.commit();
      console.log("--->", commitDone);

 }
