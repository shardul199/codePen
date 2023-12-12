import {Box, styled} from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { Datacontext } from '../Context/DataProvider'

const Container = styled(Box)`
    height:41vh;
    `

const Result = () =>{
    const {html, css, js} = useContext(Datacontext);
    const [src, setSrc] = useState('');
    const srcCode = `
        <html>
        <Body>${html}</Body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
    `
    useEffect(() => 
    {
      const timeout=  setTimeout(()=>{
            setSrc(srcCode);
        }, 1000 ) 
    return () => clearTimeout(timeout)  }, [html, css, js, srcCode])
    return(
        <Container>
            <iframe 
            srcDoc={src}
            title="Output"
            sandbox='allow-scripts'
            frameBorder={0}
            width='100%'
            height='100%'/>
        </Container>
    )
}

export default Result;