import React, { useState } from 'react';
import {IState as Props} from '../App'


interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  }

const AddToList: React.FC<IProps> = ({people, setPeople}) =>{
    const [input, setInput] = useState({
        name: '',
        age: '',
        img: '',
        note: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value 
        })
    }

    const handleClick = (): void =>{
        // console.log('clicked')
        if (
            !input.name || 
            !input.age ||
            !input.img
            ) {
                return
        }
        setPeople ([
            ...people,
            {
                age: parseInt(input.age),
                name: input.name,
                url: input.img,
                note: input.note
            }
        ])

        setInput({
            name: '',
            age:'',
            note: '',
            img: ''
        })
    }


    return (
        <div className="AddToList">
            <input 
                className="AddToList-input"
                type="text" 
                name ="name"
                placeholder="Name"
                value = {input.name}
                onChange = {handleChange}
                
            />            
            <input 
                className="AddToList-input"
                type="number" 
                name ="age"
                placeholder="Age"
                value = {input.age}
                onChange = {handleChange}
            />            
            <input 
                className="AddToList-input"
                type="text" 
                name ="img"
                placeholder="Image Url"
                value = {input.img}
                onChange = {handleChange}
            />            
            <textarea
                className="AddToList-input"
                name ="note"
                placeholder="Notes"
                value = {input.note}
                onChange = {handleChange}
            />   

            <button
                className="AddToList-btn"
                onClick = {handleClick}
            >Add To List</button>         
        </div>
    )
}

export default AddToList