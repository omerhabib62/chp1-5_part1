/* eslint-disable react/prop-types */



const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = ({ part, exercise}) =>
{
  return(
    <p>
      {part} {exercise}
    </p>
  )
  
}

const Content = ( {content} ) => {
  return (    
    <div>
      {
        content.map((element, index) => (
          <Part key={index} part={element.name} exercise={element.exercises} />
        ))
      }
    </div>
  );
};


const Total = ({ content }) => {
  // Initialize the accumulator (totalExercises) with 0.
  const totalExercises = content.reduce((accumulator, currentPart) => {
    // For each element (currentPart) in the content array:
    // - accumulator starts at 0 in the first iteration.
    // - In the first iteration: accumulator (0) + currentPart (10) = 10.
    // - In the second iteration: accumulator (10) + currentPart (7) = 17.
    // - In the third iteration: accumulator (17) + currentPart (14) = 31.
    return accumulator + currentPart;
    // The updated accumulator value is used in the next iteration.
    // The process continues until all elements in the content array are processed.
  }, 0);

  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const contentData = [part1, part2, part3];
  const totalData = [part1.exercises, part2.exercises, part3.exercises];

  return (
    <div>
      <Header course={course} />
      <Content 
        content={contentData}
       />
      <Total 
      content={totalData} />
    </div>
  );
};
export default App