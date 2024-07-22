interface ToupleProps {
    touplekey : string;
    value: string;
}

function Touple(props: ToupleProps) {
  
    return (
        <div className='w-full flex flex-row justify-between font-600 text-subtitle text-text/secondary text-white'>
            <h3>{props.touplekey}</h3><h3>{props.value}</h3>
        </div>
    );
    }

export default Touple;