import "../styles/infoStyle.css"

function WorkExperienceInfo(positionTitle, employer, location, startDate, endDate, description, handleInfoChange) {

    return (
        <div className="workExperienceInfo">
            <h2>Experience</h2>
            <form onSubmit={e => e.preventDefault()}>
                <div className="inputRow">
                    <label htmlFor="positionTitle">Position title</label>
                    <input
                        placeholder="Position title"
                        className="positionTitle"
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="employer">Employer</label>
                    <input
                        placeholder="Employer"
                        className="employer"
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="location">Location</label>
                    <input
                        placeholder="Location"
                        className="location"
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="Start date">Start date</label>
                    <input type="month" className="start" name="start" min="1900-01" value="2018-05"/>
                </div>
                <div className="inputRow">
                    <label htmlFor="Start date">End date</label>
                    <input type="month" className="start" name="start" min="1900-01" value="2018-05"/>
                </div>
                <div className="inputCol">
                    <label htmlFor="Description">Responsibilities and Achievements</label>
                    <div className="text-area" contentEditable="true">

                    </div>
                </div>
                <button onClick={handleInfoChange}>Save</button>
            </form>
        </div>
    );
}

export default WorkExperienceInfo;