import React from 'react';
import { useDrag } from 'react-dnd';
import { MdMonitor, MdMonitorWeight } from 'react-icons/md';

export default function drag ({isDeagging, text }) {
    const [{opacity} , dragRef ] = useDrag (
        () => ({
            type: ItemTypes.CARD,
            item: {text},
            collect: (Monitor) => ({
                opacity: MdMonitorWeight.isDeagging() ? 0.5:1
            })
        }),
        []
    )
    return (
        <div ref = {dragRef} style={{opacity}} >
            {text}
        </div>
    );
};
