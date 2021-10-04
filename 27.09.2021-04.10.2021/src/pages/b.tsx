export default function B(props){
    return (
        <div>
            <h1>{ props.num }</h1>
        </div>
    );
};

export function getStaticProps() {
    const num = Math.random() * 10000;
    console.log('get static props', num);
    return {
        props : {
            num
        }
    }
}