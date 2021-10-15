import { getFlamingos } from '../backend/database';

export default function View(props) {
    return (
        <div>
            { 
                props.flamingos.map(
                    (flamingo) => {
                        return (
                            <div key={ flamingo.id }>
                                <h1>{ flamingo.name }</h1>
                                <h1>{ flamingo.hairColour }</h1>
                                <h1>{ flamingo.favouriteFood }</h1>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export async function getServerSideProps() {
    const data = await getFlamingos();

    // console.log('data', data);
    // TODO: format the data
    const flamingos = data.map(
        (flamingo) => {
            console.log('flamingo', flamingo);
            return {
                id: flamingo._id.toString(),
                name: flamingo.name,
                hairColour: flamingo.hairColour || 'red',
                favouriteFood: flamingo.favouriteFood || 'ice cream'
            };
        }
    );

    // console.log('flamingos', flamingos)
  
    return {
        props : {
            flamingos
        }
    };
};