"use client"

import next from 'next';
import React, { useEffect, useState } from 'react';
import './page.scss';

const ApiPage = () => {

    const [todo, setTodo] = useState(Object); // Initial state should be an empty object

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1', 
        {
        next:{
            revalidate : 120 
        }}
        //ISG Increamental static Generation
        )
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => {
                    setTodo(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
    }, []);

    return (
<div key={todo.id} className="container p-5 my-5 bg-secondary text-white" >
            <h1>Todo API : {todo.title}</h1>
        </div>
    );
};

export default ApiPage;
