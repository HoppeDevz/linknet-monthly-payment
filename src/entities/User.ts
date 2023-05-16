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