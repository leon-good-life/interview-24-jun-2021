import React from 'react';
import styled from 'styled-components';
import welcomeImg from '../assets/welcome.svg';
import Header from './Header';

const WelcomeContainer = styled.div`
    display: inline-flex;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: solid 1px #0055ba;
    border-radius: 10px;
    font-family: arial, sans-serif;

    img {
        width: 50%;
    }

    form {
        display: inline-block;
        width: 250px;
        padding: 0 calc(25% - (250px / 2));

        h1 {
            font-size: 16px;
            color: gray;
        }

        label {
            font-size: 14px;
            display: block;
            color: gray;
        }

        input,
        button {
            width: 100%;
            height: 30px;
            border-radius: 3px;
            border: solid 1px lightgray;
        }

        input {
            padding: 0 10px;
            box-sizing: border-box;
        }

        button {
            margin-top: 20px;
            background-color: #0055ba;
            color: #fff;
            cursor: pointer;
        }
    }
`;

const Welcome = ({ changeRoute }) => {
    const fullNameInputEl = React.useRef(null);
    const onSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('fullName', fullNameInputEl.current.value);
        changeRoute();
    };
    return (
        <>
            <Header />
            <WelcomeContainer>
                <form {...{ onSubmit }}>
                    <h1>What's your name?</h1>
                    <label htmlFor="fullName">Full name</label>
                    <input
                        ref={fullNameInputEl}
                        id="fullName"
                        name="fullName"
                    />
                    <button type="submit">Submit</button>
                </form>
                <img src={welcomeImg} alt="welcome page illustration" />
            </WelcomeContainer>
        </>
    );
};

export default Welcome;
