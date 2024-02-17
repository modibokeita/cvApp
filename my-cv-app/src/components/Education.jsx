import { useState } from "react";
import '../styles/education.css';
function Education()
{
    const [schoolName, stateSchoolName] = useState('');
    const [studyTitle, stateStudyTitle] = useState('');
    const [studyDate, stateStudyDate] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const [editMode, setEditMode] = useState(true);

    const handleSubmit = (e) => {

        e.preventDefault();
        setEditMode(false);
        setSubmittedData({schoolName, studyTitle, studyDate})
    }

    if (editMode){
        return <div className="education">
            <h2>Educational Experience</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={schoolName}
                onChange={(e) => stateSchoolName(e.target.value)}
                placeholder="School name"
                required/>
                <br />
                <br />
                <input type="text"
                value={studyTitle}
                onChange={(e) => stateStudyTitle(e.target.value)}
                placeholder="Study Title"
                required
                />
                <br />
                <br />
                <input type="text"
                value={studyDate}
                onChange={(e) => stateStudyDate(e.target.value)}
                placeholder="Study Date"
                required
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    }else{
        return (
            <div className="education">
                <h2>Educational Experience</h2>
                <p>School name: {submittedData?.schoolName}</p>
                <p>Study Tile: {submittedData?.studyTitle} </p>
                <p>Date: {submittedData?.studyDate} </p>
                <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
        )
    }

}

export default Education;
