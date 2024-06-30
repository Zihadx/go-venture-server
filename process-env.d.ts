declare namespace NodeJS{
    export type processEnv = {
        NODE_ENV: string

        PORT:number
        DATABASE_URL: string
        
        JWT_ACCESS_SECRET:string
        JWT_ACCESS_EXPIRES_IN:string
    }
}