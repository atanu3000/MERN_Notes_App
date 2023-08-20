import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";

export default function NoteDetails() {
    const { id } = useParams();
    const [note, setNote] = useState({
        id: "",
        title: "",
        details: "",
    });
    useEffect(() => {
        axios
            .get(`http://localhost:3000/noteDetails/${id}`)
            .then((res) => {
                setNote(res.data.content);
            })
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <div className="container">
            <DetailCard note={note} />
        </div>
    );
}
