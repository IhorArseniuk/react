import {useEffect, useState} from "react";

import {DummyRefresh, getDummyResource} from "../../service/DummyService.ts";

import type {DummyQuotesType} from "../../models/DummyQuotesType.ts";
import {QuoteComponent} from "./QuoteComponent.tsx";

export const QuotesComponent = () => {
    const [quotes, setQuotes]=useState<DummyQuotesType[]>([])
    useEffect(() => {
        getDummyResource('quotes')
            .then(res=>{
                if(res.quotes){
                    setQuotes(res.quotes)
                }
            })
            .catch(errors =>{
                console.log(errors)
                DummyRefresh()
                    .then(()=>{
                        getDummyResource('quotes')
                            .then(res=>{
                                if(res.quotes){
                                    setQuotes(res.quotes)
                                }
                            })
                    })
            })
    },[])
    return (
        <div>
            <b>Quotes</b>
            {quotes.map((quote)=><QuoteComponent key={quote.id} quote={quote}/>)}
        </div>
    );
};
