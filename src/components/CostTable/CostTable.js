import { useState } from "react";
import { useContext } from "react";
import { FileContext } from "../FileProvider/FileProvider";
import CostRow from "../CostRow/CostRow";
function CostTable() {
    const { fileContent } = useContext(FileContext);
    // const [costs, setCosts] = useState([]);

    const xmlDoc = new window.DOMParser().parseFromString(fileContent, 'application/xml');
    console.log('xmlDoc', xmlDoc);
    const costs = xmlDoc.querySelectorAll('PKPIRWiersz[typ="G"]');
    // ZADANIE: Wyświetl błąd jeżeli długość jest zerowa (plik jest nie odpowiedni, lub niezgodny ze standardem jpk)
    console.log('costs', costs);
    return (
        <>
            {fileContent && (
                <>
                <h1>Cost table</h1>
                <table>
                    {[...costs].map(cost => <CostRow cost={cost}/>)}
                </table>
                </>
            )}
        </>

    );
}

export default CostTable;