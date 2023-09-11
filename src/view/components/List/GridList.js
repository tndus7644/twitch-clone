import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const GridList = ({data, renderItem, direction = 'row', shape}) => {

    return (
        <Container className={cn("gridList", direction)}>
            <Row>
                {data.map((item, index) => (
                        <Col key={index} className={shape}>
                            {renderItem(item)}
                        </Col>
                    )
                )}
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  
  .row &{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
  
  .column &{
  }
`;

const Col = styled.div`
  .row &{
    width: 20%;
    padding: 10px;
    
  }
`;

export default GridList;