import { useState } from "react";
import { useContext } from "react";
import { FileContext } from "../FileProvider/FileProvider";

function CostRow({cost}) {
    console.log(cost);
    const costChildren = [...cost.children].map(costChild => costChild.innerHTML );
    console.log(costChildren);

    const [lp, data, nrDoc, nazwa, adres, kategoria, wartoscSprzedazy, _, __, ___, _____, ______, wartoscZakupu] = costChildren;

    return (
        // if(wartoscSprzedazy !== )
        <tr>
            <td>{data}</td>
            <td>{nrDoc}</td>
            <td>{nazwa === 'dokument wewnętrzny' ? nazwa : (<>{nazwa} <br /> {adres}</>)}</td>
            <td>{kategoria}</td>
            <td>{wartoscSprzedazy !== '0.00' ? wartoscSprzedazy : wartoscZakupu} </td>

            {/* {costChildren.map(costChild => (<td>{costChild}</td>))} */}
        </tr>

    );
}

export default CostRow;