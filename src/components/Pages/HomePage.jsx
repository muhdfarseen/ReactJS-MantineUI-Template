import { Flex, Text, Button, Title, Box, Badge, Anchor } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

export const HomePage = () => {
    return (
        <div>
            <Flex p={50} h={'100vh'} direction='column' align={'center'} justify={'space-between'} gap='2'>
                <Box></Box>
                <Flex direction='column' align={'center'} justify={'space-between'} gap='2'>
                    <Title>React-Js Mantine UI Template</Title>
                    <Flex mt={5} gap='2' wrap={'wrap'}>
                        <Badge variant='light' color='blue'>
                            Vite
                        </Badge>
                        <Badge variant='light' color='green'>
                            Minimal Folder Structure
                        </Badge>
                        <Badge variant='light' color='violet'>
                            Prettier
                        </Badge>
                        <Badge variant='light' color='pink'>
                            Eslint
                        </Badge>
                        <Badge variant='light' color='yellow'>
                            Husky
                        </Badge>
                        <Badge variant='light' color='orange'>
                            React Router Dom
                        </Badge>
                        <Badge variant='light' color='indigo'>
                            Tabler Icons{' '}
                        </Badge>
                    </Flex>
                    <a target='_blank' href='https://github.com/muhdfarseen/ReactJS-Mantine-Template'>
                        <Button radius={'md'} leftSection={<IconBrandGithub size={18} />} mt={20} color='blue'>
                            Star on GitHub
                        </Button>
                    </a>
                </Flex>

                <Text>
                    A starter template Made with ❤️ From{' '}
                    <Anchor c='gray' target='_blank' href='https://github.com/muhdfarseen'>
                        muhdfarseen
                    </Anchor>
                </Text>
            </Flex>
        </div>
    );
};
