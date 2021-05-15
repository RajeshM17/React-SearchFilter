export default function Datatable({data}){
    const columns=data[0]&&Object.keys(data[0]);
    return(
    <table border="1" cellPadding={5} cellSpacing={1}>
        <thead>
            <tr>{data[0]&&columns.map((heading)=><th style={{backgroundColor:"#333" }}>{heading.toUpperCase()}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row=><tr>{
                columns.map(column=><td>
                    {
                        console.log(column)
                    }
                            {column==="isMarried"?row.isMarried ? 'Married' : 'Unmarried':row[column]}
                                  
                    
                </td>)
            }</tr>)}
        </tbody>
    
    </table>
    );
}