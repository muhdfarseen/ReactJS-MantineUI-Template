import { Flex, Button, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <Flex p={8} h={'100vh'} align={'center'} justify={'center'} gap={2}>
                <Title color='red'>ERROR 404</Title>
                <Button onClick={handleGoHome} variant='light' color='red'>
                    Go Home
                </Button>
            </Flex>
        </>
    );
};
