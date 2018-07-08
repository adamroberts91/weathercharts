import _ from 'lodash';
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines style={{height:"120px", width:"180px"}} data={props.data}>
                <SparklinesLine color={props.colour} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}{props.unit}</div>
        </div>
    )
}