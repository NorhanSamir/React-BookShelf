interface BookInterface {
    title: string,
    imageLinks: {thumbnail?:string},
    shelf: string,
    authors?:string,
    id:string,
    description?:string
}

export default BookInterface;


