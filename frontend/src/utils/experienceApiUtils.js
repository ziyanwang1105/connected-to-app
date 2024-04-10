import { csrfFetch } from "./csrfUtils";

export const postExperience = experienceInfo => (
    csrfFetch('/api/experiences',{
        method: 'POST',
        body: JSON.stringify(experienceInfo)
    })
);
export const  patchExperience = experienceData => (
    csrfFetch(`/api/experiences/${experienceData.id}`,{
        method: 'PATCH',
        body: JSON.stringify(experienceData)
    })
)

export const deleteExperience = experienceId =>(
    csrfFetch(`/api/experiences/${experienceId}`, {
        method: 'DELETE'
      })
)
