import React from 'react';
import { IState as IProps } from '../App'


// interface IProps {
//     people: {
//       name: string
//       age: number
//       url: string
//       note?: string
//     }[]
//   }
  

// const List = ({people}: IProps) => {
const List: React.FC<IProps> = ({ people }) => {
    
    const renderList = (): JSX.Element[] =>{
         return people.map(person =>{
            return (
                <li className="List">
                    <div className="List-header">
                        <img src={person.url} alt="" className="List-img" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    } 


    return (
        <ul>
            { 
              renderList()  
            //  people.map(person => <div>
            //      <img style ={{}} src={person.url} alt="" />
            //     <p> Name: {person.name}</p>
            //      <p>Age: {person.age}</p>
            //      <p>Note: {person.note}</p>
            //      </div> )
            }
        </ul>
    )
}

export default List;