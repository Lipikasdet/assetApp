import axios from "axios";
export default function Home(props:any) {
  console.log(props)
  return (
     <div>Hello {props.name} </div>
  )
}
export async function getServerSideProps(){
  const response= await axios.get('http://localhost:3000/api/hello');
  const data=response.data.name;
  console.log(data,'00000')
  return {
    props:{name:data}
  }
}
