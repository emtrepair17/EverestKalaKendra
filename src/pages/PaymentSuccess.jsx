
import * as React from 'react';
import { Box, useTheme } from '@mui/material';

function PaymentSuccess() {
    const theme = useTheme();

    
    return (
        <Box sx={{ 
            py: 8,
            px: 2,
            backgroundColor: theme.palette.background.default
        }}>
            <h1>your payment was successful</h1>
        </Box>
    );
}

export default PaymentSuccess;