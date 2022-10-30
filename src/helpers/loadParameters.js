import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadParameters = async()=>{
    const params = ['Valvulas','HumedadRelativa','TemperaturaRelativa']
    const Valvulas =[];
    const Humedades = [];
    const Temperaturas = [];
    for (const param of params) {
        const collectionRef = collection(FirebaseDB,`RiegosGuatemala/Registros/${param}`);
        const docs = await getDocs(collectionRef);
        if(param == 'Valvulas'){
            docs.forEach(doc =>{
                Valvulas.push({id: doc.id,... doc.data()});
            });
        }
        if(param == 'HumedadRelativa'){
            docs.forEach(doc =>{
                Humedades.push({id: doc.id,... doc.data()});
            });
        }
        if(param == 'TemperaturaRelativa'){
            docs.forEach(doc =>{
                Temperaturas.push({id: doc.id,... doc.data()});
            });
        }
    }
    return {
        Valvulas,
        Humedades,
        Temperaturas
    };
}