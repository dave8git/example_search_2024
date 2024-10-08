import { useContext } from "react";
import { FileContext } from "../FileProvider/FileProvider";
import { useState } from 'react';


function FileSearch() {
    const { fileContent } = useContext(FileContext);
    const [foundElements, setFoundElements] = useState([]);
    const [searchTag, setSearchTag] = useState(''); 

    const xmlDoc = new window.DOMParser().parseFromString(fileContent, 'application/xml');
    console.log('xmlDoc', xmlDoc);

    const searchXML = () => {
        console.log(searchTag);
        const elements = xmlDoc.getElementsByTagName(searchTag);
        console.log('elements', elements.length);

        if (elements.length !== 0) {
            const elementsArray = [...elements].map(element => element.outerHTML); // outerHTML bierze tagi i tekst w środku
            setFoundElements(elementsArray);
        }
    
    }
    console.log('foundElements', foundElements);
    const handleInputChange = (event) => {
        setSearchTag(event.target.value);
    }

    return (
        fileContent && (
            <>
                <input value={searchTag} type="text" id="searchTag" placeholder="Enter tag name" onChange={handleInputChange} />
                <button onClick={searchXML} type="submit">Search</button>
                {foundElements.map(element => <pre>{element}</pre>)}
            </>
        )
    );

}

export default FileSearch;

