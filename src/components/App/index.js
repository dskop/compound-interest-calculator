import React, {useCallback, useState} from 'react';
import {Container, Typography} from '@material-ui/core'
import InvForm from '../InvForm'
import InvChart from '../InvChart'

function App() {
    const [data, setData] = useState(null)

    const onSubmitCb = useCallback(data => {
        setData(data)
    }, [])

    return (
        <Container fixed={true}>
            <Typography variant="h4" style={{marginBottom: '30px'}}>
                Compound interest calculator
            </Typography>
            <InvForm onSubmit={onSubmitCb}/>
            <InvChart data={data} />
        </Container>
    );
}

export default App;
