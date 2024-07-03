function ResumePreview(props) {

    return (
        <div id="resume-preview">
            <h2>Resume Preview</h2>
            <h2>Hi {props.fullName}!</h2>
            <h2>Email: {props.email}</h2>
            <h2>Phone Number: {props.phoneNumber}</h2>
        </div>
    )
}

export default ResumePreview;