import styles from '../styles/styles.module.css'
import React from 'react';

export interface Props{
     title?: string;
     className?: string;
 }

export const ProductTitle = ( { title, className }: Props  ) => {


    return (
        <span className={ `${ styles.productDescription } ${ className }` } > {title} </span>

    )

}