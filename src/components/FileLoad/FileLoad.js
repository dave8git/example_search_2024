import { useState } from "react";
import { useContext } from "react";
import { FileContext } from "../FileProvider/FileProvider";

function FileLoad() {
    const [error, setError] = useState(false);
    //const [fileContent, setFileContent] = useState("");
    const { setFileContent } = useContext(FileContext); // Get the setter from contextconst { setFileContent } = useContext(FileContext); // Get the setter from context
    const loadFile = (event) => {
        event.preventDefault();
        const file = event.target.plik.files[0];
        setError(false);
        console.log(event);
        if (file) {
            const reader = new FileReader();
            console.log(file);
            // // Define what happens when the file is read
            reader.onload = function (event) {
                setFileContent(event.target.result); // Update the context with the file content
            };

            // // Read the file as text (you can use readAsDataURL or others as needed)
            reader.readAsText(file);
        } else {
            setError('Nie wskazałeś pliku!');
            // console.log("No file selected.");
        }
    }

    return (
        <>
            <form onSubmit={loadFile}>
                <input type="file" name="plik"></input>
                {error && <div>{error}</div>}
                <button type="submit">Wczytaj plik</button>
            </form>
        </>

    );
}

export default FileLoad;