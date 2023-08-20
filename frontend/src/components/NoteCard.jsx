import { Link } from "react-router-dom";

export default function NoteCard({note}) {
    return (
        <div className="noteCard">
            <h2 className="title">
                <Link to={`/details/${note._id}`} style={{textDecoration: 'none', color: '#f5400f'}}>{note.title}</Link>
                <Link to={`/details/${note._id}`} style={{color: '#f5400f'}}><i className="fa-solid fa-ellipsis-vertical"></i></Link>
            </h2>
            <p className="details">
                {note.details}
            </p>
        </div>
    );
}
