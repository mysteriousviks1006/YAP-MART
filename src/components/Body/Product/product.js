import React, { Component } from 'react'

function product(props){
        return (
            <div>
                {props.imgurl}
                {props.discount}
                {props.orig}
            </div>
        )
}
export default product;