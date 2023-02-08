const CharacterDetails = ({ character }) => {
    return (
        <div className="character-details">
            <h4> {character.detail}</h4>
            <p><strong>Una: </strong> {character.una}</p>
            <p><strong>Chaos: </strong> {character.chaos}</p>
            <p><strong>Guardian: </strong> {character.guardian}</p>
        </div>
    )
}

export default CharacterDetails