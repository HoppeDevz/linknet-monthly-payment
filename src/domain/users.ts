
export type User = {
    user_id?: number
    first_name: string
    last_name: string
    identification_document_type: string
    identification_document: string
    email: string | null
    phone: string
    created_at?: string
    updated_at?: string
}

export interface IUserUseCases {
    create: (user: User) => Promise<User>
    update: (user: User) => Promise<User>
    remove: (userId: number) => Promise<void>
    findOverlapping: (uniqueFields: Pick<User, "email" | "phone">) => Promise<User | undefined>
    findById: (userId: number) => Promise<User | undefined>
}

export interface IUsersRepository {
    create: (user: User) => Promise<User>
    update: (user: User) => Promise<User>
    remove: (userId: number) => Promise<void>
    findByUniqueFields: (uniqueFields: Pick<User, "email" | "phone">) => Promise<User[]>
    findById: (userId: number) => Promise<User | undefined>
}