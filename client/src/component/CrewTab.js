/**
 * This is the Crew Tab Component
 * Child componenet of DetailTab
 * This component sorts the crew data by department then by name
 * It then loops through the sorted array and sends each array object to CrewItem
 */

 /** Imports **/
import React from 'react';
import CrewItem from './CrewItem.js'

class CrewTab extends React.Component {
    render(){
        let crew = '';
        if(this.props.crewData) {
            let data = this.props.crewData;
            {/* Sort by department */}
            data.sort((a,b) => ((a.department > b.department) ? 1 : -1));
            {/* Sort by name */}
            data.sort((a,b) => {
                if(a.department == b.department){
                    return (a.name > b.name) ? 1 : -1;
                }
            })
            {/* Loops through all crew members */}
            crew = data.map((c, key) => {
                return <CrewItem crew={c} key={key}/>
            }) 
        } else { {/* If there is no cast information in array */}
            crew = <div>No Crew information available!</div>; 
        }
        return (
            <div>{ crew }</div>
        );
    }
}
export default CrewTab