import Imagekit from "@imagekit/javascript"
import api from "./axios";

export const uploadImage = async(file) => {
    try {
        const {data} = await api.get("/auth/imagekit")
        
        const ik = new Imagekit({
            publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
            urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
            authenticationEndpoint: import.meta.env.VITE_IMAGEKIT_AUTHENTICATION_ENDPOINT,
            
        });

        return ik.upload({
            file,
            fileName: file.name,
            token: data.token,
            signature: data.signature,
            expire: data.expire
        });
    } catch (error) {
        console.log(error);
    }

}