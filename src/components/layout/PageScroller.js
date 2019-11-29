import React from 'react'
import ReactPageScroller from 'react-page-scroller'

export default function PageScroller(props) {
    return (
        <ReactPageScroller>
            {props.children}
        </ReactPageScroller>
    )
}
