import React from 'react';

function NamesList(props) {

        return (
            <div>
                {props.names.map((name) =>{
                    return(
                        <ul>
                            <li>{name}</li>
                        </ul>
                    )
                }

                )}
                
            </div>
        )
}

export default NamesList;