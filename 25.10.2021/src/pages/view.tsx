import { getCheetahs } from '../backend/database';


export default function View(props) {
    return (
        <div>
            { 
                props.cheetahs.map(
                    (cheetah) => {
                        return (
                            <div key={ cheetah.id }>
                                <h1>Name: { cheetah.name }</h1>
                                <h1>Pattern: { cheetah.pattern }</h1>
                                <h1>Speed: { cheetah.speed }</h1>
                                <h1>Country: { cheetah.country }</h1>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export async function getServerSideProps() {
    const data = await getCheetahs();

    console.log('data', data)

    const cheetahs = data.map(
        (cheetah) => {
            return {
                id: cheetah._id.toString(),
                name: cheetah.name,
                pattern: cheetah.pattern,
                speed: cheetah.speed,
                country: cheetah.country
            }
        }
    )

    console.log('cheetahs', cheetahs)
  
    return {
        props : {
            cheetahs
        }
    };
};