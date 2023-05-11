
export type User = {

    user_id: number
    first_name: string
    last_name: string
    identification_document_type: string
    identification_document: string
    created_at: number
    updated_at: number
}

export interface IUserUseCases {

    createUser: (firstName: string, lastName: string, identificationNumberType: string, identificationDocument: string, email: string | null, phone: string) => Promise<User>
    getUser: (userId: number) => Promise<User | undefined>
}

export interface IUsersRepository {
    
    createUser: (firstName: string, lastName: string, identificationNumberType: string, identificationDocument: string, email: string | null, phone: string) => Promise<User>
    getUser: (userId: number) => Promise<User | undefined>
}