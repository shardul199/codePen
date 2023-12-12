import Editor from "./Editor"
import { useContext } from "react"
import {Box,styled} from '@mui/material'
import { Datacontext } from "../Context/DataProvider"

const Container = styled(Box)`
    display:flex;
    background-color:#060606;
`
const Code = () =>{
    const {html, setHtml, css, setCss, js, setJs} = useContext(Datacontext);
    return(
        <Container>
            <Editor
            heading = "HTML"
            icon="/"
            color="#FF3C41"
            value={html}
            onChange={setHtml}/>
            <Editor
            heading="CSS"
            icon="*"
            color="#0EBEFF"
            value={css}
            onChange={setCss}/>
            <Editor
            heading="JavaScript"
            icon="()"
            color="#FCD000"
            value={js}
            onChange={setJs}/>
        </Container>
    )
}

export default Code;