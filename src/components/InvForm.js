import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import {Formik} from 'formik'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function InvForm({onSubmit}) {

    const initialValues = {
        initialInvestment: 0,
        monthlyContribution: 0,
        interestRate: 6.5,
        tax: 13,
        compoundFreq: 12,
        timeLength: 60,
    }

    const classes = useStyles();

    const onSubmitCb = useCallback((values) => {

        const {
            initialInvestment,
            monthlyContribution,
            interestRate,
            tax,
            compoundFreq,
            timeLength,
        } = values

        const resultsList = []
        const conpoundFreqInt = parseInt(compoundFreq)
        const timeLengthInt = parseInt(timeLength)
        const initialInvestmentFl = parseFloat(initialInvestment)
        const iterations = Math.ceil(conpoundFreqInt * (timeLengthInt / 12))
        const periodRate = (parseFloat(interestRate) / 100) / conpoundFreqInt
        const periodTaxRate = parseFloat(tax) / 100
        const periodContribution = parseFloat(monthlyContribution) / (conpoundFreqInt / 12)
        let sum = initialInvestmentFl
        let investmentsTotal = initialInvestmentFl
        let incomeNetTotal = 0
        let taxTotal = 0

        for (let i=0; i<iterations; i++) {
            sum+=periodContribution
            investmentsTotal+=periodContribution

            const incomeGross = sum * periodRate
            const tax = incomeGross*periodTaxRate
            const incomeNet = incomeGross - tax
            incomeNetTotal+=incomeNet

            sum+=incomeNet
            taxTotal+=tax

            resultsList.push(sum)
        }

        const result = {
            periods: resultsList,
            compoundFreq: conpoundFreqInt,
            timeLength: timeLengthInt,
            investmentsTotal: Math.round(investmentsTotal * 100) / 100,
            incomeNetTotal: Math.round(incomeNetTotal * 100) / 100,
            sum: Math.round(sum * 100) / 100,
            taxTotal: Math.round(taxTotal * 100) / 100,
        }

        onSubmit && onSubmit(result)
    }, [onSubmit])

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitCb}
        >
            {props => (
                <form onSubmit={props.handleSubmit} className={classes.root} >
                    <Box>
                        <TextField label="Initial investment"
                                   name="initialInvestment"
                                   onChange={props.handleChange}
                                   value={props.values.initialInvestment} />
                        <TextField label="Monthly contribution"
                                   name="monthlyContribution"
                                   onChange={props.handleChange}
                                   value={props.values.monthlyContribution} />
                    </Box>
                    <Box>
                        <TextField label="Interest rate (%)"
                                   name="interestRate"
                                   onChange={props.handleChange}
                                   value={props.values.interestRate} />
                        <TextField label="Tax (%)"
                                   name="tax"
                                   onChange={props.handleChange}
                                   value={props.values.tax} />
                    </Box>

                    <Box>
                        <TextField label="Compound frequency"
                                   name="compoundFreq"
                                   onChange={props.handleChange}
                                   value={props.values.compoundFreq} />
                        <TextField label="Time (months)"
                                   name="timeLength"
                                   onChange={props.handleChange}
                                   value={props.values.timeLength} />
                    </Box>

                    <Button variant="outlined" color="primary" type="submit">
                        Calculate
                    </Button>
                </form>
            )}
        </Formik>

    )
}

InvForm.propTypes = {}
InvForm.defaultProps = {}

export default InvForm
