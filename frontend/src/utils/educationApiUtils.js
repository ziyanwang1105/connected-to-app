import { csrfFetch } from "./csrfUtils";

export const postEducation = educationInfo => (
    csrfFetch('/api/educations',{
        method: 'POST',
        body: JSON.stringify(educationInfo)
    })
);
export const  patchEducation = educationData => (
    csrfFetch(`/api/profiles/${educationData.id}`,{
        method: 'PATCH',
        body: JSON.stringify(educationData)
    })
)

export const deleteEducation = educationId =>(
    csrfFetch(`/api/profiles/${educationId}`, {
        method: 'DELETE'
      })
)
