
export type PhotosType = {
   small: string | null
   large: string | null
}

export type UsersType = {
   followed: boolean
   id: number
   name: string
   photos: PhotosType
   status: string
}


export type ContactsType = {
   github: string | null
   vk: string | null
   facebook: string | null
   instagram: string | null
   twitter: string | null
   website: string | null
   youtube: string | null
   mainLink: string | null
}


export type ProfileType = {
   aboutMe: string
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: ContactsType
   photos: PhotosType
}