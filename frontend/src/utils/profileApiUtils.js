import { csrfFetch } from "./csrfUtils";

export const postProfile = profileInfo => (
    csrfFetch('api/profiles',{
        method: 'POST',
        body: JSON.stringify(profileInfo)
    })
);
 export const  patchProfile = profileData => (
    csrfFetch(`api/profiles/${profileData.id}`,{
        method: 'PATCH',
        body: JSON.stringify(profileData)
    })
 )
