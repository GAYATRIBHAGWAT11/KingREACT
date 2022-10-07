import React,{useState} from 'react';
import Data from './Data';
import List from './List';
import '/Users/admin/React/my-app/src/React15Projects/BirthdayReminder01/Style.css'
function MainApp(){
    const [people,setPeople]=useState(Data)
    return(
        <>
       <main>
       <section className='container'>
            <h3>{people.length} b'day today</h3>
            <List people={people}/>
            <button onClick={()=>setPeople([])}>clear all</button>
        </section>
       </main>
        </>
    )
}
export default MainApp;