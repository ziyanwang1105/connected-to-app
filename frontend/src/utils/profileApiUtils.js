import { csrfFetch } from "./csrfUtils";

export const postProfile = profileInfo => (
    csrfFetch('api/profiles',{
        method: 'POST',
        body: JSON.stringify(profileInfo)
    })
);
