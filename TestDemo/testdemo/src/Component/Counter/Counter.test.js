import {Counter} from './Counter' 
import { render,screen} from '@testing-library/react'

describe('counter component', ()=>{
    test('renders correctly or not', ()=>{
        render(<Counter/>);

        const nameElement=screen.getAllByRole("textbox",{
            name:"Name"
            // label text name not id or for name or text inside the heading component
        });
        expect(nameElement).toBeInTheDocument();
        

        const locationElement=screen.getAllByRole("combobox")
        expect(locationElement).toBeInTheDocument();


        const termsElement=screen.getAllByRole("checkbox")
        expect(termsElement).toBeInTheDocument()


        const submitButtonElement=screen.getByRole("button")
        expect(submitButtonElement).toBeInTheDocument()





    })
})