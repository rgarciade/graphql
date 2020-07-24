import { IResolvers } from "graphql-tools"
import { database } from '../data/data.store'
const query : IResolvers = {
    Query : {
        estudiantes(): any {
            return database.estudiantes
        },
        estudiante(__: void, {id}): any {
            const resultado =  database.estudiantes.find(element => element.id === id)
            return (resultado !== undefined)
                ? resultado 
                :   {
                        id: '-1',
                        name: `no se ha encontrado el estudiante con el ide ${id}`,
                        email:'',
                        courses:[]
                    } 

        }
    }
}
export default query