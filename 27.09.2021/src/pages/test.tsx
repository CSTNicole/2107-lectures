export default function Test(props){
    return (
        <div>
            <h1>{props.result.name}</h1>
        </div>
    );
};

export async function getServerSideProps() {
    const requestOptions:any = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch("http://localhost:3000/api/hello", requestOptions)
    const result = await response.json();
  
    return {
        props : {
            result
        }
    }
}