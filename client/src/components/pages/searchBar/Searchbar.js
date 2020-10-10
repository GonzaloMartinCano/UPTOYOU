import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'


const Search = ({ searcher, filterCheck,filterCategory }) => {
    return (
        <>
            <InputGroup>
                <Form  inline onChange={searcher}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <select  onClick={filterCategory} name="select">
                    <option selected value="all">Todos los productos</option>
                    <option value="alimentación">Alimentación</option>
                    <option value="belleza">Belleza</option>
                    <option value="tecnología">Tecnología</option> 
                    <option value="food">Food</option>
                </select>
            </InputGroup>   
            <Form>
                
                <p>En stock <input onChange={filterCheck} type="checkbox" label="Check me out" /></p>
            </Form>

        </>
    )
}

export default Search