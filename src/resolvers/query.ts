import { IResolvers } from "graphql-tools"

const query : IResolvers = {
    Query : {
        hola(): string {
            return 'hola mundoooo'
        },
        holaConNombre(__:void, args): string{
            return `hola mundo ${args.nombre}`
        },
        
        holaCaracola(){
            return 'hola Caracola'
        },
    }
}
export default query