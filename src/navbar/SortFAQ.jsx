import React, { useEffect, useRef, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
    Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SortFAQ = () => {
    const [isVisible, setIsVisible] = useState(false);
    const faqRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        }

        return () => {
            if (faqRef.current) {
                observer.unobserve(faqRef.current);
            }
        };
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                padding: 1,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                background: 'linear-gradient(to bottom, black, #4D0F4A, #140514)',
                backdropFilter: 'blur(5px)',

            }}
            ref={faqRef}
        >
            <Typography
                variant="h3"
                sx={{
                    mt:4,

                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    mb: 4,
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                Frequently Asked Questions
            </Typography>

            <Box
                sx={{
                    margin: '40px',
                    padding: '2rem',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    '@media (max-width: 600px)': {
                        margin: '20px',
                        padding: '1rem',
                    },
                }}
            >
                <Paper elevation={0} sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
                    <div>
                        {faqItems.map((faq, index) => (
                            <React.Fragment key={index}>
                                <Accordion
                                    sx={{
                                        backgroundColor: 'transparent',
                                        opacity: isVisible ? 1 : 0,
                                        
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                sx={{
                                                    color: 'white',
                                                    transition: 'color 0.3s ease',
                                                    fontSize: '2.5rem',
                                                    '.Mui-expanded &': {
                                                        color: 'black',
                                                    },
                                                    '&:hover': {
                                                        color: 'black',
                                                    },
                                                }}
                                            />
                                        }
                                        aria-controls={`faq${index}-content`}
                                        id={`faq${index}-header`}
                                        sx={{
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: 'white',
                                            },
                                            '&.Mui-expanded': {
                                                backgroundColor: 'white',
                                                color: 'black',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '100%',
                                                '&:hover': {
                                                        color: 'white',
                                                    },
                                                    '&.Mui-expanded': {
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                    },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Arial, sans-serif',
                                                    fontSize: '2rem', // Increased font size
                                                    fontWeight: 'bold', // Bold styling
                                                    color: 'white',
                                                    marginRight: '10px',
                                                    minWidth: '50px', // Adjusted for alignment
                                                    textAlign: 'left',
                                                    '&:hover': {
                                                        color: 'black',
                                                    },
                                                    '&.Mui-expanded': {
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                    },
                                                }}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Arial, sans-serif',
                                                    fontSize: '1.25rem',
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    flex: 1,
                                                    '&:hover': {
                                                        color: 'black',
                                                    },
                                                    '&.Mui-expanded': {
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                    },

                                                }}
                                            >
                                                {faq.question}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>

                                    <AccordionDetails
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            color: 'white',
                                            fontSize: '1rem',
                                            padding: '1rem 1.8rem',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography sx={{ fontFamily: 'Arial, sans-serif', color: 'inherit' }}>
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                {/* White line separator between boxes */}
                                {index < faqItems.length - 1 && (
                                    <Divider
                                        sx={{
                                            backgroundColor: 'white',
                                            height: '3px',
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </Paper>
            </Box>
        </Box>
    );
};

const faqItems = [
    {
        question: 'What is 120daysfinance.com?',
        answer: '120daysfinance.com is a lending platform offering short-term loans to small businesses across India. Our loans are specifically designed for a tenure of 120 days, providing quick financial assistance to meet your business\'s operational and working capital needs.',
    },
    {
        question: 'Who can apply for a loan?',
        answer: 'Any small business owner operating in India, whether registered as an individual proprietor, partnership, or private limited company, can apply for a loan, provided they meet our eligibility criteria.',
    },
    {
        question: 'What kind of loans do you offer?',
        answer: '120daysfinance.com offers short-term business loans for small enterprises, helping them cover operational expenses, manage cash flow, or seize new business opportunities, all with a tenure of 120 days.',
    },
    {
        question: 'What loan amount can I borrow?',
        answer: 'We provide loans ranging from INR 50,000 to INR 5 lakhs, depending on the business\'s needs, repayment capacity, and eligibility.',
    },
    {
        question: 'Unlock your business\'s true potential',
        answer: 'Unlock your business\'s true potential with flexible financing solutions tailored to your growth.',
    },
];

export default SortFAQ;
