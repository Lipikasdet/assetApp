import axios from "axios";
export default function Login(props:any) {
  console.log(props)
  return (
     <div>Hello {props.name} </div>
  )
}
export async function getServerSideProps(){
  const response= await axios.get('https://asset-app-z7h4.vercel.app/api/hello');
  const data=response.data.name;
  console.log(data,'00000')
  return {
    props:{name:data}
  }
}
