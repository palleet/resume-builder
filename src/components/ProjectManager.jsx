import ProjectInfo from "./ProjectInfo.jsx";
import {v4 as uuidv4} from "uuid";

function ProjectManager({projects, handleInfoChange, setProjects}) {
    function addProject() {
        setProjects([...projects,
            {
                id: uuidv4(),
                projectName: '',
                skills: 'Java, Pytho',
                startDate: '1999-0',
                endDate: '',
                present: false,
                description: ''
            }
        ]);
    }

    return (
        <>
            {projects.map((project) =>
                <ProjectInfo
                    handleInfoChange={handleInfoChange}
                    project={project}
                    key={project.id}
                />
            )}


            <button className="addBtn" onClick={addProject}>Add Project</button>
        </>
    );
}

export default ProjectManager;