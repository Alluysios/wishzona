import React from 'react';
import './HorizontalList.scss';

const HorizontalList = ({ title, items }) => {
    return (
        <div className="hlist">
            <div className='hlist__title'>{title}</div>
            <ul className="hlist__lists">
                { items.map((item, i) => <li key={i} className='hlist__lists-item'>{item}</li>) }
            </ul>
        </div>
    )
}

HorizontalList.defaultProps = {
    title: '',
    items: []
}

export default HorizontalList
