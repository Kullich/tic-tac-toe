import { useState } from "react"


export default function Player({initialName, symbol, isActive, onChangeName }){
    const [playerName, setPlayerName] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){
        setIsEditing( (editing) => !editing );//updating state need to pass function!!

        if(isEditing){
            onChangeName(symbol, playerName) 
        }
        
    }

    function handleChangeName( event ){
        setPlayerName(event.target.value);
    }

    let editableplayerName = <span className='player-name'>{playerName}</span>;

    if (isEditing) {
        editableplayerName = <input type="text" required value={playerName} onChange={handleChangeName}></input>;
    }


    return (

        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>


    )




    /*
    
    const handleEditButton = () => {
        setIsEditing(true);
    }

    return (
        <li>
            <span className="player">
            {isEditing ? (
                <input type="text" placeholder="Enter name"></input>
            ):(
                <span className='player-name'>{name}</span>
            )}
                <span className="player-symbol">{symbol}</span>
            </span>
        <button onClick={handleEditButton}>Edit</button>
        </li>
    )
        
    */

}