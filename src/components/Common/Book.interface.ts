interface BookInterface {
    title: string,
    imageLinks: {thumbnail?:string},
    shelf: string,
    authors?:string,
    id:string,
}

export default BookInterface;


