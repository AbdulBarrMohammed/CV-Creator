
import Form from '../form/Form';
import '../App.css'
const ProjectFormContainer = ({title, setTitle, tools, setTools, projectDescription, setProjectDescription, dateCompleted, setDateCompleted}) => {
    return (
        <>
          <Form
            label="Project title"
            type = 'text'
            placeholder="Enter Project Title"
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form
            label="Project tools"
            type="text"
            placeholder="Enter Project tools / languages"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
          />


          <Form
            label="Completed Date"
            type="date"
            placeholder=""
            value={dateCompleted}
            onChange={(e) => setDateCompleted(e.target.value)}
          />

          <div class="label-container">
              <label>Description</label>
              <textarea className="description h-40"
                  placeholder="Enter each description seperated by ;"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}>
              </textarea>
          </div>

          <div class="btn-container">
              <button className='bg-[#2356F6]'>Save</button>
          </div>

        </>
    );
  };

  export default ProjectFormContainer;
