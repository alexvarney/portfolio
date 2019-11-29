import React from 'react'

export default function Page(props) {

    const style = {
        minHeight: '100vh',
    }

    return (
        <div style={{...style, ...props.style}}>
            {props.children}
        </div>
    )
}
