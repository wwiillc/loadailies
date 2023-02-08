import { useEffect, useState} from 'react'

import CharacterDetails from '../components/CharacterDetails'

const Home = () => {
    const [characters, setCharacters] = useState(null)


    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('/api/dailies')
            const json = await response.json()

            if (response.ok) {
                setCharacters(json)
            }
        }

        fetchCharacters()
    }, [])

    return (
        <div className="home">
            <div className='characters'>
                {characters && characters.map((character) => (
                    <CharacterDetails key={character._id} character={character} />
                ))}
            </div>
        </div>
    )
}

export default Home