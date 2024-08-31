import { Flex, Loader } from '@mantine/core';

export const LoadingScreen = () => {
    return (
        <div>
            <Flex h={'100vh'} align={'center'} justify={'center'}>
                <Loader color='blue' />
            </Flex>
        </div>
    );
};
