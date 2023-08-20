import { Link } from 'react-router-dom'

export default function AddNote() {
  return (
    <Link to={'/add'}>
        <button className='addNote'>Add Note</button>
    </Link>
  )
}
