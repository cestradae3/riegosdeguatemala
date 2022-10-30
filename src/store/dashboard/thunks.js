import { loadParameters } from "../../helpers/loadParameters";
import { setLoading, setParams } from "./dashboardSlice";


export const startLoadingParams = ()=>{
    return async(dispatch)=>{
        dispatch(setLoading());
        const params = await loadParameters();
        Object.keys(params).forEach(key=>{
            for (const registro of params[key]) {
                const fecha = registro.fecha.toDate();
                registro.fecha = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
            }
        });
        dispatch(setParams(params))
    }
}