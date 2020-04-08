/**
 * This is the Cast Tab Component
 * Child componenet of DetailTab
 * This component sorts the cast data by order number
 * It then loops through the sorted array and sends each array object to CastItem
 */

 /** Imports **/
import React from 'react';
import CastItem from './CastItem.js'

class CastTab extends React.Component {
    render() {
        let cast = '';
        if (this.props.castData) {
            let data = this.props.castData;
            data.sort((a, b) => ((a.order > b.order) ? 1 : -1));
            cast = data.map((c, key) => {
                return <CastItem cast={c} key={key} view={this.props.view} />
            })
        } else { cast = <div>No Cast information available!</div>; }
        return (
            <div>{cast}</div>
        );
    }
}
export default CastTab