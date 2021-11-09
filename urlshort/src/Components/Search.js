import React, { useState } from 'react'
import Api from '../Api'

const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;


function Search() {
    const [link, setLink] = useState('');
    const [short, setShort] = useState('');
    const [loading, setLoading] = useState(false);


    // Submit form function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkLink(link)) {
            getLink(link);
            setLink('');
            setLoading(!loading);
        }
    };

    // Link Validation Function
    const checkLink = (string) => {
        // Regex to check if string is a valid URL
        return string.match(HTTP_URL_VALIDATOR_REGEX);
    };

    // Function that calls the API if link is valid
    const getLink = async () => {
        await Api
            .get(`shorten?url=${link}`)
            .then((response) => {
                setShort(response.data.result.full_short_link);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://ouch-cdn2.icons8.com/Jn8CNsMprIuuw7t34EzfWGe9C8dE4N-fpk5dZaOiVio/rs:fit:1045:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91aS1lbGVt/LzExOC9jMzJkOWJk/Zi01MjE1LTQ2YjUt/YjMwNy0yMWNmZmI5/NzdiZjQucG5n.png" alt="" width="760" height="460" />
                    </div>
                    <div className="col-md-5 my-auto">
                        <input
                            className="form-control"
                            placeholder="Enter the link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                        <button className="btn btn-primary my-4" onClick={(e) => handleSubmit(e)}>Submit</button>
                        <br />
                        <br />
                        {short && (
                            <div>
                                <a style={{ backgroundColor: "#3A6073", color: "white", padding: "15px", textDecoration: "none", fontWeight: "bold" }} href={short} target="_blank">Short Link Generated: {short}</a>
                                <h5 className="mt-4">{short}</h5>
                            </div>
                        )}


                    </div>

                </div>

            </div>

        </>
    );
};

export default Search
