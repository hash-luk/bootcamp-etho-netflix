import { useCallback } from 'react';
import { Wrapper } from './login.styled';

export default function Login() {
    const handleChange = useCallback(
        (event: any) => {
            console.log(event.target.value);
        },
        []
    )

    return(
        <Wrapper container justifyContent="center" alignContent="center">
            <input type="email" name="email" onChange={handleChange}/>
        </Wrapper>
    )
}