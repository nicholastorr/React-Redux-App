import { CharacterCard } from './CharacterCard';

import { connect } from 'react-redux';


const CharacterList = ({characters}) => {

    
    return (
        <div>
            {characters.map(item => {
             return  <CharacterCard key ={item.id} character ={item} />
            })}
           
        </div>
    )
}

export default connect((state) => state)(CharacterList);