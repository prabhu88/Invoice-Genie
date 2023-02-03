import React,{useState} from 'react'
import styled from 'styled-components'
import {Col} from 'react-bootstrap'
const Wrapper = styled.div`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
// Invoice Header
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
`;
// Invoice Body
const Body = styled.div`
  padding: 0 30px;
`;
// Invoice Footer
const Footer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    flex: 1;
    margin: 0 10px;
    &:first-child {
      flex: 3;
    }
  }
`;
// Shared Style
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Field = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
  text-transform: capitalize;
  h2 {
    font-size: 16px;
    color: #283641;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 500;
  }
  label {
    font-size: 11px;
    color: #b4b7ba;
    text-transform: uppercase;
    letter-spacing: 1px;    
    font-weight: 400;
    margin-bottom: 4px;
  }
  p {
    font-weight: 300;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;
const StatusBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  border-radius: 4px 4px 0 0;
  ${props => props.status === 'pending' && `background: #469FE5;`} ${props =>
      props.status === 'paid' && `background: #6BBB69;`} ${props =>
      props.status === 'refunded' && `background: #4F555C;`} ${props =>
      props.status === 'cancelled' && `background: #EC476E;`};
`;
const Status = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${props => props.status === 'pending' && `color: #469FE5;`} ${props =>
      props.status === 'paid' && `color: #6BBB69;`} ${props =>
      props.status === 'refunded' && `color: #4F555C;`} ${props =>
      props.status === 'cancelled' && `color: #EC476E;`} span {
    display: flex;
    align-items: center;
    i {
      margin-right: 5px;
    }
  }
  i.ion-checkmark {
    font-size: 16px;
    line-height: 16px;
  }
  i.ion-loop {
    font-size: 18px;
    line-height: 18px;
  }
  i.ion-backspace {
    font-size: 18px;
    line-height: 18px;
  }
  i.ion-arrow-return-left {
    font-size: 18px;
    line-height: 18px;
  }
`;

const Inv_details = (props) => {
    
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const displayStatus = (status) =>{        
        switch(status){
            case 'cancelled': {
                return (
                  <span>
                    <i className="ion-backspace" />
                    {status}
                  </span>
                );
            }
            case 'paid': {
                return (
                  <span>                      
                    <i className="fas FaRecycle ion-checkmark" />
                    {status}
                  </span>
                );
            }
            case 'refunded': {
                return (
                  <span>
                    <i className="ion-arrow-return-left" />
                    {status}
                  </span>
                );
            }
            default: {
                return (
                    <span>
                    <i className="ion-loop" />
                    {status}
                    </span>
                );
            }
        }
    }
    return(
        <Col md={4}>
            <Wrapper>
                <StatusBar status={props.props.status} />
                <Header>
                    <Status status={props.props.status}>
                        {displayStatus(props.props.status)}
                    </Status>
                </Header>
                <Body>
                    <Row>
                        <Field>
                            <label>client</label>
                            <h2>{props.props.client_name}</h2>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <label>Invoice Id</label>
                            <p>
                            {props.props.invoice_id
                                ? props.props.invoice_id
                                : truncate(props.props._id, {
                                    length: 8,
                                    omission: '',
                                })}
                            </p>
                        </Field>
                        <Field>
                            <label>total value</label>
                            <p>
                            {props.props.currencyBefore ? props.props.currency.code : 'INR'}
                            {' '}
                            { props.props.amount
                            }
                            {' '}
                            {props.props.currencyBefore ? null : ''}
                            </p>
                        </Field>
                    </Row>
                </Body>
            </Wrapper>
        </Col>
    )
}
export default Inv_details