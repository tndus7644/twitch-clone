import React,{useState} from 'react';
import styled from 'styled-components';
import {GlobalButton} from "../../../styled/Button.Styled";
import {SearchSvg} from "../svg";
import {useNavigate} from "react-router";

const SearchBox = () => {

    const [value, setValue] = useState('');

    const history = useNavigate();

    const navigate = (url) => {
        history(url)
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?term=${value}`);
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Label>
                    <Input type={"text"}
                           placeholder={"검색"}
                           value={value}
                           onChange={onChange}
                    />
                    <Button>
                        <SearchSvg/>
                    </Button>
                </Label>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  width: 400px;
`;

const Form = styled.form`
  display: block;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 5px;
  overflow: hidden;
  background: #e5e5e5;

`;

const Input = styled.input`
  display: block;
  padding: 8px;
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  
  &:hover{
    border: 2px solid #ddd;
  }

  &:focus {
    outline: 0;
    border: 2px solid #9047ff;
    background: #fff;
  }
`;

const Button = styled(GlobalButton)`
  background: #f9f9f9;
  height: 100%;

  svg {
    opacity: 0.3;
  }
`;

export default SearchBox;