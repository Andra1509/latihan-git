import './style.css'

function Welcome(props){

    
    return (
    <>
    <div className='card'>
      <h1 className='nama'>Hello, {props.name}</h1>
      <h1 className='job'>Job : {props.job}</h1>
      <h1 className='age'>Age : {props.age}</h1>
    </div>
    </>
  );
}


export default Welcome
