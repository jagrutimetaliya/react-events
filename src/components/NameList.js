import React from 'react'
import PersonList from './PersonList'

function NameList() {
    // const names = ['jagruti','pari','jassi']
    const persons = [{
        id : 1, 
        name : 'jagruti',
        age : 28,
        skill : 'vue'

    },{
        id : 3, 
        name : 'pari',
        age : 2,
        skill : 'js'
        
    },{
        id : 2, 
        name : 'jassi',
        age : 2,
        skill : 'laravel'
        
    }]
   // const nameList = names.map(name =><h2>{name}</h2>)
    const personList = persons.map(person => <PersonList key={person.name} person={person}/>)
    return (
        <div>{personList}</div>
    )
}

export default NameList
