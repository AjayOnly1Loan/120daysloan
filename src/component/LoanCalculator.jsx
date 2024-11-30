import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Slider,
    Button,
    Link,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
   
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';

const slideInLeft = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000);
    const [loanTenure, setLoanTenure] = useState(1);
    const [interestRate, setInterestRate] = useState(0.5);
    const [totalAmount, setTotalAmount] = useState(51000);
    const [dailyPayment, setDailyPayment] = useState(0);
    const [showDialog, setShowDialog] = useState(false); // State for dialog visibility

    const handleLoanAmountChange = (event, newValue) => {
        setLoanAmount(newValue);
    };

    const handleLoanTenureChange = (event, newValue) => {
        setLoanTenure(newValue);
    };

    const handleInterestRateChange = (event, newValue) => {
        setInterestRate(newValue);
    };

    const calculateTotalAmount = () => {
        const totalInterest = (loanAmount * interestRate * loanTenure) / 100;
        const total = loanAmount + totalInterest;
        setTotalAmount(total);
        setDailyPayment((total / loanTenure).toFixed(2)); // Calculate daily payment
    };

    useEffect(() => {
        calculateTotalAmount();
    }, [loanAmount, loanTenure, interestRate]);

    const { ref: calculatorRef, inView: calculatorInView } = useInView({ triggerOnce: false });
    const { ref: detailsRef, inView: detailsInView } = useInView({ triggerOnce: false });

    
    const handleCloseDialog = () => {
        setShowDialog(false);
    };


    return (
        <Box
            sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                paddingY: 4, // Adds vertical padding
                background: 'linear-gradient(to bottom, #140514, #4D0F4A, black)', // Top-to-bottom gradient
              
            }}
        >
            <Box sx={{ marginTop: 4, marginBottom: 4 }}>
                <Container>
                    <Typography  align="center" gutterBottom sx={{fontWeight:'bold', color: 'white',fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' } // Adjust font size based on screen size
                        }}>
                        Personal Loan Calculator
                    </Typography>
                    <Typography  align="center" gutterBottom sx={{ color: 'white',fontSize:{xs: '16px', sm: '22px' } }}>
                    "Easily estimate your loan details with our handy calculator. See how different loan amounts, tenures, and interest rates impact your total payable amount. Find out exactly what you'll owe and plan your finances confidently."                    </Typography>

                    <Grid container spacing={0} justifyContent="center">
                        <Grid item xs={12} md={12}>
                            <Paper
                                elevation={12}
                                sx={{
                                    mt:5,
                                    padding: 3,
                                    borderRadius: 10,
                                    borderright:'none',

                                    textAlign: 'center',
                                    background: 'white', // Transparent background to see blur effect
                                    color: 'black',
                                    minHeight: '400px',
                                    animation: calculatorInView ? `${slideInLeft} 0.5s ease` : 'none',
                                    display: 'flex',
                                    flexDirection:{xs:'column',md:'row'} ,
                                }}
                                ref={calculatorRef}
                            >
                            <Box sx={{ width: { xs: '100%', sm: '50%' }, padding: { xs: 3, sm: 5 } }}>
                                <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'left' }}>
                                    Loan Amount (₹)
                                </Typography>
                                <TextField
                                    type="number"
                                    value={loanAmount}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        if (value >= 5000 && value <= 100000) {
                                            setLoanAmount(value);  // Update only if within the valid range
                                        }
                                    }}
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        marginBottom: 2, // margin at the bottom
                                        background: 'transparent',
                                        borderRadius: '16px', // Rounded border
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '16px', // Ensure the border radius applies to the input field
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)', // Default border color
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#1976d2', // Border color on hover
                                        },
                                    }}
                                />
                                <Slider
                                    value={loanAmount}
                                    min={5000}
                                    max={100000}
                                    onChange={handleLoanAmountChange}
                                    valueLabelDisplay="auto"
                                    marks={[{ value: 5000, label: '5K' }, { value: 100000, label: '100K' }]}
                                    sx={{
                                        color: 'black',
                                        height: 8,
                                        marginBottom: 2,
                                        '& .MuiSlider-markLabel[data-index="0"]': {
                                            transform: 'translateX(5%)', // Shift min label to the right
                                        },
                                        '& .MuiSlider-markLabel[data-index="1"]': {
                                            transform: 'translateX(-90%)', // Shift max label to the left
                                        },
                                    }}
                                />
                                <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'left' }}>
                                    Loan Tenure (Days)
                                </Typography>
                                <TextField
                                    type="number"
                                    value={loanTenure}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        if (value >= 1 && value <= 90) {
                                            setLoanTenure(value);  // Update only if within the valid range
                                        }
                                    }}
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        marginBottom: 2, // margin at the bottom
                                        background: 'transparent',
                                        borderRadius: '16px', // Rounded border
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '16px', // Ensure the border radius applies to the input field
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)', // Default border color
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#1976d2', // Border color on hover
                                        },
                                    }}
                                />
                                <Slider
                                    value={loanTenure}
                                    min={1}
                                    max={90}
                                    onChange={handleLoanTenureChange}
                                    valueLabelDisplay="auto"
                                    marks={[{ value: 1, label: '1' }, { value: 90, label: '90' }]}
                                    sx={{
                                        color: 'black',
                                        height: 8,
                                        marginBottom: 2,
                                        '& .MuiSlider-markLabel[data-index="0"]': {
                                            transform: 'translateX(5%)', // Shift min label to the right
                                        },
                                        '& .MuiSlider-markLabel[data-index="1"]': {
                                            transform: 'translateX(-90%)', // Shift max label to the left
                                        },
                                    }}
                                />
                                <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'left' }}>
                                    Interest Rate (%)
                                </Typography>
                                <TextField
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        if (value >= 0.5 && value <= 2.75) {
                                            setInterestRate(value);  // Update only if within the valid range
                                        }
                                    }}
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        marginBottom: 1, // margin at the bottom
                                        background: 'transparent',
                                        borderRadius: '16px', // Rounded border
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '16px', // Ensure the border radius applies to the input field
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)', // Default border color
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#1976d2', // Border color on hover
                                        },
                                    }}
                                />
                                <Slider
                                    value={interestRate}
                                    min={0.5}
                                    max={2.75}
                                    step={0.1}
                                    onChange={handleInterestRateChange}
                                    valueLabelDisplay="auto"
                                    marks={[{ value: 0.5, label: '0.5%' }, { value: 2.75, label: '2.75%' }]}
                                    sx={{
                                        color: 'black',
                                        height: 8,
                                        marginBottom: 2,
                                        '& .MuiSlider-markLabel[data-index="0"]': {
                                            transform: 'translateX(5%)', // Shift min label to the right
                                        },
                                        '& .MuiSlider-markLabel[data-index="1"]': {
                                            transform: 'translateX(-90%)', // Shift max label to the left
                                        },
                                    }}
                                />
                                <Button
                                    component={Link}
                                    href="/apply-now"
                                    variant="contained"
                                    sx={{
                                        marginTop: 2,
                                        backgroundColor: '#4D0F4A',
                                        borderRadius: '16px',
                                        paddingY: 2,
                                        paddingX:{xs:14,md:27},
                                    }}
                                >
                                    <Typography>₹{totalAmount}</Typography>
                                </Button>
                            </Box>

                             <Box sx={{ width: { xs: '100%', sm: '80%', md: '50%' }, padding: { xs: 2, sm: 4, md: 5 } }}>
                            
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }
                                }}
                            >
                                Clarity in Lending
                            </Typography>
                            <Typography variant="h6">
                                Detailed information to help you understand your financial commitment.
                            </Typography>
                            <Typography sx={{ marginTop: 3, fontSize: '1.5rem', fontWeight: 'bold' }}>
                                You have to pay
                            </Typography>

                            <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                ₹{totalAmount}
                            </Typography>

                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        <TableRow
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '20px', // Adjusted gap for responsiveness
                                                padding: '16px 0',
                                            }}
                                        >
                                            <TableCell
                                                align="center"
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    borderBottom: 'none',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                <Typography variant="subtitle1">Interest Rate:</Typography>
                                                <Typography variant="h6">{interestRate}%</Typography>
                                            </TableCell>

                                            {/* Divider line */}
                                            <div
                                                sx={{
                                                    borderLeft: '2px solid black',
                                                    height: '50px',
                                                    margin: '0 16px',
                                                }}
                                            ></div>

                                            <TableCell
                                                align="center"
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    borderBottom: 'none',
                                                }}
                                            >
                                                <Typography variant="subtitle1">Loan Tenure:</Typography>
                                                <Typography variant="h6">{loanTenure} days</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Button
                                component={Link}
                                href="/apply-now"
                                variant="contained"
                                sx={{
                                    marginTop:{xs:5,md:19} ,
                                    backgroundColor: '#4D0F4A',
                                    borderRadius: '16px',
                                    paddingY: 2,
                                    paddingX:{xs:10,md:25},
                                    color: 'white',
                                    textTransform: 'none',
                                    width: { xs: '100%', sm: 'auto' }, // Make the button full width on small screens
                                }}
                            >
                                Apply Now
                            </Button>
                            </Box>

                            </Paper>
                            </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default LoanCalculator;
