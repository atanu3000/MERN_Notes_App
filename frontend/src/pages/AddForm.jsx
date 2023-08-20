import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'animate.css/animate.min.css';

export default function AddForm() {
    const [note, setNote] = useState({
        title: "",
        details: "",
    });

    const changeHandler = (event) => {
      const { name, value} = event.target;
      setNote( {...note, [name]: value});
    };

    const navigate = useNavigate();
    const submitHandler = (event) => {
      event.preventDefault();
      axios
        .post(`https://mern-notes-backend-5z2j.onrender.com/addNote`, note)
        .then(() => {
          navigate('/');
          Swal.fire({
            title: 'Your note has been added successfully!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        })
        .catch((err) => {err.data.msg});
    };
    return (
        <div>
            <h1 className="headline">
                Add <span>Note</span>
            </h1>
            <form className="note-form">
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={changeHandler}
                    placeholder="Title of Note ..."
                    required
                />
                <textarea
                    name="details"
                    rows="5"
                    defaultValue={note.details}
                    onChange={changeHandler}
                    placeholder="Descride Your Note ..."
                    required
                ></textarea>
                <button type="submit" onClick={submitHandler}>Save Note</button>
            </form>
        </div>
    );
}
