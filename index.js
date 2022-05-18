const axios=require ('axios')
const cheerio=require ('cheerio')
const express = require ('express')



const app=express()
const url='https://www.southbendtribune.com/lifestyle/'


axios(url)
    .then(res => {
        const html=res.data
        const $ = cheerio.load(html)
        const reports=[]
        $('.gnt_m_flm_a', html).each(function(){
            const story=$(this).attr('data-c-br')
            const link=$(this).attr('href')
            
            reports.push({
                story,
                link
            })
        })
        console.log(reports)
        return reports
    })
    .catch((err)=>console.log(err))



app.listen(8000,()=>console.log(`server listening on 8000`))

