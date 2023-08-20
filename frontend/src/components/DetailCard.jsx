import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function DetailCard({ note }) {
    const btnStyle = {
        padding: "0.5em 1em",
        fontSize: "1.1em",
        letterSpacing: "1px",
        background: "linear-gradient(#c53913, #f5400f)",
        color: "#f4f0e4",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        textDecoration: "none",
    };
    const navigate = useNavigate();
    const deleteNote = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://mern-notes-backend-5z2j.onrender.com/deleteNote/${note._id}`)
                    .then(() => {
                        navigate("/");
                        Swal.fire(
                            "Deleted!",
                            "Your Note has been deleted.",
                            "success"
                        );
                    })
                    .catch((err) => console.error(err));
            } else {
                return;
            }
        });
    };
    return (
        <div className="note-details">
            <h1 className="title">{note.title}</h1>
            <p className="details">{note.details}</p>
            <div className="action">
                <Link style={btnStyle} to={`/edit/${note._id}`}>
                    {" "}
                    Edit
                </Link>
                <button style={btnStyle} onClick={deleteNote}>
                    Delete
                </button>
            </div>
        </div>
    );
}
