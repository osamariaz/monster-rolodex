import React from 'react';
import './card-list.css';
import {Card} from '../card/card-list';

export const Cardlist = props =>(
    <div className="card-list">
        { props.monsters.map(monsters=>(
            <Card key={monsters.id} monsters={monsters}/>)) }
    </div>
);
