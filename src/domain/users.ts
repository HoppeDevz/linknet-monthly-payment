import type { User } from "src/entities/User"

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