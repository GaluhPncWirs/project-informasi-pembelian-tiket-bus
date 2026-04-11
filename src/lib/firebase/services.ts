import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function getDatasTicketBus() {
  try {
    const snapshot = await getDocs(collection(firestore, "data-tiket-bus"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return {
      status: true,
      statusCode: 200,
      message: "Berhasil ambil data tiket bus",
      data,
    };
  } catch (err) {
    return {
      status: false,
      statusCode: 401,
      message: `Gagal ambil data tiket bus terjadi kesalahan ${err}`,
    };
  }
}

export async function getDatasRouteBusPopular() {
  try {
    const snapshot = await getDocs(
      collection(firestore, "rute-bus-terpopuler"),
    );
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return {
      status: true,
      statusCode: 200,
      message: "Berhasil ambil data Rute Bus Popular",
      data,
    };
  } catch (err) {
    return {
      status: false,
      statusCode: 401,
      message: `Gagal ambil data Rute Bus Popular terjadi kesalahan ${err}`,
    };
  }
}

// export async function batchUpload() {
//   const batch = writeBatch(firestore);

//   daftarTiketBus.forEach((item) => {
//     const docRef = doc(collection(firestore, "data-tiket-bus"));
//     batch.set(docRef, item);
//   });

//   try {
//     await batch.commit();
//     console.log("Batch upload sukses!");
//   } catch (error) {
//     console.error("Batch upload gagal:", error);
//   }
// }

// // batchUpload();

// // untuk realtime
// export function subscribeToGetDataGamePS2(callback: (dataGame : dataGamePS2[]) => void){
//   const q = query(collection(firestore, "database-gamePS2"))

//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     const dataGamePS2 = querySnapshot.docs.map((doc) => ({
//       id : doc.id,
//       ...doc.data()
//     })) as dataGamePS2[]
//     callback(dataGamePS2)
//   })
//   return unsubscribe
// }
