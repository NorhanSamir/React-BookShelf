import React from 'react';
import { Book } from './Book';
export const Shelf: React.FC<{ books: any[], title: string }> = (props: { books: any[], title: string }) => {
    return (
        <React.Fragment>

            <h1>{props.title}</h1>
            {props.books? props.books.map((value) => {
                return (
                    <Book key={value.id} book={value} />
                );
            }): <h2>No Books Found</h2>}

        </React.Fragment>


    );
}


