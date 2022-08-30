export interface dash{
    id:number,
    type:string,
    createdAt:Date,
    updatedAt:Date,
    content:string,
    authorsSelf?:string,
    authorsRelated?:string,
    publishersSelf?:string,
    publishersRelated?:string,
}