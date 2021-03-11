

export const CharacterCard = (props) => {
    const { name, url } = props.character;
  
    return (
        <div>
            <h3>{name}</h3>
            <h4>{url}</h4>
        </div>
    )
}