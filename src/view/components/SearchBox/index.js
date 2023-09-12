import React, {useState} from 'react';
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
  border-radius: 5px;
  overflow: hidden;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 36px;
  background: #18181b;

`;

const Input = styled.input`
  display: block;
  padding: 8px;
  flex: 1;
  height: 100%;
  background: none;
  border: 1px solid #67676b;

  &:hover {
    border: 2px solid #67676b;
  }

  &:focus {
    outline: 0;
    border: 2px solid #9047ff;
  }
`;

const Button = styled(GlobalButton)`
  background: #2f2f35;
  height: 100%;

  svg {
    opacity: 0.3;
  }
`;

export default SearchBox;