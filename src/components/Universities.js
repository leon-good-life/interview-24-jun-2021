import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding: 25px;
    border: solid 1px lightgray;
    margin-top: 50px;
`;

const SearchForm = styled.form`
    display: flex;
    height: 50px;

    input {
        flex-grow: 1;
        padding: 0 15px;
    }
    button {
        background-color: #0055ba;
        color: #fff;
        border: none;
        width: 100px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    }
`;

const Table = styled.table`
    th {
        text-align: left;
    }
    th,
    td {
        padding-left: 15px;
    }
`;

const Universities = () => {
    const searchInputEl = React.useRef(null);
    const [universitiesList, setUniversitiesList] = React.useState([]);
    const onSearchSubmit = (event) => {
        event.preventDefault();
        const query = searchInputEl.current.value;
        const url = `${
            window.location.protocol
        }//universities.hipolabs.com/search?name=${encodeURIComponent(query)}`;
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                const { status, statusText } = response;
                throw Error(JSON.stringify({ status, statusText }));
            })
            .then((responseJson) => {
                console.log(responseJson);
                setUniversitiesList(responseJson);
            })
            .catch((error) => console.error(error));
    };
    return (
        <div>
            <Header />
            <Container>
                <SearchForm onSubmit={onSearchSubmit}>
                    <input ref={searchInputEl} />
                    <button>Search</button>
                </SearchForm>
            </Container>
            {universitiesList.length > 0 && (
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>URL</th>
                                <th>Starred</th>
                            </tr>
                        </thead>
                        <tbody>
                            {universitiesList.map((university) => (
                                <tr key={university.name}>
                                    <td>{university.name}</td>
                                    <td>{university.country}</td>
                                    <td>{university.domains[0]}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            )}
        </div>
    );
};

export default Universities;
