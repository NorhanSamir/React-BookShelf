import React from 'react';
import { Book } from './Book';
import BookInterface from './Book.interface';
export const Shelf: React.FC<{ books: BookInterface[], title: string }> = (props: { books: BookInterface[], title: string }) => {
console.log(props.books)
    return (
        <React.Fragment>

            <h1>{props.title}</h1>
            {props.books? props.books.map((value) => {
                return (
                    <Book key={value.id} id={value.id} authors={value.authors && value.authors[0]} imageLinks={value.imageLinks} shelf={value.shelf} title={value.title} />
                );
            }): <h2>No Books Found</h2>}

        </React.Fragment>


    );
}

