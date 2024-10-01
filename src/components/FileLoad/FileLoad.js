import { useState } from "react";
import { useContext } from "react";
import { FileContext } from "../FileProvider/FileProvider";
import { useEffect } from "react";
function FileLoad() {
    const [error, setError] = useState(false);
    //const [fileContent, setFileContent] = useState("");
    const { setFileContent } = useContext(FileContext); // Get the setter from contextconst { setFileContent } = useContext(FileContext); // Get the setter from context
    const loadFile = (event) => {
        event.preventDefault();
        const file = event.target.plik.files[0];
        setError(false);
        if (file) {
            const reader = new FileReader();
            console.log('file', file);
            // // Define what happens when the file is read
            reader.onload = function (event) {
                console.log('file event', event);
                setFileContent(event.target.result); // Update the context with the file content
            };

            // // Read the file as text (you can use readAsDataURL or others as needed)
            reader.readAsText(file);
        } else {
            setError('Nie wskazałeś pliku!');
            // console.log("No file selected.");
        }
    }

    useEffect(() => {
        if(error) {
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
    }, [error])

    const handleChange = (e) => {
        if(e.target.value && error) {
            setError(false);
        }
        console.log(e.target.value);
    }

    return (
        <>
            <form onSubmit={loadFile}>
                <input type="file" name="plik" onChange={handleChange}></input>
                {error && <div>{error}</div>}
                <button type="submit">Wczytaj plik</button>
            </form>
        </>

    );
}

export default FileLoad;