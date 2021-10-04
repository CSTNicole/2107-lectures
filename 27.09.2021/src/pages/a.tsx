export default function A(props){
    return (
        <div>
            <h1>{ props.num }</h1>
        </div>
    );
};

export function getServerSideProps() {
    const num = Math.random() * 10000;
    console.log('get serverSideProps', num);
    return {
        props : {
            num
        }
    }
}