import ProjectInfo from "./ProjectInfo.jsx";
import {v4 as uuidv4} from "uuid";

function ProjectManager({projects, handleInfoChange, setProjects}) {
    function addProject() {
        setProjects([...projects,
            {
                id: uuidv4(),
                projectName: 'new Project v2',
                skills: 'Java, Python',
                startDate: '1999-02',
                endDate: '2000-10',
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


            <button onClick={addProject}>Add Project</button>
        </>
    );
}

export default ProjectManager;