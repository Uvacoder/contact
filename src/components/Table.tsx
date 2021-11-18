import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px dotted #686868;
`;

const Header = styled.div`
    padding: 1rem 1rem 1rem 1rem;
    border-bottom: 1px dotted #686868;
`;

const Body = styled.div`
`;

const Column = styled.div`
    padding: 1rem;
`;

const Columns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    ${Column} + ${Column} {
        border-left: 1px dotted #686868;
    }
`;

export const Table: FC<{ header: React.ReactNode | null, children: React.ReactNode | (() => React.ReactNode[]) }> = ({ children, header }) => {

    return (
        <Wrapper>
            {header &&
                <Header>
                    {
                        header
                    }
                </Header>
            }
            <Body>
                {
                    typeof children == 'function' ? (
                        <Columns> {
                            children().map((column: React.ReactNode, i: number) => (
                                <Column key={i}>
                                    {column}
                                </Column>
                            ))}
                        </Columns>
                    ) : <Column>{children}</Column>
                }
            </Body>
        </Wrapper>
    )
}