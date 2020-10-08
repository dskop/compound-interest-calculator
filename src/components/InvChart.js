import React, {useCallback} from 'react'
import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts'
import {Box, Typography} from '@material-ui/core'

function InvChart({data}) {
    const tooltipFormatter = useCallback((value, name, props) => {
        const roundedSum = Math.round(value*100)/100
        const roundedIncome = Math.round(props.payload.income*100)/100

        return ([`${roundedSum} (income: ${roundedIncome})`, `Sum`] )
    }, [])
    const tooltipLabelFormatter = useCallback((value, name, props) => (`Period ${value}`), [])

    if (!data)
        return null

    const mappedData = data.periods.map((p, i) => ({
        name: i + 1,
        val: p.sum,
        income: p.incomeNet,
    }))

    const {
        investmentsTotal,
        incomeNetTotal,
        sum,
        taxTotal,
    } = data

    return (
        <Box style={{marginTop: '30px'}}>
            <BarChart width={1000}
                      height={400}
                      margin={{
                          top: 20, right: 0, left: 0, bottom: 5,
                      }}
                      data={mappedData} >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip labelFormatter={tooltipLabelFormatter}
                         formatter={tooltipFormatter}
                />
                <Bar dataKey="val" fill="#8884d8" />
            </BarChart>
            <Typography variant="h5" style={{marginBottom: '30px'}}>
                Investments: {investmentsTotal} &emsp;&emsp; Net income: {incomeNetTotal} &emsp;&emsp; Tax: {(-1)*taxTotal} &emsp;&emsp; Total: {sum}
            </Typography>
        </Box>

    )
}

InvChart.propTypes = {}
InvChart.defaultProps = {}

export default InvChart
