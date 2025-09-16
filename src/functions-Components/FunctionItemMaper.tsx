export const FunctionItemMaper = (item: { [s: string]: unknown } | ArrayLike<unknown>) => {
    return (
        <>

            {Object.entries(item).map(([key, value],index) => {

            if(typeof value === 'object' &&  value !== null){

                return (
                    <ul key={index}>
                        {Object.entries(value).map(([ItemKey, ItemValue],index) => {
                            <li>{ItemKey}-{String(ItemValue)}</li>

                            if(typeof ItemValue==='object'){


                                return (
                                    <ul key={index}>{ItemKey}

                                        { Object.entries(ItemValue).map(([iTKey,iTValue],index)=>( <li key={index}>{iTKey}-{String(iTValue)}</li>))}
                                    </ul>
                                )
                            }



                        })}

                    </ul>
                )
            }

            if(Array.isArray(value) && value !== null){

                    return (
                        <ul>{value}
                            {  value.map(([key, value],index)=>(
                            <li  key={index}>{key}-{String(value)}</li>))}
                        </ul>
                    )
                }

           else return  (
               <p key={index}>{key}-{String(value)}</p>
           )  })

        }
</>
    )

    }


