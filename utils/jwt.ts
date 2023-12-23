import jwtDecode from "jwt-decode";

export const decodedToken = (token:string) => {
    // @ts-ignore
    return jwtDecode(token)
}