import { useState } from "react";
import "../styles/experience.css";

function Experience()
{
    const [company, setCompany] = useState("");
    const [position, setposition] = useState("");
    const [responsibilities, setResponsibilities] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [submitData, setsubmitData] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleSubmit =  (e) => {

        e.preventDefault();
        setEditMode(false);
        setsubmitData({company, position, responsibilities, dateFrom, dateTo})
    }

    if (editMode) {
        return(
            <div className="experience">
                <h2>Practical Experience</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    required
                    />
                    <br />
                    <br />
                    <input type="text"
                    value={position}
                    onChange={(e) => setposition(e.target.value)}
                    placeholder="Position of company"
                    required
                    />
                    <br />
                    <br />
                    <input type="text"
                    value={responsibilities}
                    onChange={(e) => setResponsibilities(e.target.value)}
                    placeholder="main responsibility"
                    required
                    />
                    <br />
                    <br />
                    <input type="text"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    placeholder="date from"
                    required
                    />
                    <br />
                    <br />
                    <input type="text"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    placeholder="date to"
                    required
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }else{
        return(
            <div className="experience">
            <h2>Practical Experience</h2>
            <p>Company name: {submitData?.company}</p>
            <p>Job Title: {submitData?.position} </p>
            <p>Main responsibility: {submitData?.responsibilities} </p>
            <p>Date From: {submitData?.dateFrom} </p>
            <p>Date To: {submitData?.dateTo} </p>
            <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
        )
    }
}

export default Experience
