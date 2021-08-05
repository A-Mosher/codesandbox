import React from 'react';

function SuperHeroTable(props){
    console.log(props);

    return(
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Super Hero Name</th>
                        <th>Primary Ability</th>
                        <th>Secondary Ability</th>
                    </tr>
                    {props.heroes.map((hero) => {
                        return(
                        <tr>
                        <td>{hero.id}</td>
                        <td>{hero.superHeroName}</td>
                        <td>{hero.primaryAbility}</td>
                        <td>{hero.secondaryAbility}</td>
                        <button onClick={() => props.deleteHero(hero.id)}>Delete Hero</button>
                    </tr>
                    )
                    })
                }   
                </table>
            </div>
    )
}


export default SuperHeroTable;